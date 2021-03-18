"use strict";

// http is now a reference to the built in http module
const fs = require('fs');
const http = require('http');

const PORT = 3000;
const HOST = "localhost";

// Create a callback function that includes a request and response
let server = http.createServer((req, res) => 
{

    let path = req.url;

    if(path == "/" || path == "\\")
    {
        path = "/index.html";
    }

    fs.readFile(__dirname + path, function (err,data) 
    {
        if (err) 
        {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
   // Listen on port 3000
}).listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);