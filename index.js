var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var app = express();

console.log(path);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});

app.use(morgan('dev'));

app.use(express.static('app'));
app.use(express.static('bower_components'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(8080, function() {
	console.log("express app listening on port 3000.");
})