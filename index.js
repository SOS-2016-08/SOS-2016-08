var express = require("express");
var bodyParser= require("body-parser");
var fs= require("fs");

var musicCtl = require('./controles/musicCTL.js');

var app= express();
var port = (process.env.PORT || 12345);


var moviesCtl= require('./controles/moviesCtl.js');


app.use("/",express.static(__dirname+"/static"));





app.use(bodyParser.json());
app.use("/",express.static(__dirname+"/static"));






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





app.get('/api/v1/social_situation/loadInitialData',moviesCtl.getLoad);
app.get("/api/v1/social_situation",moviesCtl.getMovie);
app.get("/api/v1/social_situation/:country",moviesCtl.getMovie2);



app.get("/api/v1/social_situation/:country/:year",moviesCtl.getMovie3);



app.post("/api/v1/social_situation",moviesCtl.postMovie); 
app.post("/api/v1/social_situation/:country",moviesCtl.postMovie2); 
app.put("/api/v1/social_situation",moviesCtl.putMovie); 







app.put('/api/v1/social_situation/:country',moviesCtl.putMovie2); 




app.put('/api/v1/social_situation/:country',moviesCtl.putMovie2); 


app.delete("/api/v1/social_situation/:country" ,moviesCtl.deleteMovie);

app.delete("/api/v1/social_situation",moviesCtl.deleteMovie2); 



///////////////////////////////////////
//////API GONZALO////////////

function PosArrayG(str,elements){
	var acum = -1;
 for(var i=0;i<elements.length;i++)
      if(elements[i].sex==str)
        acum=i;
	return acum;
};

var party=[{sex:"hombre", country:"spain"    ,year:"2012",  "POP":"22",  "POProck":"1", 
"rap":"12", "reggaeton":"31", "rock":"18", "classic":"3", "dance":"1", "flamenco":"2", 
"heavymetal":"0", "indie":"1", "jazz":"1" }];

app.get('/api/v1/sex_and_ages/loadInitialData',function(req,res){
  party=[];
	var file= fs.readFileSync('sex-and-ages.json','utf8');
	party= JSON.parse(file);
	res.sendStatus(200);
});



app.get("/api/v1/sex_and_ages",(req,res)=>{
    console.log("New GET for directory listing");
	res.status(200).jsonp(party);
});



app.get("/api/v1/sex_and_ages/:sex",(req,res)=>{ //get name
     var name = req.params.sex;
      console.log("New GET of resource "+name);
  	var m = PosArrayG(name,party);
  	console.log("Valor de m = "+m)
  	if(m != -1){
      res.send(party[m]);
    }
  	else{
  		
      res.sendStatus(404);
    }
  });

app.post("/api/v1/sex_and_ages", (req,res)=>{
		var par= req.body;
		party.push(par);
		console.log("New post"+par.name);
		res.sendStatus(200);
});


app.post("/api/v1/sex_and_ages/:sex", (req,res)=>{
	console.log("WARNING post");
	res.sendStatus(403);
});

app.put("/api/v1/sex_and_ages", (req,res)=>{
	console.log("WARNING put");
	res.sendStatus(403);
});





app.put('/api/v1/sex_and_ages/:sex',(request, response)=>{ //put
      var temp = request.body;
      var id = request.params.sex;
      if (par != -1){
          var par = PosArrayG(id,party);
          party[par].sex=temp.sex;
          response.send(200);
  	}
  	else{
        response.send(404);
    }
  });



app.delete("/api/v1/sex_and_ages/:sex", (req,res)=>{
    var name=req.params.sex;
    console.log("New DELETE of resource "+name);
	var par = PosArrayG(name,party);
	if (par != -1)
	{
    		party.splice(par,1);
		res.sendStatus(200);
}
    	else
		res.sendStatus(404);
  });


//Deletes all the resources in the given directory
app.delete("/api/v1/sex_and_ages", (req,res)=>{
	console.log("New DELETE of all resources");
	party.splice(0,party.length);
	res.sendStatus(200);
  });


app.get("/time",(req,res)=>{
	var now = new Date();
	res.write("It is" +now);
	res.end();

});





app.listen(port, ()=>{
	console.log("Magic happens on port"+port);
});


