'use strict';

var express = require('express');
var router = require('./api');

var app = express();

/**
 * Serve static files from public folder
 */
app.use('/', express.static('public'));

/**
 * Define routes
 */
app.use('/api', router);

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
