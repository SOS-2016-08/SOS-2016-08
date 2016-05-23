var fs= require("fs");

var musical=[ 
{country:"spain"    ,year:"2010",  percentage:"12%",  type:"reggaeton" },
{country:"spain"    ,year:"2011",  percentage:"53%",  type:"folk" },
{country:"usa"    ,year:"2010",  percentage:"50%",  type:"pop" },
{country:"italy"    ,year:"2012",  percentage:"80%",  type:"classic" },
{country:"germany"    ,year:"2012",  percentage:"88%",  type:"reggaeton" },
{country:"usa"    ,year:"2012",  percentage:"90%",  type:"folk" }];






module.exports.getLoad=function(req,res){
  //lee datos
  
  

  	musical=[];
    var file= fs.readFileSync('countrytypes.json','utf8');
    musical= JSON.parse(file);
    //res.send(musical);
    res.sendStatus(201);

};





module.exports.getMusic=function(req,res){
  from = req.query.from;
  to = req.query.to;
  limit = req.query.limit;
  offset = req.query.offset;
  apikey = req.query.apikey;
  var resultado = [];

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


};


module.exports.getMusicCountryandYear=function(req,res){ //get country/year
  var name = req.params.country;
  var ye=req.params.year;


  var bool= true;

  var result=[];
  for (i=0;i<musical.length;i++){
    if(musical[i].country==name && musical[i].year==ye){
      console.log("new get "+name);
      result.push(musical[i]);
      bool=false;

    }

  }
  if(bool){
    res.sendStatus(404);
    return 0;

  }
  res.send(result);


};


module.exports.getMusicCountryorYear=function(req,res){ //get name or get year
  var valor = req.params.valor;
  
  var limit= req.query.limit;
  var offset= req.query.offset;
  var from= req.query.from;
  var to =req.query.to;
    

  var bool=true;
  var result=[];



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
};







module.exports.postMusic=function(req,res){

  var country = req.params.country;
  var year = req.params.year;
  var datos= req.body;

  for (var i=0; i< musical.length; i++){
    if(  musical[i].country== datos.country && musical[i].year == datos.year){
      console.log(" POST : resource conflict");
      res.sendStatus(409);
      return 0;

    }
  }
  if (datos.country == "" || datos.year==""|| datos.percentage==""|| datos.type==""){
    console.log(" POST : resource Invalid");
    res.sendStatus(400);
    return 0;
  }else{
    console.log(" POST : adding resource ");
    musical.push(datos);
    res.sendStatus(201);
  }
  
};



module.exports.postMusic2=function(req,res){


		console.log("WARNING post");
		res.sendStatus(405);


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


		console.log("WARNING put");
		res.sendStatus(405);

	
};




module.exports.putMusicCountryandYear = function(req, res){
  var country = req.params.country;
  var year = req.params.year;
  var valor = req.body;
  var find = true;
  var good = true;


  if(valor.country==""||valor.year==""||valor.percentage==""||valor.type==""){
    res.sendStatus(400);
      //console.console.log(("Put Bad request"));
    good = false;
  }
  for(i=0;i<musical.length;i++){
    if(valor.country!=country||valor.year!=year){
      res.sendStatus(400);
        //console.log("Put Bad Request");
      break;
    }
    if(musical[i].country == country && musical[i].year == year && good){
      musical[i].country = valor.country;
      
      musical[i].year = valor.year;
      musical[i].percentage = valor.percentage;
      musical[i].type = valor.type;
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
  
};




module.exports.deleteMusicRecurso=function(req,res){

	var country = req.params.country;
  var year=req.params.year;

  var bool= true;

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
  }

};

module.exports.deleteMusic=function(req,res){


	console.log("New DELETE of all resources");
	musical.splice(0,musical.length);
	res.sendStatus(200);

	
};

