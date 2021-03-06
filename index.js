// Keep your npm modules and other file dependencies at the top
var express = require('express');
var request = require('request');
// var Tessel = require("tessel-io");
// var five = require("johnny-five");

var test = require('./test_export.js')

// test = {
// 	  myFunc: hello,
// }


// Create a new express instance and point to it using the variable app
var app = express();

// Tells express where to find static assets (html, css, js); in this case - the "public" directory
app.use(express.static('public'));

// listens for HTTP requests to the root, "/", of our server
app.get('/', function (req, res) {
	// sends back the "index.html" file; Node is looking in the "public" directory for this
	res.send('index.html');
});

app.listen(1337, function () {
	console.log('go to http://localhost:1337');
});

console.log("hi");

test.helloFunc();
test.goodbyeFunc();

// var board = new five.Board({
//   io: new Tessel()
// });
// function say(){
//   console.log( "hi console");
// }
// board.on("ready", () => {
//   var led = new five.Led("a5");
//   var button = new five.Button("a2");
//   button.on("press", () => led.on() && say());
//   button.on("release", () => led.off());
// });
