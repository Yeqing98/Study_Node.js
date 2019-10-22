var events = require('events');

var eventEmitter = new events.EventEmitter();

console.log('事件执行开始')

var connectHandle = function connected () {
    console.log("连接成功");

    // 触发成功
    eventEmitter.emit('data_received');
}

// 绑定connection事件
eventEmitter.on('connection', connectHandle);

// 绑定data_received事件
eventEmitter.on('data_received', function() {
    console.log('数据接收成功')
})

// 触发connection事件
eventEmitter.emit('connection');

console.log('事件执行完毕')