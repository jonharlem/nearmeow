var express = require('express');
var router = express.Router();
require('dotenv').load();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , gmapsBrowserKey: process.env.GMAPS_BROWSER_KEY});
});

module.exports = router;
