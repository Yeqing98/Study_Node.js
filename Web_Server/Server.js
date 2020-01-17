const http = require('http');
const qs = require('querystring')

const HttpServer = http.createServer(function(req, res) {
    var body = '';

    req.on('data', function(chunk) {
        body += chunk;
    });

    req.on('end', function() {
        res.writeHead(200);
        res.end('Done');
        console.log('got name ' + qs.parse(body).name);
    })
});

HttpServer.listen(3000);