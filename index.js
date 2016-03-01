var express = require("express");
var fs= require("fs");
var contactos = [];
var app= express();

app.get("/",(req,res)=>{
	fs.readFile('contactos.json','utf8',(err,content)=>{
		console.log("Data read");
		contactos = JSON.parse(content);
		res.write("------Contacts-------");
		contactos.forEach((contacto)=>{
			res.write(" - "+contacto.name+"("+contacto.phone+")");
		});
		res.write("-------------");
		res.end();
	});
});

app.listen(70444);

