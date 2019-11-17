var fs = require('fs');

var data = "stream";

// 创建一个可以写入的流，写入到文件output.txt里面
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理事件流 --> data, end, error
writerStream.on('finish', function() {
    console.log('写入完成')
});

writerStream.on('error', function(error) {
    console.log(err.stack);
});

console.log("程序执行完毕");