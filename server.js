const express = require("express");
const path = require("path");
const socketIO = require('socket.io');
const http = require('http');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
    console.log("A new user just connected");

    socket.on('disconnect', () => {
        console.log('A user just disconnected');
    });
});

server.listen(PORT, function () {
    console.log(`Listening on port ${PORT}!`);
});