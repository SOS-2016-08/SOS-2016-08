var fs= require("fs");

var musical=[ 
{country:"spain"    ,year:"2010",  percentage:"12%",  type:"reggaeton" },
{country:"spain"    ,year:"2011",  percentage:"53%",  type:"folk" },
{country:"usa"    ,year:"2011",  percentage:"50%",  type:"pop" },
{country:"italy"    ,year:"2012",  percentage:"80%",  type:"classic" },
{country:"germany"    ,year:"2012",  percentage:"88%",  type:"reggaeton" },
{country:"usa"    ,year:"2012",  percentage:"90%",  type:"folk" }];


var pass=123;



module.exports.getLoad=function(req,res){
  //lee datos
  var apikey=req.query.apikey;
  
  if (apikey==pass){
  	musical=[];
    var file= fs.readFileSync('countrytypes.json','utf8');
    musical= JSON.parse(file);
    //res.send(musical);
    res.sendStatus(201);
  }else{
    
    res.sendStatus(401);
  }
	
};





module.exports.getMusic=function(req,res){
  from = req.query.from;
  to = req.query.to;
  limit = req.query.limit;
  offset = req.query.offset;
  apikey = req.query.apikey;
  var resultado = [];
  if (apikey==pass){
    for(var i=0;i<musical.length;i++){
      resultado.push(musical[i]);
    }
    if (from && to){
      for(var i=0;i<resultado.length;i++){
        if(resultado[i].year < from  ||  resultado[i].year > to){
          resultado.splice(i,1);
          i = i - 1;
        }
      }
    }
    if(limit && offset){
      resultado.splice(0,offset);
      resultado.splice(limit,resultado.length-limit);
    }
  res.send(resultado);
  res.sendStatus(200);
  }

else
{
  res.sendStatus(401);
}


};


module.exports.getMusicCountryandYear=function(req,res){ //get country/year
	var name = req.params.country;
  var ye=req.params.year;

  var apikey =req.query.apikey;
  var bool= true;
  if(apikey==pass){

    console.log("apikey1 y pass1-->"+apikey+pass);
    result=[];
    for (i=0;i<musical.length;i++){
      if(musical[i].country==name && musical[i].year==ye){
        console.log("new get "+name);
      	result.push(musical[i]);
      	bool=false;

      }

    }
    if(bool){
      res.sendStatus(404);

    }
    res.send(result);

    


  }else{
    res.sendStatus(401);

  }

};


module.exports.getMusicCountryorYear=function(req,res){ //get name or get year
  var valor = req.params.valor;
  
  var limit= req.query.limit;
  var offset= req.query.offset;
  var from= req.query.from;
  var to =req.query.to;
    
  var apikey=req.query.apikey;
  var bool=true;
  var result=[];
  if(apikey==pass){


    for (var i=0;i<musical.length;i++){

      if(musical[i].country==valor || musical[i].year== valor){

        console.log("new get "+valor);
        result.push(musical[i]);
        bool=false;

      }


    }
    if (from && to){
      for(var i=0;i<result.length;i++){

        if(result[i].year < from  ||  result[i].year > to){
          result.splice(i,1);
          i = i - 1;
        }
      }
    }
    if(limit && offset){
      result.splice(0,offset);
      result.splice(limit,result.length-limit);
      bool=false;
    }
  
    
    res.send(result);
    if(bool){
      res.sendStatus(404);


    }

  }else{
    res.sendStatus(401);
  }

    
};







module.exports.postMusic=function(req,res){
	var apikey = req.query.apikey;
  var country = req.params.country;
  var year = req.params.year;
  var datos= req.body;
	if(apikey == pass){
    for (var i=0; i< musical.length; i++){
      if(  musical[i].country== datos.country && musical[i].year == datos.year){
        res.sendStatus(409);

      }
    }
    if (datos.country == "" || datos.year==""|| datos.percentage==""|| datos.type==""){
      res.sendStatus(400);
    }else{
      musical.push(datos);
      res.sendStatus(201);
    }
  }else{
    res.sendStatus(401);
  
		
	}	
};



module.exports.postMusic2=function(req,res){
	var apikey=req.query.apikey;
	if(apikey==pass){
		console.log("WARNING post");
		res.sendStatus(405);

  }else{
  	res.sendStatus(401);
  }

};
function PosArray(str,elements){
	var acum = -1;
	for(var i=0;i<elements.length-1;i++)
		if(elements[i].country==str)
			acum=i;
		    console.log("Prueba "+acum);
    return acum;
};



module.exports.putMusic=function(req,res){
	var apikey=req.query.apikey;
	if(apikey==pass){
		console.log("WARNING put");
		res.sendStatus(405);
	}else{
		res.sendStatus(401);
	}
	
};




module.exports.putMusicCountryandYear = function(req, res){
  var country = req.params.country;
  var year = req.params.year;
  var assist = req.body;
  var find = true;
  var good = true;
  var key = req.query.apikey;
  if(key==123){
    if(assist.country==""||assist.year==""||assist.percentage==""||assist.type==""){
      res.sendStatus(400);
      //console.console.log(("Put Bad request"));
      good = false;
    }
    for(i=0;i<musical.length;i++){
      if(assist.country!=country||assist.year!=year){
        res.sendStatus(400);
        //console.log("Put Bad Request");
        break;
      }
      if(musical[i].country == country && musical[i].year == year && good){
        musical[i].country = assist.country;
      
        musical[i].year = assist.year;
        musical[i].percentage = assist.percentage;
        musical[i].type = assist.type;
        res.sendStatus(201);
        //console.log("New PUT of resource " + team +" "+year);
        res.send(musical[i]);
        find=false;
        break;
      }
    }
    if(find){
      //console.log("PUT of " + team +" "+year+ " not found");
      res.sendStatus(404);
    }
  }else{
    res.sendStatus(401);
    //console.log("Invalid Key");
  }
};




module.exports.deleteMusicRecurso=function(req,res){

	var country = req.params.country;
  var year=req.params.year;
  var apikey =req.query.apikey;
  var bool= true;
  if(apikey==pass){
    for (var i=0;i<musical.length;i++){
      if(musical[i].country==country && musical[i].year==year){
        //bool=false;
        musical.splice(i,1);
        res.sendStatus(200);
      }else{
        bool=false;
      }

    }
    if(!bool){
      res.sendStatus(404);
    }/*else{
      musical.splice(i,1);
      res.sendStatus(200);
    }*/

    


  }else{
    res.sendStatus(401);

  }
};

module.exports.deleteMusic=function(req,res){
	var apikey=req.query.apikey;
	if(apikey==pass){
		console.log("New DELETE of all resources");
		musical.splice(0,musical.length);
		res.sendStatus(200);


  }else{
    	res.sendStatus(401);
  }
	
};

