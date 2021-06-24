const person = require('./src/person.js')
const http = require('http')
const eventEmitter = require('events')
const path = require('path')
const fs = require('fs')
const socket = require('socket.io')
let autoplay = path.join(__dirname, 'src', 'Autoplay.html')

http.createServer(function (req, res) {
    fs.readFile(autoplay, (err, content) =>{
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
    }
    )
  }).listen(5000,  () => console.log('Server Running....'));