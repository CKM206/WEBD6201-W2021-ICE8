"use strict";


// Built in Modules
const fs = require('fs');     // fs is now a reference to the built in fs module
//const url = require('url');   // url is now a reference to the built in url module
//const http = require('http'); // http is now a reference to the built in http module
// Third Party Modules
const express = require('express');
const app = express();  // Use the express() constructor method to create an app

const PORT = 3000;
const HOST = "localhost";

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
  })

// fs.readFile(file, function (err,data) 
//     {
//         if (err) 
//         {
//             res.writeHead(404);
//             res.end("ERROR: 404 - Page not Found!");
//             return;
//         }
//         res.setHeader("X-Content-Type-Options", "nosniff"); // Security: Avoids mime-sniffing
//         let mime = lookup(path);
//         res.writeHead(200, { "Content-type": mime });
//         res.end(data);
//     });
    