var express = require("express");
var bodyParser= require("body-parser");
var fs= require("fs");



var musicCtl = require('./controles/musicCTL.js');

var app= express();
var port = (process.env.PORT || 10000);


var moviesCtl= require('./controles/moviesCtl.js');


app.use("/",express.static(__dirname+"/static"));



app.use(bodyParser.json());






app.get("/api/v1/music/loadInitialData",musicCtl.getLoad);//funciona

app.get("/api/v1/music",musicCtl.getMusic);//funociona
app.get("/api/v1/music/:country",musicCtl.getMusic2); //funciona

app.get("/api/v1/music/:country/:year",musicCtl.getMusic3);// funciona

app.get("/api/v1/music/:year",musicCtl.getMusic4); //año


app.post("/api/v1/music", musicCtl.postMusic); 
app.post("/api/v1/music/:country",musicCtl.postMusic2);




app.put("/api/v1/music", musicCtl.putMusic);
app.put("/api/v1/music/:country", musicCtl.putMusic2);

app.delete("/api/v1/music", musicCtl.deleteMusic );
app.delete("/api/v1/music/:country", musicCtl.deleteMusic2);


////////////////////////////CANDELA//////////////////////////////////////

//////get////


app.get("/api/v1/social_situation/loadInitialData",moviesCtl.getLoad);
app.get("/api/v1/social_situation",moviesCtl.getMovie);
app.get("/api/v1/social_situation/:country",moviesCtl.getMovie2);
app.get("/api/v1/social_situation/:country/:year",moviesCtl.getMovie3);


////post////
app.post("/api/v1/social_situation",moviesCtl.postMovie); 
app.post("/api/v1/social_situation/:country",moviesCtl.postMovie2); 



//put/////
app.put("/api/v1/social_situation",moviesCtl.putMovie);
app.put('/api/v1/social_situation/:country',moviesCtl.putMovie2); 
app.put('/api/v1/social_situation/:country/:year',moviesCtl.putMovie2); 



////delete
app.delete("/api/v1/social_situation/:country/:year" ,moviesCtl.deleteMovie);
app.delete("/api/v1/social_situation/:country" ,moviesCtl.deleteMovie);
app.delete("/api/v1/social_situation",moviesCtl.deleteMovie2); 






app.get("/time",(req,res)=>{
	var now = new Date();
	res.write("It is" +now);
	res.end();

});





app.listen(port, ()=>{
	console.log("Magic happens on port "+port);
});


