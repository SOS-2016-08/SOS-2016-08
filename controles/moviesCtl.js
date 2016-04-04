var movies=[ {"country":"spain"   ,"year":"2010","sales":"160,54",  "digital":"48%",  "nodigital":"55%" },
{"country":"italy"   ,"year":"2010","sales":"101,66",  "digital":"39%",  "nodigital":"36%" },
{"country":"france"  ,"year":"2012","sales":"79,44",  "digital":"45%",  "nodigital":"49%" },
{"country":"spain"  ,"year":"2012","sales":"130,36",  "digital":"36%",  "nodigital":"67%" },
{"country":"spain"   ,"year":"2012","sales":"155,66",  "digital":"57%",  "nodigital":"76%" }
];
var fs= require("fs");


module.exports.getLoad=function(req,res){
  	movies=[];
	var file= fs.readFileSync('social.json','utf8');
	movies= JSON.parse(file);
	res.send(movies);
	res.sendStatus(200);
};

module.exports.getMovie=function(req,res){
    console.log("New GET for directory listing");
	res.status(200).jsonp(movies);
};



module.exports.getMovie2=function(req,res){ //get name
     var name = req.params.country;
     var y = req.params.year;
   
     result=[];

     for (i=0;i<movies.length;i++){
      if(movies[i].country==name || movies[i].year==name||movies[i].sales==name){
        console.log("new get "+name+y);
        result.push(movies[i]);

      }
     }
     res.send(result);
     res.sendStatus(404);
};
   
     
module.exports.getMovie3=function(req,res){ //get name
     var name = req.params.country;
     var ye=req.params.year;
     result=[];

     for (i=0;i<movies.length;i++){
      if(movies[i].country==name && movies[i].year==ye){
        console.log("new get "+name);
        result.push(movies[i]);

      }
     }
     res.send(result);
     res.sendStatus(404);
};
   


module.exports.postMovie=function(req,res){
		var mov= req.body;
		movies.push(mov);
		console.log("New post"+mov.name);
		res.sendStatus(200);
};

module.exports.postMovie2=function(req,res){
	console.log("WARNING post");
	res.sendStatus(403);
};

function PosArray(str,elements){
  var acum = -1;
 for(var i=0;i<elements.length-1;i++)
      if(elements[i].country==str)
       
        acum=i;
        console.log("Prueba "+acum);
      return acum;
};
      	


module.exports.putMovie=function(req,res){
	console.log("WARNING put");
	res.sendStatus(403);
};


module.exports.putMovie2=function(req,res){//put
      var temp = req.body;
      var id = req.params.country;
      if (mov != -1){
        var mov = PosArray(id,movies);
        movies[mov].country=temp.country;
        res.send(200);

  	}
  	else{
        res.send(404);
    }
  };





module.exports.deleteMovie=function(req,res){
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
  };

  module.exports.deleteMovie2=function(req,res){
	console.log("New DELETE of all resources");
	movies.splice(0,movies.length);
	res.sendStatus(200);
  };



