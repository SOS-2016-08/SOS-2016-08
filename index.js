var express = require("express");
var bodyParser= require("body-parser");
var fs= require("fs");

var musicCtl = require('./controles/musicCTL.js');

var app= express();
var port = (process.env.PORT || 12345);

var moviesCtl= require('./controles/moviesCtl.js');
var port = (process.env.PORT || 10000);

app.use("/",express.static(__dirname+"/static"));

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



////////////////////////////////////////////////////////
/////////////////API CANDELA///////////////////////////



app.get('/api/v1/social_situation/loadInitialData',moviesCtl.getLoad);
app.get("/api/v1/social_situation",moviesCtl.getMovie);
app.get("/api/v1/social_situation/:country",moviesCtl.getMovie2);


app.get("/api/v1/social_situation/:country/:year",moviesCtl.getMovie3);



app.post("/api/v1/social_situation",moviesCtl.postMovie); 
app.post("/api/v1/social_situation/:country",moviesCtl.postMovie2); 
app.put("/api/v1/social_situation",moviesCtl.putMovie); 

app.put('/api/v1/social_situation/:country',moviesCtl.putMovie2); 

app.delete("/api/v1/social_situation/:country" ,moviesCtl.deleteMovie);

//Deletes all the resources in the given directory
app.delete("/api/v1/social_situation",moviesCtl.deleteMovie2); 

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


