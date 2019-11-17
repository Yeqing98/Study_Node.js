console.log(Buffer.alloc(10));

console.log(Buffer.alloc(20));

console.log(Buffer.alloc(10, 1));

console.log(Buffer.allocUnsafe(10, 1));

console.log(Buffer.from([1,2,3]));

console.log(Buffer.from('test'));

console.log(Buffer.from('test', 'base64'));

// 创建buffer实例