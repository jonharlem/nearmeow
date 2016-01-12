var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('places', { gmapsBrowserKey: process.env.GMAPS_BROWSER_KEY});
});

module.exports = router;
