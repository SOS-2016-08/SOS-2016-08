var fs= require("fs");

var musical=[ {name : "pepe"},  {name : "juan"}, {name : "javi"}];


module.exports.getLoad = function(req,res){
	musical=[];
	var mus= fs.readFileSync('countrytypes.json', 'utf8');
	musical = JSON.parse(mus);
	res.send(musical);
	
	

};



module.exports.getMusic = function(req,res){
	console.log("New Get of music ");
	res.status(200).jsonp(musical);
	
};



module.exports.getMusic2 = function(req,res){
	var name =req.params.name;
	var limit = req.query.limit;
	
	for ( var i=0; i < musical.length; i++) {
		if(musical[i].name == name){
			console.log("New Get of resourse "+ name);
			res.send(musical[i]);
			break;
		}}
	console.log("Get of music "+ name + "not found");
	res.send("Error 404");
			//break;
	

	
};



module.exports.postMusic = function(req,res){ // crea y es de cliente a servidor

	var mus= req.body; //recoge los datos
	musical.push(mus);
	console.log("New Post of music "+mus.name);
	res.sendStatus(200);
};


module.exports.postMusic2 = function (req,res){ 

	console.log("The Post of music is not possible");
	//res.send("Error 405 : Method not allowed");
	res.sendStatus(405);
};

module.exports.putMusic = function (req,res){

	console.log("The Put of music is not possible");
	res.send("Error 405: Method no allowed");//dfghjkl
};

module.exports.putMusic2 = function(req,res){

	var name = req.params.name;
	var mus = req.body;
	for (var i = 0; i < musical.length; i++) {

		if(musical[i].name = name){

			musical[i].name = mus.name;
			
			console.log(" New Put of music "+name);
			res.send(mus);
			break;

		}}	

	console.log("Put of new "+name+" not found");
	res.sendStatus(400);
	//break;
	
	

};

module.exports.deleteMusic = function(req,res)  {
	console.log("New Delete all resources");
	musical.splice(musical);
	res.sendStatus(200);
};

module.exports.deleteMusic2 = function  (req,res)  {
	var name = req.params.name;
	for(var i=0;i<musical.length;i++){
		if(musical[i].name == name){
			console.log("New Delete of resource " + name);
			musical.splice(i, 1);
			res.sendStatus(200);
      		break;

    	}}
    console.log("Delete of music " + name + " no found");
    res.send("Error 404: No music found");
    //break;
    
 
};