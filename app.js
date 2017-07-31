const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/news', function (req, res) {
  res.send('The news: swag.')
});

app.listen(3000, function () {
	console.log('Listening patiently at port 3000');
});
