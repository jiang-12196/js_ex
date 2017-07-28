const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');


var routes = {
    '/a': function (req, res) {
        res.end('match /a, query is: '+ JSON.stringify(req.query))
    },
    '/ｂ': function (req, res) {
        res.end('match /b, query is: '+ JSON.stringify(req.query))
    },
    '/a/c': function (req, res) {
        res.end('match /a/c, query is: '+ JSON.stringify(req.query))
    },
    '/search': function (req, res) {
        res.end('username=' + req.body.username + ',password='+ req.body.password)
    }
}

// function staticRoot(staticPath, req, res) {
//     console.log(staticPath);
//     const pathObj = url.parse(req.url, true);
//     const filePath = path.resolve(staticPath, pathObj.pathname.substr(1));
//     const fileContent = fs.readFileSync(filePath, 'binary');
//
//     res.writeHead(200, 'ok');
//     res.write(fileContent, 'binary');
//     res.end();
// }

const server = http.createServer((req, res) => {
    // res.end('hello world');
   routePath(req, res);
    // staticRoot(path.resolve(__dirname, 'static/favicon.ico'), req, res);
});

server.listen(8080, () => {
   console.log('server listen to localhost:8080');
});

function routePath(req, res){
    var pathObj = url.parse(req.url, true)
    var handleFn = routes[pathObj.pathname]

    if(handleFn){
        req.query = pathObj.query

        var body = ''
        req.on('data', function(chunk){
            body += chunk
        }).on('end', function(){
            req.body = parseBody(body)
            handleFn(req, res)
        })

    }else {
        staticRoot(path.resolve(__dirname, 'static'), req, res)
    }
}

function staticRoot(staticPath, req, res){
    var pathObj = url.parse(req.url, true)
    var filePath = path.resolve(staticPath, pathObj.pathname.substr(1))

    fs.readFile(filePath,'binary', function(err, content){
        if(err){
            res.writeHead('404', 'haha Not Found')
            return res.end()
        }

        res.writeHead(200, 'Ok')
        res.write(content, 'binary')
        res.end()
    })

}

function parseBody(body) {
    var obj = {}
    body.split('&').forEach(function (str) {
        obj[str.split('=')[0]] = str.split('=')[1]
    })
    return obj

}