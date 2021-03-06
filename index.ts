// Built in Modules
import fs = require('fs');     // fs is now a reference to the built in fs module
import path = require('path');  
//const url = require('url');   // url is now a reference to the built in url module
//const http = require('http'); // http is now a reference to the built in http module
// Third Party Modules
import express = require('express');


const app = express();  // Use the express() constructor method to create an app
const PORT = process.env.PORT || '3000';
const HOST: string = "localhost";

// Load all static files
loadStaticFiles();


// Handles Routing
app.get('/', (req, res) => {
    displaySPA(res);
});

// Handles Wild Card Routes (Helps us use the 404 page)
app.get('*', (req, res) => {
  displaySPA(res);
});
  
// starts the Server and listens on PORT (3000)
  app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});


function displaySPA(res: any) : void
{
  fs.readFile("index.html", (err, data) =>
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
}

function loadStaticFiles(): void
{
  // Use and load all the static files found in the "node_modules" directory
  app.use(express.static(path.join(__dirname, "node_modules")));

  // Use and load all the static files found in the "Client" Directory
  app.use(express.static(path.join(__dirname, "Client")));

  app.use(express.static(path.join(__dirname, "Views")));
}

// 
    