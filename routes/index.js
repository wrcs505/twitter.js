const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get( '/users/:name', function (req, res) {
  // let user = tweetBank.find({req.params.name, req.params.content});
  console.log(Array.isArray(tweetBank.list()));
  let tweets = tweetBank.list().forEach(function(tweetObj) {
    // console.log(tweetObj)
    if (tweetObj.name === req.params.name) return tweetObj;
  });
  console.log(tweets);
  res.render( 'index', { tweets: tweets } );
  // console.log( req.params.content ); // --> 'nimit'
});

module.exports = router;
