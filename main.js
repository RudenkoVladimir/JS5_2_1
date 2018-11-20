const http = require('http');
const secret = require('./secret');


const port = 3000;
const pathName = '127.0.0.1';

http.createServer((req, res) => {
    const sts = JSON.parse('{"students": ["student1", "student2", "student3"]}');
    if(req.method === 'GET') {
        if(req.url === '/admin'){
            res.write('Hello admin');

        }
    }
    if(req.url === '/students'){
        sts.students.forEach(student => {
            res.write(student + '\n');
        });
    }

    res.end();
}).listen(port, pathName, () => {
    console.log('start listening');
});


