var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/instagram',
  passport.authenticate('instagram'));

router.get('/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req);
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });


module.exports = router;