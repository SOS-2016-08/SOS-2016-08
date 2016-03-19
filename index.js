var express = require("express");
var bodyParser= require("body-parser");
var fs= require("fs");
var app= express();

var port = (process.env.PORT || 12345);

app.use("/",express.static(__dirname+"/static"));
app.use(bodyParser.json());


var music=[];

app.get("api/sandbox/music/:name",(req,res)=>{
	var name =req.params.name;
	console.log("New GET "+name);
	res.send(name);
	res.sendStatus(200);
});


app.get("api/sandbox/music",(req,res)=>{
	var name =req.params.name;
	console.log("New GET ");
	res.send(music);
	res.sendStatus(200);
});



app.post("api/sandbox/music", (req,res)=>{ // crea y es de cliente a servidor
	var mus= req.body; //recoge los datos
	music.push(mus);
	console.log("New post"+mus.name);
	res.sendStatus(201);
});



app.post("api/sandbox/music/:name", (req,res)=>{ 
	
	console.log("Not possible");
	res.sendStatus(404);
});



app.put("api/sandbox/music",(req,res)=>{
	console.log("Not possible");
	res.sendStatus(404);
});


///API CANDELA

function positionArr(str,ele){
	var acum=-1;
	for (var i=0;i<ele.lenght;i++)
		if (ele[i].name==str)
			acum=i;
	return acum;
};

var movies=[{name:"Volver"},{name:"Marte"},{name:"Interestelar"}];

app.get('/api-test/moviesFile/loadInitialData',function(req,res){
	movies=[];
	var file= fs.readFileSync('moviesFile.json','utf8');
	movies= JSON.parse(file);
	res.sendStatus(200);
});

app.get("/api/sandbox/moviesFile",function (req,res){
    console.log("New GET for directory listing");
	res.status(200).jsonp(mBands);

});