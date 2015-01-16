var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    port = process.env.PORT || 8080;

server.listen(port, function(){
    console.log("Server listening at port %d", port);
});

app.use(express.static(__dirname + '/www/'));
