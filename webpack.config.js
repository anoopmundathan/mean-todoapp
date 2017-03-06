var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/app',
  	entry: "./app.js",
  	output: {
  		path: __dirname + '/public/scripts',
    	filename: 'bundle.js'
  	}, 
  	plugins: [
  		new webpack.optimize.UglifyJsPlugin()
  	]
}
