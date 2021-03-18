"use strict";


// Built in Modules
const fs = require('fs');     // fs is now a reference to the built in fs module
const url = require('url');   // url is now a reference to the built in url module
const http = require('http'); // http is now a reference to the built in http module
// Third Party Modules
const mime = require('mime-types'); 

let lookup = mime.lookup;

const PORT = 3000;
const HOST = "localhost";

// Create a callback function that includes a request and response
let server = http.createServer((req, res) => 
{
    let parsedURL = new URL(req.url, "http://" + HOST + ":" + PORT);

    let path = parsedURL.pathname.replace(/^\/+|\/+$/g, "");
    //let path = req.url;
    
    switch(path)
    {
        case "":
        case "":
        case "home":
            path = "/index.html";
            break;
        case "about":
            path = "/index.html";
            break;
        case "services":
            path = "/index.html";
            break; 
        case "contact":
            path = "/index.html";
            break;
        case "contact-list":
            path = "/index.html";
            break; 
        case "projects":
            path = "/index.html";
            break; 
        case "register":
            path = "/index.html";
            break; 
        case "login":
            path = "/index.html";
            break; 
        case "edit":
            path = "/index.html";
            break;
    }

    console.log(path);

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