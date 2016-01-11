var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');

router.get('/instagram', passport.authenticate('instagram'));

router.get('/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
  	var tokenCode = req.query.code;
    var tokenBody = JSON.stringify({
      client_id: process.env.INSTAGRAM_CLIENT_ID,
      client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/auth/instagram/callback',
      code: tokenCode
    });
   	request.post({
   		url:'https://api.instagram.com/oauth/access_token',
      body: tokenBody
   	}), function(error, response, body) {
      if (error) {
        console.log('error', response.statusCode)
      } else {
        console.log('body', body);
      };
    };
  });



// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });


module.exports = router;