var fs= require("fs");

var musical=[ {country:"Spain"    ,year:"2010",  percentage:"88%",  type:"reggaeton" }];


module.exports.getLoad = function(req,res){ //FUNCIONA
	musical=[];
	var mus= fs.readFileSync('countrytypes.json', 'utf8');
	musical = JSON.parse(mus);
	res.send(musical);
	res.sendStatus(200);
	
	

};



module.exports.getMusic = function(req,res){// FUNCIONA
	console.log("New Get of music ");
	res.status(200).jsonp(musical);
	
};

module.exports.getMusic3 = function(req,res){ 

	var name =req.params.country;
	var año =req.params.year;
	var resul= [];
	for ( var i=0; i < musical.length; i++) {
		if(musical[i].country == name && musical[i].year == año){
			console.log("New Get of resourse "+ name);
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
	
};



module.exports.getMusic2 = function(req,res){//FUNCIONA
	var name =req.params.country;
	var resul= [];
	for ( var i=0; i < musical.length; i++) {
		if(musical[i].country == name){			
			console.log("New Get of resourse "+ name);
			resul.push(musical[i]);
		}
	}
	if (resul.length ==0){
		//console.log("Get of music "+ country + "not found");
		res.sendStatus(400);
		
		

	}else{
		res.send(resul);
		res.sendStatus(200);

	}
	

	
};


module.exports.getMusic4 = function(req,res){// ES IGUAL QUE COUNTRY (QUE SI FUNCIONA) Y YEAR NO
	var year = req.params.year;
	var resul = [];
	for ( var i=0; i< musical.length; i++) {
		if(musical[i].year == year){
			console.log("New get of resource year" + year);
			resul.push(musical[i]);
		}
	}
	if(resul.length == 0){
		res.sendStatus(400);
	}else{
		res.send(resul);
	}
};




module.exports.postMusic = function(req,res){ // crea y es de cliente a servidor

	var mus= req.body; //recoge los datos
	musical.push(mus);
	console.log("New Post of music "+mus);
	res.sendStatus(200);
};


module.exports.postMusic2 = function (req,res){ 

	console.log("The Post of music is not possible");
	//res.send("Error 405 : Method not allowed");
	res.sendStatus(400);
};

module.exports.putMusic = function (req,res){

	console.log("The Put of music is not possible");
	res.sendStatus(400);//dfghjkl
};

module.exports.putMusic2 = function(req,res){

	var country = req.params.country;
	var mus = req.body;
	for (var i = 0; i < musical.length; i++) {


		if(musical[i].country = country){
			musical[i].country = mus.country;
			console.log(" New Put of music "+ country);
			res.sendStatus(200);
			break;

		}
	}	
	res.sendStatus(400);

	
	

};

module.exports.deleteMusic = function(req,res)  {
	console.log("New Delete all resources");
	musical.splice(musical);
	res.sendStatus(200);
};

module.exports.deleteMusic2 = function  (req,res)  {
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
    
 
};