const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(req, res) {
    console.log("Received request from " + req.connection.remoteAddress);
    response.writeHead(200);
    response.end("You've hit " + os.hostname() + "\n");
};

var server = http.createServer(handler);
server.listen(8080);