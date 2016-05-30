var express = require("express");
var app= express();
var http= require("http").Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html');


});

app.use('/css', express.static('main.css'));
app.use('/image', express.static('image'));
app.use('/fonts', express.static('public'));

io.on('connection', function(socket){
	console.log("new message");

	socket.on('chat', function(msg){
		//console.log(msg);
		io.emit("nuevo_mensaje",msg);
	});	

});

http.listen(8080,function(){
	console.log("Muy bien");
});

