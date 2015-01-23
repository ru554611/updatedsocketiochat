var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    port = process.env.PORT || 8080,
    io = require('socket.io')(server),
    _ = require('underscore');

server.listen(port, function(){
    console.log("Server listening at port %d", port);
});

io.on('connection', function (socket) {
  // when the client emits 'new message', this listens and executes
  socket.on('receive message', function (data) {
      var oOut = {
          from: _.escape(data.from),
          message: _.escape(data.message)
      };
      socket.broadcast.emit("receive message", oOut);
  });
});

app.use(express.static(__dirname + '/www/'));
