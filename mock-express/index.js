const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

function staticRoot(staticPath, req, res) {
    console.log(staticPath);
    const pathObj = url.parse(req.url, true);
    const filePath = path.resolve(staticPath, pathObj.pathname.substr(1));
    const fileContent = fs.readFileSync(filePath, 'binary');

    res.writeHead(200, 'ok');
    res.write(fileContent, 'binary');
    res.end();
}

const server = http.createServer((req, res) => {
    // res.end('hello world');
    staticRoot(path.resolve(__dirname, 'static/favicon.ico'), req, res);
});

server.listen(8080, () => {
   console.log('server listen to localhost:8080');
});