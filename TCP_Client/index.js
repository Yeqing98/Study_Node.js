const net = require('net');

let client = net.connect(3000, 'localhost');

client.on('connect', function() {})

client.setEncoding('utf-8');