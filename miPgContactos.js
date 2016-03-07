var express = require("express");
var fs = require("fs");
var contacts = [];

var app = express();

app.get("/",(req,res)=>{
	fs.readFile('contacts.json','utf8',(err,content)=>{
		console.log("Data read");
		contacts = JSON.parse(content);
		res.write("____Contacts____");
		contacts.forEach((contact)=>{
			res.write(" - "+contact.name+" ("+contact.phone")");
		});

		res.write("_____________");
		res.end();
	});
});

app.listen(16071);