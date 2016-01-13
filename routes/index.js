var express = require('express');
var router = express.Router();
require('dotenv').load();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.user = req.user || "";
  	res.render('index', { title: 'Login', gmapsBrowserKey: process.env.GMAPS_BROWSER_KEY, user: process.env.ACCESS_TOKEN});
});


router.post('/vote', function(req, res, next) {
	var gPlaceId = JSON.parse(req.body.data).id;
	
	//var place = req.body.place;
	//var user = //get user_id;
	//make call to google place api or grab info form req.body
	// knex('places').insert({name: , google_place_id: , latitude: , longitude: })
	// .then(function(place){
	// 	knex('votes').insert({place_id: place.id, user_id: user, timestamp: Date.now()})
	// 	.then(function(){
	// 		res.redirect('/votes');
	// 	});
	// });
});



// router.get('/votes', function(req, res) {
// 	var currentDate = Date.now().get
// 	//knex('votes').whereBetween('timestamp', [,Date.now()])
// });


router.get('/recent', function(req, res, next) {
	//'https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=process.env. '
})

module.exports = router;