var fs = require('fs');

// 创建一个可读流
var readerStream = fs.createReadStream('a.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('b.txt');

// 管道读写操作
// 读取 a.txt 文件内容，并将内容写入到 b.txt 里面
readerStream.pipe(writerStream);

console.log("程序执行完毕");