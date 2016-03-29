var express = require("express");
var bodyParser= require("body-parser");
var fs= require("fs");

var musicCtl = require('./controles/musicCTL.js');

var app= express();
var port = (process.env.PORT || 12345);


app.use(bodyParser.json());
app.use("/",express.static(__dirname+"/static"));






app.get("/api/v1/music/loadInitialData",musicCtl.getLoad);//funciona

app.get("/api/v1/music",musicCtl.getMusic);//funociona
app.get("/api/v1/music/:country",musicCtl.getMusic2); //funciona

app.get("/api/v1/music/:country/:year",musicCtl.getMusic3);// funciona

app.get("/api/v1/music/:country",musicCtl.getMusic4); //año




app.post("/api/v1/music", musicCtl.postMusic); //funciona
app.post("/api/v1/music/:country",musicCtl.postMusic2);//funciona



app.put("/api/v1/music", musicCtl.putMusic);//funciona
app.put("/api/v1/music/:country", musicCtl.putMusic2);//funciona

app.delete("/api/v1/music", musicCtl.deleteMusic );//funciona
app.delete("/api/v1/music/:country", musicCtl.deleteMusic2);//funciona



app.get("/about",(req,res)=>{
	fs.readFile('contactos.json','utf-8',(err,content)=>{
		console.log("Data read");
		contactos = JSON.parse(content);
		res.write("<html><body><b><H1><BLOCKQUOTE><U>Members</U></BLOCKQUOTE></H1></b><ul>");
		contactos.forEach((contacto)=>{
			res.write("<li>"+contacto.name+"</li></CENTER>");
			
		});
		res.write("</ul></body></html>");
		res.write("</ul>-------------------------------------------------------------------------</body></html>");
		res.end();
	});
});

// app.get("/about/country-types",(req,res)=>{
// 	fs.readFile('countrytypes.json','utf-8',(err,content)=>{
// 		console.log("Data read");
// 		countrytypes= JSON.parse(content);
// 		res.write("<html><body> we can see the percentage of population listening music , besides the musical genre most listened <ul>");
// 		countrytypes.forEach((linea)=>{
// 			res.write("<li>"+linea.country+" , "+linea.year+" , "+linea.percentage+" , "+linea.type+"</li>");
// 		});
// 		res.write("</ul>------------------------------------------------------------------------</body></html>");
// 		res.end();

// 	});
// });

// app.get("/about/social-situation",(req,res)=>{
// 	fs.readFile('socialsituation.json','utf-8',(err,content)=>{
// 		console.log("Data read");
// 		socialsituation= JSON.parse(content);

// 		res.write("<html><body> Here we see the percentages according to digital music sales or physical format <ul>");
// 		res.write("<table ><tr><td ><strong> country</strong></td>")
// 		res.write("<td><strong> year</strong></td>")
// 		res.write("<td><strong> sales</strong></td>")
// 		res.write("<td><strong> digital</strong></td>")
// 		res.write("<td><strong> noDigital</strong></td></tr></table>")
		
// 		socialsituation.forEach((linea)=>{
// 			//res.write("<li>"+linea.country  +" , "+linea.year+" , "+linea.sales+" , "+linea.digital+", "+linea.nodigital+"</li>");
// 			res.write("<table><tr><td>"+linea.country+"  "+linea.year+"  "+linea.sales+"  "+linea.digital+"  "+linea.nodigital+"</td></tr></table>")

// 		});
// 		res.write("</ul>------------------------------------------------------------------------</body></html>");
// 		res.end();


		

// 	});
// });

//Gonzalo


// app.get("/about/sex-and-ages",(req,res)=>{
// 	fs.readFile('sex-and-ages.json','utf8',(err,content)=>{
// 		console.log("Data read");
// 		sexandages = JSON.parse(content);

// 		res.write("<html><body> Statistics of musical tastes based on the sex and age <ul>");
		
// 		sexandages.forEach((linea)=>{
// 			res.write(" - "+linea.sex+"  "+linea.country+" "+linea.year+" "+linea.POP+" "+linea.POProck+" "+linea.rap+" "+
// 				linea.reggaeton+" "+linea.rock+" "+linea.classic+" "+linea.dance+" "+linea.flamenco+" "+linea.heavymetal+" "+linea.indie);
// 		});

// 		res.write("_____________");
// 		res.end();
// 	});
// });


app.get("/time",(req,res)=>{
	var now = new Date();
	res.write("It is" +now);
	res.end();

});





app.listen(port, ()=>{
	console.log("Magic happens on port"+port);
});


