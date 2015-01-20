var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    port = process.env.PORT || 8080;

server.listen(port, function(){
    console.log("Server listening at port %d", port);
});

app.get("/student/:id", function(req, res){
    res.end(req.params.id + " rocks!");
});

app.use(express.static(__dirname + '/www/'));
