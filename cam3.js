// Step 3
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var os = require('os');
var path = require('path');
var cp = require('child_process');
var port = 8080;

var av = require('tessel-av');

server.listen(port, function () {
  console.log(`http://${os.hostname()}.local:${port}`);
});

app.use(express.static(path.join(__dirname, '/public')));

io.on('connection', (socket) => {
  var camera = new av.Camera();

  socket.on('ready', () => camera.stream());
  camera.on('data', (data) => {
    socket.emit('image', data.toString('base64'));
  });
});

process.on("SIGINT", _ => server.close());
