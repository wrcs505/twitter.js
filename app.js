const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
  noCache: true,

}); // point nunjucks to the proper directory for templates

app.use(express.static('public'));

app.use('/', routes);

/*
app.use(function (req, res, next) {
  // do your logging here
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding
  console.log(chalk.blueBright('new request', req.method, req.url));
  console.log(chalk.green('new response', res.method, res.url));
  next();
});

app.get('/', function (req, res) {

  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );

});

app.get('/news', function (req, res) {

  res.send('The news: swag.');

});

*/
app.listen(3000, function () {
	console.log('Listening patiently at port 3000');
});

