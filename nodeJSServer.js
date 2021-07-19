const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// create the server
const server = http.createServer((req, res) => {
    // set the status code to indicate a successful response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // closing the response
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});