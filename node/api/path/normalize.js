const { normalize } = require('path');

console.log(normalize('/use//local/bin'));
console.log(normalize('/use//local/../bin'));

// normalize的作用是使得文件路径正确，会帮助我们修改文件路径