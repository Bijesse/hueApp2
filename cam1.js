//step 1
var fs = require('fs');
var path = require('path');

var av = require('tessel-av');
var camera = new av.Camera();
var capture = camera.capture();

capture.on('data', function(data) {
console.log (data);
  //fs.writeFile(path.join(__dirname, 'captures/captured-via-data-event.jpg'), data);
});
