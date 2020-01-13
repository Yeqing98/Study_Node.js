const fs = require('fs');
const stdout = process.stdout;
const stdin = process.stdin;

var statsFile = [];

fs.readdir(process.cwd(), (err, files) => {
    if (!files.length) {
        return console.log('No Files to show you');
    }

    console.log('Select which file or directory you want to see：');

    function file(i) {
        const filename = files[i];

        fs.stat(__dirname + '/' + filename, (err, stats) => {
            statsFile[i] = stats
            if (stats.isDirectory()) {
                console.log('directory:' + filename);
            } else {
                console.log('filename:' + filename);
            }

            i++;

            if (i === files.length) {
                read()
            } else {
                file(i)
            }
        })
    }

    function read() {
        console.log('');
        stdout.write('Enter your choice:');
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', option);
    }

    function option(data) {
        const filename = files[Number(data)]
        if (!filename) {
            stdout.write('Enter your choice:');
        } else {
            stdin.pause()
            if (statsFile[Number(data)].isDirectory()) {
                fs.readdir(__dirname + '/' + filename, (err, file) => {
                    console.log('(' + file.length + 'files)')
                    file.forEach(el => {
                        console.log('   -   ' + el)
                    })
                })
            } else {
                fs.readFile(__dirname + '/' + filename, 'utf8', (err, datas) => {
                    console.log('');
                    console.log(datas);
                })
            }
        }
    }

    file(0);
})