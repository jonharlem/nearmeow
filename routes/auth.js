var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/instagram', function(req, res) {
  res.redirect('https://api.instagram.com/oauth/authorize/?client_id=' + process.env.INSTAGRAM_CLIENT_ID 
    + '&redirect_uri=http://localhost:3000/auth/instagram/callback&response_type=code')
});

router.get('/instagram/callback', function(req, res) {
  console.log('here');
 	request({
    form: {
      client_id: process.env.INSTAGRAM_CLIENT_ID,
      client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/auth/instagram/callback',
      code: req.query.code
    },
    uri:'https://api.instagram.com/oauth/access_token',
    method: 'POST'
 	}, function(error, response, body) {
    if (error) {
      console.log('error', response.statusCode)
    } else {
      process.env.ACCESS_TOKEN = response.body;
      // console.log('body', body);
      res.redirect('/');
    };
  });
});

// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });


module.exports = router;