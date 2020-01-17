const http = require('http');
const qs = require('querystring');

const httpServer = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if ("/" == req.url) {
        res.end([
            '<form method="POST" action="/url">'
          , '<h1>My form</h1>'
          ,   '<filedset>'
          ,   '<label>Person information</label>'
          ,   '<p>what is your name</p>'
          ,   '<input type="text" name="name">'
          ,   '<p><button>Submit</button><p>'
          , '</form>'
        ].join(''));
    } else if ("/url" == req.url) {
        var body = '';

        req.on('data', function (chunk) {
            body += chunk;
        })
        req.on('end', function () {
            res.end('<p>your name is ' + qs.parse(body).name +'</p>')
        })
    } else {
        res.writeHead(404);
        res.end('NOT FOUND')
    }

})

httpServer.listen(3000);
