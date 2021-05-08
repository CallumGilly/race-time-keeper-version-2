//Import decency's
const express = require(`express`);
const bodyParser = require(`body-parser`);
const route = require('./router');

//Set constants
const port = 3030;

//#region Set up app
var app = express();
app.use(bodyParser.json());
app.use(route);
//#endregion

//Listener
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})
