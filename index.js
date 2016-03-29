var express = require("express");
var app= express();
var bodyParser= require("body-parser");


var moviesCtl= require('./controles/moviesCtl.js');
var port = (process.env.PORT || 10000);

app.use("/",express.static(__dirname+"/static"));

app.use(bodyParser.json());

var fs= require("fs");


////////////////////////////////////////////////////////
/////////////////API CANDELA///////////////////////////




app.get('/api/v1/social_situation/loadInitialData',moviesCtl.getLoad);
app.get("/api/v1/social_situation",moviesCtl.getMovie);
app.get("/api/v1/social_situation/:country",moviesCtl.getMovie2);




app.post("/api/v1/social_situation",moviesCtl.postMovie); 
app.post("/api/v1/social_situation/:country",moviesCtl.postMovie2); 
app.put("/api/v1/social_situation",moviesCtl.putMovie); 



app.put('/api/v1/social_situation/:country',moviesCtl.putMovie2); 


app.delete("/api/v1/social_situation/:country" ,moviesCtl.deleteMovie);

//Deletes all the resources in the given directory
app.delete("/api/v1/social_situation",moviesCtl.deleteMovie2); 


app.get("/time",(req,res)=>{
	var now = new Date();
	res.write("It is" +now);
	res.end();

});

app.listen(port,()=>{
 	console.log("Magic happens on port"+port);
 });
