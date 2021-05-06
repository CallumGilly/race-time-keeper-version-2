//Import depencys
const express = require(`express`);
const bodyParser = require(`body-parser`)


//Set constants
const port = 3030;

//#region Set up app
var app = express();
app.use(bodyParser.urlencoded())
//#endregion

//#region Code to test the JSON parsing mechanisms
app.get(`/test/jsonOut`, (req, res) => {
    testList = {
        Users: [
            {
                name: `Dave`,
                time: 2.31,
                length: 100
            },
            {
                name: `John`,
                time:4.5,
                length: 100
            }
        ]
    };
    res.json(testList.Users);
});

app.post(`/test/bodyParser`, (req,res) => {
    console.log(req.body);
    res.json(req.body);
}); 
//#endregion

//Listener
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})