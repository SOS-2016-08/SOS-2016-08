var express = require("express");
var fs= require("fs");
var contactos = [];
var app= express();

app.get("/",(req,res)=>{
	fs.readFile('contactos.json','utf8',(err,content)=>{
		console.log("Data read");
		contactos = JSON.parse(content);
		res.write("<html><body>------Contacts-------<ul>");
		contactos.forEach((contacto)=>{
			res.write(" <li> "+contacto.name+"("+contacto.phone+")</li>");
		});
		res.write("</ul>------------</body></html>");
		res.end();
	});
});

app.listen(process.env.PORT);

