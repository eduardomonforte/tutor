const express = require('express');
const passport = require('passport');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const request = require('request');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

const env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
};

router.get('/', (req, res, next) => {
  // Now, rather than just sending the text "You are on the homepage", we are going to actually render the view we created using the res.render method. The second argument will allow us to pass in data from the backend to our view dynamically.
  res.render('index', { env: env });
});

router.get('/login', passport.authenticate('auth0', {
  clientID: env.AUTH0_CLIENT_ID,
  domain: env.AUTH0_DOMAIN,
  redirectUri: 'https://tutor-1.herokuapp.com/callback',
  responseType: 'code',
  scope: 'openid profile email'
}), (req, res) => {
  res.redirect("/");
}
);

router.get('/logout', (req, res) => {
  // For the logout page, we don't need to render a page, we just want the user to be logged out when they hit this page. We'll use the ExpressJS built in logout method, and then we'll redirect the user back to the homepage.
  req.logout();
  res.redirect('/');
});

// router.get('/user', ensureLoggedIn, (req, res, next) => {
//   // Same thing for our
//   res.render('user', { env: env, user: req.user });
// });

router.get('/user_info', ensureLoggedIn, (req, res, next) => {
  // Same thing for our
  res.json(req.user);
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }),
  function (req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
);

module.exports = router;