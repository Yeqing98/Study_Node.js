const buf = Buffer.from('this is a test!');

// buf.length查看buffer长度
console.log(buf.length);

// buf.toString()变成字符串
console.log(buf.toString());

// buf.fill()填充buffer内容
const buf1 = Buffer.allocUnsafe(10);
console.log(buf1)
console.log(buf1.fill(10, 2, 6));

// buf.equals()比较两个buffer内容是否一样
const buf2 = Buffer.from('test');
const buf3 = Buffer.from('test');
const buf4 = Buffer.from('test!');
console.log(buf2.equals(buf3));
console.log(buf2.equals(buf4));

// buf.indexOf()查询位置
console.log(buf2.indexOf('es'));
console.log(buf2.indexOf('esa'));