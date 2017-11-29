let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('loading',  {title: 'express'});
    //setTimeout(() => res.render('index', {title: 'express'}), 3000);
});

module.exports = router;
