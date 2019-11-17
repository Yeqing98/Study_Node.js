const { join } = require('path');

console.log(join('/use', '/local', '/bin'));

// join的作用是拼接路径，把里面的参数拼接成一个路径，
// 调用join的时候，它会自动调用normalize，将路径多余的地方修改