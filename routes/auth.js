var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');

router.get('/instagram', passport.authenticate('instagram'));

router.get('/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
  	var tokenCode = req.query.code;
   	request.post({
   		url:'http://localhost:3000/auth/instagram/callback/' + tokenCode
   	});
  });

router.post('/instagram/callback/:code', function(req, res, next) {
	var code = req.params.code;
	console.log('code', code);
	res.redirect('/');
});

// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });


module.exports = router;