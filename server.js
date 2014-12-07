var express = require('express');
var app = express();
var port = 80;

app.get('/', function(req, res) {
	res.sendfile('./index.html');
});

// local copy of most recent updates from the thermostat


//'https://bussrvstg.sensicomfort.com/api/authorize'

app.use('/js', express.static('./js'));

app.listen(port);
console.log('The magic happens on port ' + port);