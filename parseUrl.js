var http = require('http');

var parserUrl = function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("pathname--->",pathname);
}


var server = http.createServer(function (req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log("pathname--->",pathname);
    }
);

server.listen(3000, '127.0.0.1');