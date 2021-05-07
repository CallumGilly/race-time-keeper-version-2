const supertest = require(`supertest`);
const should = require(`should`);
const assert = require('assert');

var server = supertest.agent(`http://localhost:3030`);

describe(`Test Pages unit test:`, () => {
    it(`Should return the User dave`, (done) => {
        server
        .get(`/test`)
        .expect("Content-type",/json/)
        .expect(200)
        .end((err,res) => {
            res.status.should.equal(200);
            res.body.error.should.equal(false);
            res.body.user.should.equal('David');
            done();
        });
    });

    it(`Should return the data send`, () => {
        const testData = {foo: 'bar'}
        server
        .post(`/test`)
        .send(testData)
        .expect("Content-type",/json/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            res.body.error.should.equal(false);
            res.body.data.foo.should.equal(testData.foo);
        });
    });
});
