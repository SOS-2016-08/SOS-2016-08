var fs= require("fs");

var musical=[ {country:"Spain"    ,year:"2010",  percentage:"88%",  type:"reggaeton" }];

var pass=123;

/*module.exports.getLoad = function(req,res){ //FUNCIONA
	musical=[];
	var mus= fs.readFileSync('countrytypes.json', 'utf8');
	musical = JSON.parse(mus);
	res.send(musical);
	res.sendStatus(200);
	

};*/

module.exports.getLoad=function(req,res){
  //lee datos
  var apikey=req.query.apikey;
  
  if (apikey==pass){
  	musical=[];
    var file= fs.readFileSync('countrytypes.json','utf8');
    musical= JSON.parse(file);
    res.send(musical);
    res.sendStatus(200);
  }else{
    
    res.sendStatus(401);
  }
	
};



/*module.exports.getMusic = function(req,res){// FUNCIONA
	console.log("New Get of music ");
	res.status(200).jsonp(musical);
};*/

/*module.exports.getMusic=function(req,res){//get y limit general
  fr = req.query.from;
  to = req.query.to;
  limit= req.query.limit;
  offset= req.query.offset;
  apikey= req.query.apikey;

  var resul=[];

  if(apikey==pass){

    for (var i =0;i< musical.length ;  i++) {

      resul.push(musical[i]);
    }
  
    if ( fr && to){
      for (var i=0; i<resul.length; i++){
        if( resul[i].year < fr || resul[i].year > to){
          resul.splice(i,1);
          i=i-1;
        }
      }
    }
    if (limit && offset){
      for (i=limit;i<offset;i++){
        resul.push(musical[i]);

      }
      
    }
  res.send(resul);
  }
  else{

    res.sendStatus(401);
  }
//res.send(resul);

};*/



module.exports.getMusic=function(req,res){



  from = req.query.from;
  to = req.query.to;
  limit = req.query.limit;
  offset = req.query.offset;
  apikey = req.query.apikey;
  var resultado = [];


if (apikey==pass)
{

for(var i=0;i<musical.length;i++)
{
  resultado.push(musical[i]);
}

if (from && to)
{
for(var i=0;i<resultado.length;i++)
{
if(resultado[i].year < from  ||  resultado[i].year > to)
{
  resultado.splice(i,1);
  i = i - 1;
}}}



if(limit && offset)
{

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

/*module.exports.getMusicCountryandYear = function(req,res){ 

	var name =req.params.country;
	var año =req.params.year;
	var resul= [];
	for ( var i=0; i < musical.length; i++) {
		if(musical[i].country == name && musical[i].year == año){
			console.log("New Get of resourse ");
			//res.send(musical[i]);
			resul.push(musical[i]);		
		}
	}
	if( resul.length == 0){
		res.sendStatus( 400);

	}else{
		res.send(resul);
		res.sendStatus(200);

	}
	
};*/

module.exports.getMusicCountryandYear=function(req,res){ //get country/year
	var name = req.params.country;
    var ye=req.params.year;
    var limit = req.params.limit;
    var offset = req.params.offset;
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


/*module.exports.getMusicCountryorYear = function(req,res){
	var valor = req.params.valor;
	var resul = [];



	for ( var i=0; i< musical.length; i++) {
		if(musical[i].year == valor){
			console.log("New get of resource year" );
			resul.push(musical[i]);
		}else if( musical[i].country == valor){
			console.log("New get of resource country" );
			resul.push(musical[i]);

		}
	}
	if(resul.length == 0){
		res.sendStatus(400);
	}else{
		res.send(resul);
		res.sendStatus(200);
	}
};*/

module.exports.getMusicCountryorYear=function(req,res){ //get name or get year
	var valor = req.params.valor;
    
    var apikey=req.query.apikey;
    var bool=true;
    var result=[];
    if(apikey==pass){

    	for (i=0;i<musical.length;i++){

    		if(musical[i].country==valor || musical[i].year== valor){

    			console.log("new get "+valor);
    			result.push(musical[i]);
    			bool=false;

        	}

      	}if(bool){
        	res.sendStatus(404);

      	}
      	res.send(result);

    }else{

      	res.sendStatus(401);
    }

    
};




/*module.exports.postMusic = function(req,res){ // crea y es de cliente a servidor

	var mus= req.body; //recoge los datos
	musical.push(mus);
	console.log("New Post of music ");
	res.sendStatus(200);
};
*/

/*module.exports.postMusic=function(req,res){
	var apikey=req.query.apikey;
	if(apikey==pass){
		var mov= req.body;
		movies.push(mov);
		console.log("New post"+mov.name);
		res.sendStatus(201);
  	}else{
  		res.sendStatus(401);
  	}

};*/

module.exports.postMusic=function(req,res){
	var apikey = req.query.apikey;
	if(apikey == pass){
		var contact = req.body;
		var ok = true;
		musical.forEach(function(value, key){

			if(value.country == contact.country && value.year == contact.year ){
				ok =  false;
      		}
    	});
    
    	if(!ok){
    		res.sendStatus(409);

    	}else{
      		musical.push(contact);
      	//console.log("New POST of resource "+contact.name);
      		res.sendStatus(201);
      
    	} 
  	}else{
    res.sendStatus(401);
  }
};










/*module.exports.postMusic2 = function (req,res){ 

	console.log("The Post of music is not possible");
	//res.send("Error 405 : Method not allowed");
	res.sendStatus(400);
};*/

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

/*module.exports.putMusic = function (req,res){

	console.log("The Put of music is not possible");
	res.sendStatus(400);//dfghjkl
};*/

module.exports.putMusic=function(req,res){
	var apikey=req.query.apikey;
	if(apikey==pass){
		console.log("WARNING put");
		res.sendStatus(405);
	}else{
		res.sendStatus(401);
	}
	
};



/*module.exports.putMusicCountryandYear = function(req,res){
	var country = req.params.country;
	var year = req.params.year;
 	var nuevo = req.body;
    for (var i=0; i<=musical.length;i++){

      	if(musical[i].country == country && musical[i].year == year){
        	musical.splice(i, 1);
        	musical.push(nuevo);
        	res.sendStatus(200);
        	break;
      	}
    }
  	res.sendStatus(400);

};*/
module.exports.putMusicCountryandYear=function(req,res){
	var apikey=req.query.apikey;
	var country=req.params.country;
	var year=req.params.year;
	var temp = req.body;
	var bool=true;
	if(apikey==pass){
		
		for (var i=0;i<musical.length;i++){
			if(musical[i].country==country && musical[i].year==year){
				bool=false;
				musical.splice(i,1);
				
      		}
      
    	}
    	if(bool){
    		res.sendStatus(404);

    	}else{
    		
			musical.push(temp);
			res.sendStatus(200);
    	}
  	}else{
  		res.sendStatus(401);
  	}
 	 

};




/*module.exports.deleteMusic = function(req,res)  {
	console.log("New Delete all resources");
	musical.splice(musical);
	res.sendStatus(200);
};*/

module.exports.deleteMusic2=function(req,res){

	var country = req.params.country;
    var year=req.params.year;
    var apikey =req.query.apikey;
    var bool= true;
    if(apikey==pass){
    	for (i=0;i<musical.length;i++){

      		if(musical[i].country==country && musical[i].year==year){

      			
      			bool=false;

        	}

      	}
      	if(bool){

        	res.sendStatus(404);

      	}else{
      		musical.splice(i,1);
      		res.sendStatus(200);
      	}

    


    }else{

    	res.sendStatus(401);

    }
};
/*module.exports.deleteMusic2 = function  (req,res)  {
	var name = req.params.country;
	for(var i=0;i<musical.length;i++){
		if(musical[i].country == name){
			console.log("New Delete of resource " + name);
			musical.splice(i, 1);
			res.sendStatus(200);
      		break;

    	}}
    console.log("Delete of music " + name + " no found");
    res.sendStatus( 400);
    //break;
    
 
};*/
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

