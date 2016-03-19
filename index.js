var express = require("express");
var bodyParser= require("body-parser");
var fs= require("fs");
var app= express();

var port = (process.env.PORT || 12345);

app.use("/",express.static(__dirname+"/static"));
app.use(bodyParser.json());

<<<<<<< HEAD

=======
var aficiones=[];
var parties=[];
>>>>>>> 9bbe049b4d8b778b1f4d5a4796acd5da3a7923b3
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

<<<<<<< HEAD
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
=======
var movies=[];


app.get("/api/sandbox/movies/:name",(req,res)=>{
	var name =req.params.name;
	console.log("New get"+name);
	res.send(name);
	res.sendStatus(200);
});


app.post("/api/sandbox", (req,res)=>{

	//if(res.rendstatus(404))
	//	console.log("Error")
	//else
		var aficion= req.body;
		aficiones.push(aficion);
		console.log("New post"+aficion.name);
		res.sendStatus(200);
});

//app.get("/api/sandbox/:name",(req,res)=>{
//	var name =req.params.name;
//	res.send(parties);
//});

//app.post("/api/sandbox", (req,res)=>{

	//if(res.rendstatus(404))
	//	console.log("Error")
	//else
	//	var party= req.body;
	//	parties.push(party);
	//	console.log("New post"+party.name);
	//	res.sendStatus(200);
//}

app.get("/api/sandbox/movies",(req,res)=>{
	var name =req.params.name;
	console.log("New get"+name);
	res.send(movies);
	res.sendStatus(200);
});

//app.get("/api/sandbox/parties",(req,res)=>{
//	var name =req.params.name;
//	console.log("New get"+name);
//	res.send(parties);
//	res.sendStatus(200);
//});

app.post("/api/sandbox/movies", (req,res)=>{
	var aficion= req.body;
	movies.push(aficion);
	console.log("New post"+aficion.name);
	res.sendStatus(201);
});

app.post("/api/sandbox/movies/:name", (req,res)=>{
	console.log("WARNING ");
	res.sendStatus(404);
});


app.put("/api/sandbox/movies", (req,res)=>{
	console.log("WARNING ");
	res.sendStatus(404);
});


app.put("/api/sandbox/movies/:name", (req,res)=>{
	var a= req.body;
	var id=req.params.name;
	var mov=StrArray(id,mov);
	if(mov != -1){
		movies[mov].name=a.name;
		res.send(200);
	}
	else{
		res.send(404);
	}
});


app.put("/api/sandbox/movies", (req,res)=>{
	console.log("WARNING ");
	res.sendStatus(404);
});


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

>>>>>>> 9bbe049b4d8b778b1f4d5a4796acd5da3a7923b3

});