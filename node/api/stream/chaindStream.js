var fs = require('fs');

var zlib = require('zlib');

// 创建一个可读流
var readerStream = fs.createReadStream('x.txt');

// 压缩 input.txt 文件为 input.txt.gz
readerStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('x.txt.gz'));

console.log('程序执行完成');