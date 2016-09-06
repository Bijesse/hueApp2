var express = require('express');
var request = require('request');
var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  var sensor = new five.Sensor({
    pin: "a7",
    threshold: 2
  });
  var led = new five.Led("a5");

  sensor.on("change", () => {
    dimmer();
  });


function dimmer(){
  led.brightness(sensor.scaleTo(0, 255));
}
});
