const net = require('net');

// 追踪连接数
var count = 0;
var users = {};

let server = net.createServer(function(conn) {
    var nickname;
    
    console.log('new connection');
    conn.write(
        '\n > welcome to node-chat'
        + '\n > ' + count + 'other people are connected at this time.'
        + '\n > please write your name and press enter: '
    );
    count++;
    conn.setEncoding('utf8');
    conn.on('data', function(data) {
        data = data.replace('\r\n', '');

        if (!nickname) {
            if (users[data]) {
                console.log('nickname already in use, try again:');
            } else {
                nickname = data;
                users[nickname] = conn;
                // 给每个人分发消息
                broadcast(nickname + 'joined the room\n');
            }
        } else {
            broadcast(nickname + ':' + data + '\n', true);
        }
    })

    conn.on('close', function() {
        broadcast(nickname + 'leave the room\n');
        count--;
        delete users[nickname];
    })

    function broadcast(msg, exceptMyself) {
        for (let i in users) {
            // 排除自己，给其他人分发消息
            if (!exceptMyself || i != nickname) {
                users[i].write(msg)
            }
        }
    }
})

server.listen(3000, function() {
    console.log('server listening on :* 3000');
})


