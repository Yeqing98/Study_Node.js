const http = require('http');
const qs = require('querystring')

function send (theName) {
    http.request({
        host: '127.0.0.1',
        port: 3000,
        url: '/',
        method: 'POST'
    }, function (res) {
        res.setEncoding('utf8');
        res.on('end', function() {
            console.log('request complete');
            process.stdout.write('\n your name: ');
        });
    }).end(qs.stringify({ name: theName }));
}

process.stdout.write('\n your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(name) {
    let nameA = name.replace('\n', '');
    send(nameA);
})
