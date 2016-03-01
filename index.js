var express = require("express");
var fs= require("fs");
var app= express();

app.get("/about",(req,res)=>{
	fs.readFile('contactos.json','utf-8',(err,content)=>{
		console.log("Data read");
		contactos = JSON.parse(content);
		res.write("<html><body>------Members-------<ul>");
		contactos.forEach((contacto)=>{
			res.write("<li>"+contacto.name+"</li>");
		});
		res.write("</ul>------------------------------------------------------------</body></html>");
		res.end();
	});
});

app.get("/about/country-types",(req,res)=>{
	fs.readFile('country-types.json','utf-8',(err,content)=>{
		console.log("Data read");
		country-types= JSON.parse(content);
		res.write("<html><body> we can see the percentage of population listening music , besides the musical genre most listened<ul> ");
		country-types.forEach((linea)=>{
			res.write("<li>"+linea.country+" , "+linea.year+" , "+linea.percentage+" , "+linea.type+"</li>");
		});
		res.end();

	});
});




app.listen(process.env.PORT);

