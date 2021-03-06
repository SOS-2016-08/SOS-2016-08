var express = require("express");

var request = require('request');
var bodyParser= require("body-parser");
var fs= require("fs");
var cors = require('cors');
var governify=require('governify');
var app= express();

//proxy candela

//donde voy a tener mi proxy, debe llamarse igual que la api que vamos a 
//repliar

//?apikey=multiPlan_C2_sos-2016-05-egf_ag

var pathsCandela='/api/v1/participants-number';
//proxy hacia el exterior
var apiServerHostCandela = 'http://sos-2016-05.herokuapp.com';
 
app.use(pathsCandela, function(req, res) {
  var url = apiServerHostCandela + req.baseUrl + req.url;
  console.log('piped: '+req.baseUrl + req.url);
  console.log('url: '+url);


  //el req hace una tuberia hacia el objeto response
  req.pipe(request(url,(error,response,body)=>{
  	if(error){
  		console.log(error);
  		res.sendStatus(503);

  	}

  })).pipe(res);
});








var pathBlanca = '/api/v1/mort-sickness';
var apiServerHostBlanca = 'http://sos-2016-03.herokuapp.com';

app.use(pathBlanca, function(req,res){
  var url = apiServerHostBlanca + req.baseUrl + req.url;
  console.log("Piped: "+ req.baseUrl + req.url);
  console.log("URL Accesed: "+ url);

  req.pipe(request(url,function (error,response,body){
    if(error){
      console.error(error);
      res.sendStatus(503);
    }
  })).pipe(res);
});



//multiPlan_C5_sos-2016-08-bhl_ag



governify.control(app,{
  datastore:"http://datastore.governify.io/api/v6.1/",
  namespace: "sos-2016-08-bhl",
  defaultPath:"/api/prueba"
});

var port = (process.env.PORT || 12345);
app.use("/",express.static(__dirname+"/static"));
app.use(bodyParser.json());
app.use(cors());


app.get("/api/prueba", (req,res)=>{
	res.send([
		{name:"blanca"},
		{name :"candela"}
		]);

});




//multiPlan_C2_sos-2016-08-cmg_ag

governify.control(app,{
  datastore: "http://datastore.governify.io/api/v6.1/",
  namespace:"sos-2016-08-cmg",
  defaultPath :"/api/v1/social_situation"
});


governify.control(app,{
  datastore:"http://datastore.governify.io/api/v6.1/",
  namespace: "sos-2016-08-bhl",
  defaultPath:"/api/v1/music"

});

var port = (process.env.PORT || 12345);
app.use("/",express.static(__dirname+"/static"));
app.use(bodyParser.json());



app.use(cors());
var musicCtl = require('./controles/musicCTL.js');
var moviesCtl= require('./controles/moviesCtl.js');
app.use('/',express.static(__dirname + '/public'));






//-----------API MUSIC-------------------------

app.get("/api/v1/music/loadInitialdata",musicCtl.getLoad);//funciona

app.get("/api/v1/music",musicCtl.getMusic);//funociona
app.get("/api/v1/music/:country/:year",musicCtl.getMusicCountryandYear);// funciona (CIUDAD Y AÑO)
app.get("/api/v1/music/:valor",musicCtl.getMusicCountryorYear); // funciona (YEAR O COUNTRY)



app.post("/api/v1/music", musicCtl.postMusic); //funciona
app.post("/api/v1/music/:country/:year",musicCtl.postMusic2);//funciona



app.put("/api/v1/music", musicCtl.putMusic);//funciona
app.put("/api/v1/music/:country/:year", musicCtl.putMusicCountryandYear);// funciona


app.delete("/api/v1/music", musicCtl.deleteMusic );//funciona
app.delete("/api/v1/music/:country/:year", musicCtl.deleteMusicRecurso);//funciona





//////////////prxy blanca////////////




////////////////////////////CANDELA//////////////////////////////////////



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

