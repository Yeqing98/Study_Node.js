const { basename, dirname, extname } = require('path');

const filePath = '/use/local/bin/no.txt';

console.log(basename(filePath))
console.log(dirname(filePath))
console.log(extname(filePath))

// basename：文件名
// dirname： 文件路径
// extname： 文件拓展名