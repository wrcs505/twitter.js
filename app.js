const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(chalk.blue('new request', req.method, req.url));
    console.log(chalk.green('new response', res.method, res.url));
    next();
});


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/news', function (req, res) {
  res.send('The news: swag.')
});

app.listen(3000, function () {
	console.log('Listening patiently at port 3000');
});
