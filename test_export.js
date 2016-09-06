var express = require('express');
var request = require('request');

var hueURL = "http://192.168.1.2/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7";

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



function hello () {
  console.log('hello');
}

function goodbye () {
  console.log('goodbye');
}

// module.exports.hello = hello;

module.exports = {
  helloFunc: hello,
  goodbyeFunc: goodbye,
  greenFunc: greenLight,
}
