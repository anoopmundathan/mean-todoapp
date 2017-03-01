'use strict';

var express = require('express');
var path = require('path');

var app = express();

require('./database');
require('./seed');
/**
 * Serve static files from public folder
 */
app.use('/', express.static('public'));

/**
 * Vendor scripts
 */
app.get('/vendor/angular.js', function(req,res) {
	res.sendFile(path.join(__dirname, '../node_modules', 'angular', 'angular.js'));
});

/**
 * Define routes
 */
app.use('/api', require('./api'));

/**
 * Set port
 */
app.set('port', process.env.PORT || 3000);

/**
 * Listen for incoming requests
 */
app.listen(app.get('port'), function() {
	console.log('Server running at port', app.get('port'));
});
