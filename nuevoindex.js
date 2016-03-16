var express = require ("express");
var bodyParser = require("body-parser");

var port = (process.env.PORT || 12345);
var app = express ();

var contacts = [(name:"pablo")];

app.use(bodyParser.json());



app.get("/contacts/:name",(req,res)=>{
	var name = req.params.name;
	res.send(contacts[0]);
	console.log("GET of resource " + name);
});

app.listen(port);