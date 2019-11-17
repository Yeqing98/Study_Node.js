var fs = require('fs');

console.log("异步执行开始")

fs.readFile('test.txt', function(err, data) {
    if (err) {console.log(err)};
    console.log(data.toString());
})

console.log("异步代码执行结束")

// 异步执行读取文件， 不会阻塞代码的执行， 造成异步