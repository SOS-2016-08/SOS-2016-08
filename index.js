var express = require("express");
var bodyParser= require("body-parser");
var fs= require("fs");

var app= express();
var port = (process.env.PORT || 12345);

app.use("/",express.static(__dirname+"/static"));
app.use(bodyParser.json());

var musicCtl = require('./controles/musicCTL.js');
var moviesCtl= require('./controles/moviesCtl.js');



//-----------API MUSIC-------------------------



app.get("/api/v1/music/loadInitialData",musicCtl.getLoad);//funciona

app.get("/api/v1/music",musicCtl.getMusic);//funociona
app.get("/api/v1/music/:country/:year",musicCtl.getMusicCountryandYear);// funciona (CIUDAD Y AÑO)
app.get("/api/v1/music/:valor",musicCtl.getMusicCountryorYear); // funciona (YEAR O COUNTRY)



app.post("/api/v1/music", musicCtl.postMusic); //funciona
app.post("/api/v1/music/:country/:year",musicCtl.postMusic2);//funciona



app.put("/api/v1/music", musicCtl.putMusic);//funciona
app.put("/api/v1/music/:country/:year", musicCtl.putMusicCountryandYear);// funciona


app.delete("/api/v1/music", musicCtl.deleteMusic );//funciona
app.delete("/api/v1/music/:country/:year", musicCtl.deleteMusicRecurso);//funciona

////////////////////////////CANDELA//////////////////////////////////////


//--------- API MOVIES--------------------------
app.get('/api/v1/social_situation/loadInitialData',moviesCtl.getLoad);


app.get("/api/v1/social_situation/loadInitialData",moviesCtl.getLoad);

//--------- API MOVIES--------------------------
app.get('/api/v1/social_situation/loadInitialData',moviesCtl.getLoad);



app.get("/api/v1/social_situation",moviesCtl.getMovie);
app.get("/api/v1/social_situation/:country",moviesCtl.getMovie2);
app.get("/api/v1/social_situation/:country/:year",moviesCtl.getMovie3);



////post////
app.post("/api/v1/social_situation",moviesCtl.postMovie); 
app.post("/api/v1/social_situation/:country",moviesCtl.postMovie2); 



//put/////
app.put("/api/v1/social_situation",moviesCtl.putMovie);

app.post("/api/v1/social_situation",moviesCtl.postMovie); 
app.post("/api/v1/social_situation/:country",moviesCtl.postMovie2); 

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

