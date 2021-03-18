"use strict";

// http is now a reference to the built in http module
const http = require('http');

const PORT = 3000;
const HOST = "localhost";

// Create a callback function that includes a request and response
let server = http.createServer((req, res) => 
{
    // Write the header of the response
   res.writeHead(200, {
       'Content-Type': 'text/plain'
   });
   // Respond with hello world
   res.end('Hello World!');
   // Listen on port 3000
}).listen(PORT);

console.log('Server running at http://${HOST}:${PORT}/');