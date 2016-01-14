var express = require('express');
var router = express.Router();
require('dotenv').load();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.user = req.user || "";
  	res.render('index', { title: 'Login', gmapsBrowserKey: process.env.GMAPS_BROWSER_KEY, user: process.env.ACCESS_TOKEN});
});

router.get('/places', function(req, res, next) {
	res.render('places', { gmapsBrowserKey: process.env.GMAPS_BROWSER_KEY});
});

router.post('/vote', function(req, res, next) {
	var data = JSON.parse(req.body.data),
		gPlaceId = data.id,
		gPlaceName = data.name,
		gPlaceLat = data.geometry.location.lat,
		gPlaceLng = data.geometry.location.lng;
		// console.log(req.body.data);
	res.redirect(301, '/');
	//var user = //get user_id;
	knex('places').insert({name:gPlaceName, google_place_id:gPlaceId, latitude:gPlaceLat, longitude:gPlaceLng})
	.then(function(place){
		// knex('votes').insert({place_id: place.id, user_id: user, timestamp: Date.now()})
		// .then(function(){
			res.end();
		// });
	});
});




// router.get('/votes', function(req, res) {
// 	var currentDate = Date.now().get
// 	//knex('votes').whereBetween('timestamp', [,Date.now()])
// });


router.get('/recent', function(req, res, next) {
	//'https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=process.env. '
})

module.exports = router;