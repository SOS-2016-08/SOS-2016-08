var express = require("express");
var app= express();
var bodyParser= require("body-parser");



var port = (process.env.PORT || 12345);

app.use("/",express.static(__dirname+"/static"));
app.use(bodyParser.json());

var fs= require("fs");


////////////////////////////////////////////////////////
/////////////////API CANDELA///////////////////////////


function PosArray(str,elements){
	var acum = -1;
 for(var i=0;i<elements.length;i++)
      if(elements[i].name==str)
        acum=i;
	return acum;
};


var movies=[{name:"Volver"},{name:"Marte"},{name:"Interestelar"}];

app.get('/api-test/film/loadInitialData',function(req,res){
	movies=[];
	var file= fs.readFileSync('film.json','utf8');
	movies= JSON.parse(file);
	res.sendStatus(200);
});

app.get("/api/sandbox/movies",(req,res)=>{
    console.log("New GET for directory listing");
	res.status(200).jsonp(movies);
});



app.get("/api/sandbox/movies/:name",(req,res)=>{ //get name
     var name = req.params.name;
      console.log("New GET of resource "+name);
  	var m = PosArray(req.params.name,movies);
  	console.log("Valor de m"+m)
  	if(m != -1){
      res.send(movies[m]);
    }
  	else{
  		
      res.sendStatus(404);
    }
  });

app.post("/api/sandbox/movies", (req,res)=>{
		var mov= req.body;
		movies.push(mov);
		console.log("New post"+mov.name);
		res.sendStatus(200);
});


app.post("/api/sandbox/movies", (req,res)=>{
	console.log("WARNING post");
	res.sendStatus(403);
});

app.put("/api/sandbox/movies", (req,res)=>{
	console.log("WARNING put");
	res.sendStatus(403);
});





app.put('/api/sandbox/movies/:name',(request, response)=>{ //put
      var temp = request.body;
      var id = request.params.name;
      if (mov != -1){
          var mov = PosArray(id,movies);
          movies[mov].name=temp.name;
          response.send(200);
  	}
  	else{
        response.send(404);
    }
  });



// app.delete("/api/sandbox/movies/:name", (req,res)=>{
//     var name=req.params.name;
//     console.log("New DELETE of resource "+name);
// 	var mov = PosArray(name,movies);
// 	if (mov != -1)
// 	{
//     		movies.splice(mov,1);
// 		res.sendStatus(200);
// }
//     	else
// 		res.sendStatus(404);
//   });


// //Deletes all the resources in the given directory
// app.delete("/api/sandbox/movies", (req,res)=>{
// 	console.log("New DELETE of all resources");
// 	movies.splice(0,movies.length);
// 	res.sendStatus(200);
//   });



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

app.listen(port,()=>{
 	console.log("Magic happens on port"+port);
 });
