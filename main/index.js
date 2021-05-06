//Import depencys
const express = require(`express`);
const bodyParser = require(`body-parser`)


//Set constants
const port = 3030;

//#region Set up app
var app = express();
app.use(bodyParser.json())
//#endregion

//#region Code to test the JSON parsing mechanisms

//Should return the `User` value inside of testList
app.get(`/test/jsonOut`, (req, res) => {
    testList = {
        User: 'David'
    };
    res.json({
        'error': false, 
        'user': testList.User
    });
});

//Should return the data it was sent
app.post(`/test/bodyParser`, (req,res) => {
    console.log(req.body);
    res.json({
        'error': false,
        'data': req.body
    });
}); 
//#endregion

//Listener
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})