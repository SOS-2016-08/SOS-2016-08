var express = require("express");
var fs= require("fs");
var app= express();

app.get("/about",(req,res)=>{
	fs.readFile('contactos.json','utf-8',(err,content)=>{
		console.log("Data read");
		contactos = JSON.parse(content);
		res.write("<html><body><b><H1><BLOCKQUOTE><U>Members</U></BLOCKQUOTE></H1></b><ul>");
		contactos.forEach((contacto)=>{
			res.write("<li>"+contacto.name+"</li></CENTER>");
		});
		res.write("</ul></body></html>");
		res.end();
	});
});

app.get("/about/country-types",(req,res)=>{
	fs.readFile('countrytypes.json','utf-8',(err,content)=>{
		console.log("Data read");
		countrytypes= JSON.parse(content);
		res.write("<html><body> we can see the percentage of population listening music , besides the musical genre most listened <ul>");
		countrytypes.forEach((linea)=>{
			res.write("<li>"+linea.country+" , "+linea.year+" , "+linea.percentage+" , "+linea.type+"</li>");
		});
		res.write("</ul>--------------------------------------------------------------------------</body></html>");
		res.end();

	});
});

app.get("/about/social-situation",(req,res)=>{
	fs.readFile('socialsituation.json','utf-8',(err,content)=>{
		console.log("Data read");
		socialsituation= JSON.parse(content);

		res.write("<html><body> Here we see the percentages according to digital music sales or physical format <ul>");
		res.write("<table><tr><td><strong> country</strong></td>")
		res.write("<td><strong> year</strong></td>")
		res.write("<td><strong> sales</strong></td>")
		res.write("<td><strong> digital</strong></td>")
		res.write("<td><strong> noDigital</strong></td></tr></table>")
		
		socialsituation.forEach((linea)=>{
			//res.write("<li>"+linea.country  +" , "+linea.year+" , "+linea.sales+" , "+linea.digital+", "+linea.nodigital+"</li>");
			res.write("<li><tr><td>"+linea.country+"</td></tr>","<li><tr><td>"+linea.year+"</td></tr></li>")
			//res.write(</li>")
		});
		res.write("</ul>--------------------------------------------------------------------------</body></html>");
		res.end();


		

	});
});


app.listen(process.env.PORT);

