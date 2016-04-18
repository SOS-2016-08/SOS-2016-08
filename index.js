var express = require("express");
var bodyParser= require("body-parser");
var fs= require("fs");


var musicCtl = require('./controles/musicCTL.js');


var app= express();
var port = (process.env.PORT || 10000);

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
app.post("/api/v1/music/:country",musicCtl.postMusic2);//funciona



app.put("/api/v1/music", musicCtl.putMusic);//funciona
app.put("/api/v1/music/:country/:year", musicCtl.putMusicCountryandYear);// funciona

<<<<<<< HEAD
////////////////////////////CANDELA//////////////////////////////////////
=======
app.delete("/api/v1/music", musicCtl.deleteMusic );//funciona
app.delete("/api/v1/music/:country/:year", musicCtl.deleteMusic2);//funciona
>>>>>>> 2d992353e8f3830664e3e27607ce6f06ac14c9e7

//////get////


<<<<<<< HEAD
app.get("/api/v1/social_situation/loadInitialData",moviesCtl.getLoad);
=======
//--------- API MOVIES--------------------------
app.get('/api/v1/social_situation/loadInitialData',moviesCtl.getLoad);

>>>>>>> 2d992353e8f3830664e3e27607ce6f06ac14c9e7
app.get("/api/v1/social_situation",moviesCtl.getMovie);
app.get("/api/v1/social_situation/:country",moviesCtl.getMovie2);
app.get("/api/v1/social_situation/:country/:year",moviesCtl.getMovie3);

<<<<<<< HEAD

////post////
app.post("/api/v1/social_situation",moviesCtl.postMovie); 
app.post("/api/v1/social_situation/:country",moviesCtl.postMovie2); 



//put/////
app.put("/api/v1/social_situation",moviesCtl.putMovie);
=======
app.post("/api/v1/social_situation",moviesCtl.postMovie); 
app.post("/api/v1/social_situation/:country",moviesCtl.postMovie2); 

app.put("/api/v1/social_situation",moviesCtl.putMovie); 
>>>>>>> 2d992353e8f3830664e3e27607ce6f06ac14c9e7
app.put('/api/v1/social_situation/:country',moviesCtl.putMovie2); 
app.put('/api/v1/social_situation/:country/:year',moviesCtl.putMovie2); 

<<<<<<< HEAD


////delete
app.delete("/api/v1/social_situation/:country/:year" ,moviesCtl.deleteMovie);
=======
>>>>>>> 2d992353e8f3830664e3e27607ce6f06ac14c9e7
app.delete("/api/v1/social_situation/:country" ,moviesCtl.deleteMovie);
app.delete("/api/v1/social_situation",moviesCtl.deleteMovie2); 



<<<<<<< HEAD
=======




>>>>>>> 2d992353e8f3830664e3e27607ce6f06ac14c9e7



app.get("/time",(req,res)=>{
	var now = new Date();
	res.write("It is" +now);
	res.end();

});





app.listen(port, ()=>{
	console.log("Magic happens on port "+port);
});


