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
    switch(path)
    {
        case "/":
        case "\\":
            path = "/index.html";
            break;
        case "/home":
            break;
        case "/about":
            break;
        case "/services":
            break; 
        case "/contact":
            break;
        case "/contact-list":
            break; 
        case "/projects":
            break; 
        case "/register":
            break; 
        case "/login":
            break; 
        case "/edit":
            break;
        default:
            break;

    }

    fs.readFile(__dirname + path, function (err,data) 
    {
        if (err) 
        {
            res.writeHead(404);
            res.end("ERROR: 404 - Page not Found!");
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
   // Listen on port 3000
}).listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);