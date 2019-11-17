const { parse, format } = require('path');

const filePath = '/use/local/node_modules/n/package.json'

const ret = parse(filePath);

console.log(ret);

console.log(format(ret));

// parse：将文件路径解析出来
// format：与parse相反，将解析出来的分析在拼接回路径