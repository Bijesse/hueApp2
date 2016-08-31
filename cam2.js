//Step 2
var fs = require("fs");
var os = require("os");
var http = require("http");
var port = 1337;

var av = require("tessel-av");
var camera = new av.Camera({
  width: 640,
  height: 480,
});

var server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "image/jpg" });

  camera.capture().pipe(response);

}).listen(port, () => console.log(`http://${os.hostname()}.local:${port}`));

process.on("SIGINT", _ => server.close());
