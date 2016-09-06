var express = require('express');
var request = require('request');
var Tessel = require("tessel-io");
var five = require("johnny-five");

var test = require('./test_export.js');

//module.exports.hello = hello;

// module.exports = {
//   helloFunc: hello,
//   goodbyeFunc: goodbye,
// }

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var led = new five.Led("a5");
  var led2 = new five.Led("a1");
  var button = new five.Button("a2");
  var sensor = new five.Sensor({
    pin: "a7",
    threshold: 2
  });
  button.on("press", () => led2.on() && greenLight());
  button.on("release", () => led2.off());
  sensor.on("change", () => { dimmer() && hueDim()

    //led.brightness(sensor.scaleTo(0, 255));
  });

  var hueURL = "http://192.168.1.2/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7";
  //request({ url: url, method: 'PUT', json: {foo: "bar", woo: "car"}}, callback)

  function greenLight(){
    request({
      url: hueURL + "/lights/1/state",
      method: 'PUT',
      json: {"hue":25653}
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
    );
  }

  function dimmer(){
    led.brightness(sensor.scaleTo(0, 255));
  }

  function hueDim(){
    request({
      url: hueURL + "/lights/1/state",
      method: 'PUT',
      json: {"bri":sensor.scaleTo(0, 255)}
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
    );
  }



});






// request(hueURL, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//   }
// });
