const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get( '/users/:name', function (req, res) {
  //let user = tweetBank.find({req.params.name, req.params.content});
  // console.log(Array.isArray(tweetBank.list()));
  //let tweets = tweetBank.list().map(function(tweetObj) {
    // console.log(tweetObj.name)
    //let namer = tweetObj.name.split(' ')[0].toLowerCase();
    //console.log(req.params.name, namer);
    // console.log(typeof req.params.name)
    //if (namer === req.params.name) return tweetObj;
  //});

  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  // console.log(tweets);
  res.render( 'index', { tweets: tweets } );
  // console.log( req.params.content ); // --> 'nimit'
});

router.get( '/tweets/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  var tweet = tweetBank.find( {id: id} );
  res.render( 'index', { tweet: tweet } );
});

module.exports = router;
