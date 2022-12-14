// Con nodeJS----------------------------------------------------
const http = require(`http`);

const hostname = `127.0.0.1`;
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader(`Content-Type`,`text/plain`);
    res.end(`Hola Mundo Con Node.JS`);
    
});

server.listen(port, hostname,() =>{
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
    console.log(`Oscar Esteban Velasquez Lopez`);
});


// Con Express.js------------------------------------------------

// const express = require(`express`);

// const app = express();
// const port = 3000;

// app.get(`/`, (req, res) =>{
//     res.send(`Hello World! con Express`)

// })

// app.listen(port,() =>{
//     console.log(`Example app listening at http://localhost:${port}`);
//     console.log(`Operacion Matematica 5 + 5 = ${5 + 5} `);
// });
