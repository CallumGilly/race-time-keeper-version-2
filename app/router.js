express = require(`express`);
router = express.Router();

//#region Code to test the JSON parsing mechanisms

//Should return the `User` value inside of testList
router.get(`/test`, (req, res) => {
    testList = {
        User: 'David'
    };
    res.json({
        'error': false,
        'user': testList.User
    });
});

//Should return the data it was sent
router.post(`/test`, (req,res) => {
    console.log(req.body);
    res.json({
        'error': false,
        'data': req.body
    });
});
//#endregion

module.exports = router;