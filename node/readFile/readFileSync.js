var fs = require('fs');

console.log("同步执行开始");

data = fs.readFileSync('test.txt');

console.log(data.toString());

console.log("同步执行结束")

// 同步执行读取文件， 会阻塞代码的执行, 不会造成异步