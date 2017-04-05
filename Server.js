const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/app'));
//add this so the browser can GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));
//app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
