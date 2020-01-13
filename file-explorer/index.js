const fs = require('fs');

fs.readdir(__dirname, (err, file) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(file);
})

process.stdout.write("Hello World");

console.log("Hello World");  // 本质就是process.stdout.write， 但是在后面加了 /n 换行符
