const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/angular-tour-of-heroes')));

app.get('*', function (req, res, next) {
  res.sendFile(__dirname + 'dist/angular-tour-of-heroes/index.html');
});


const server = http.createServer(app);

server.listen(3000);
console.log(`Server listening on 3000`);

