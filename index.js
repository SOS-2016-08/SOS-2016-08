var express = require("express");
var app= express();
var bodyParser= require("body-parser");



var port = (process.env.PORT || 10000);

app.use("/",express.static(__dirname+"/static"));
app.use(bodyParser.json());

var fs= require("fs");


////////////////////////////////////////////////////////
/////////////////API CANDELA///////////////////////////


function PosArray(str,elements){
	var acum = -1;
 for(var i=0;i<elements.length;i++)
      if(elements[i].country==str)
        acum=i;
	return acum;
};


var movies=[{country:"spain",year:"2012","sales":"160,54",  "digital":"48%",  "nodigital":"55%" }];

app.get('/api/v1/social_situation/loadInitialData',function(req,res){
  movies=[];
	var file= fs.readFileSync('social.json','utf8');
	movies= JSON.parse(file);
	res.sendStatus(200);
});



app.get("/api/v1/social_situation",(req,res)=>{
    console.log("New GET for directory listing");
	res.status(200).jsonp(movies);
});



app.get("/api/v1/social_situation/:country",(req,res)=>{ //get name
     var name = req.params.country;
      console.log("New GET of resource "+name);
  	var m = PosArray(name,movies);
  	console.log("Valor de m = "+m)
  	if(m != -1){
      res.send(movies[m]);
    }
  	else{
  		
      res.sendStatus(404);
    }
  });

app.post("/api/v1/social_situation", (req,res)=>{
		var mov= req.body;
		movies.push(mov);
		console.log("New post"+mov.name);
		res.sendStatus(200);
});


app.post("/api/v1/social_situation/:country", (req,res)=>{
	console.log("WARNING post");
	res.sendStatus(403);
});

app.put("/api/v1/social_situation", (req,res)=>{
	console.log("WARNING put");
	res.sendStatus(403);
});





app.put('/api/v1/social_situation/:country',(request, response)=>{ //put
      var temp = request.body;
      var id = request.params.country;
      if (mov != -1){
          var mov = PosArray(id,movies);
          movies[mov].country=temp.country;
          response.send(200);
  	}
  	else{
        response.send(404);
    }
  });



app.delete("/api/v1/social_situation/:country", (req,res)=>{
    var name=req.params.country;
    console.log("New DELETE of resource "+name);
	var mov = PosArray(name,movies);
	if (mov != -1)
	{
    		movies.splice(mov,1);
		res.sendStatus(200);
}
    	else
		res.sendStatus(404);
  });


//Deletes all the resources in the given directory
app.delete("/api/v1/social_situation", (req,res)=>{
	console.log("New DELETE of all resources");
	movies.splice(0,movies.length);
	res.sendStatus(200);
  });

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

app.listen(port,()=>{
 	console.log("Magic happens on port"+port);
 });
