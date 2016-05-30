

var situation=[ 
{country:"Spain"   ,year:"2010",sales:"160,54",  digital:"48%",  nodigital:"55%" },
{country:"Italy"    ,year:"2010",sales:"101,66",  digital:"39%",  nodigital:"36%" },
{country:"Germany"   ,year:"2012",sales:"79,44",  digital:"45%",  nodigital:"49%" },
{country:"Canada"   ,year:"2012",sales:"169,66",  digital:"57%",  nodigital:"76%" },
{country:"Japan"  ,year:"2008",sales:"130,36",  digital:"36%",  nodigital:"67%" },
{country:"Mexico"  ,year:"2004",sales:"293,66",  digital:"57%",  nodigital:"76%" },
{country:"Usa"     ,year:"2011",sales:"79,44",  digital:"45%",  nodigital:"49%" },
{country:"Greece",year:"2004",sales:"130,36", digital:"36%",  nodigital:"67%" },
{country:"Asia"   ,year:"2008",sales:"460,66",  digital:"57%",  nodigital:"76%" },
{country:"Europe"   ,year:"2008",sales:"460,66",  digital:"57%",  nodigital:"76%" },
{country:"Italy"   ,year:"2012",sales:"155,66",  digital:"57%",  nodigital:"76%" },
{country:"Africa"   ,year:"2013",sales:"155,66",  digital:"57%",  nodigital:"76%" },
{country:"Egipto"   ,year:"2016",sales:"155,66",  digital:"57%",  nodigital:"76%" }

];

var fs= require("fs");




module.exports.getLoad=function(req,res){

  	situation=[];
    var file= fs.readFileSync('social.json','utf8');
    situation= JSON.parse(file);
    //res.send(situation);
    res.sendStatus(201);
 
};

module.exports.getMovie=function(req,res){



  from = req.query.from;
  to = req.query.to;
  limit = req.query.limit;
  offset = req.query.offset;

  var resultado = [];




for(var i=0;i<situation.length;i++)
{
  resultado.push(situation[i]);
}

if (from && to)
{
for(var i=0;i<resultado.length;i++)
{
if(resultado[i].year < from  ||  resultado[i].year > to)
{
  resultado.splice(i,1);
  i = i - 1;
}}
}



if(limit && offset)
{

resultado.splice(0,offset);
resultado.splice(limit,resultado.length-limit);

}

res.send(resultado);
res.sendStatus(200);



};






module.exports.getMovie2=function(req,res){ //get name or get year
     var name = req.params.country;
     var year = req.params.year;

     var bool=true;
      from = req.query.from;
      to = req.query.to;
      limit = req.query.limit;
      offset = req.query.offset;
   
     resultado=[];

      for (i=0;i<situation.length;i++){
        if(situation[i].country==name || situation[i].year==name){
          console.log("new get 222 "+name+year);
          resultado.push(situation[i]);
          bool=false;

        }
         

      }
     


      if(bool){
        res.sendStatus(404);

      }
     

      

      if (from && to|| limit && offset)
        {
          resultado.splice(0,offset);
          resultado.splice(limit,resultado.length-limit);
        for(var i=0;i<resultado.length;i++)
        {
        if(resultado[i].year < from  ||  resultado[i].year > to)
        {
          resultado.splice(i,1);
          i = i - 1;
        }
      }
       

    }



        
        



    
    res.send(resultado); 
    
  };


    
     
module.exports.getMovie3=function(req,res){ //get country/year
     var name = req.params.country;
     var ye=req.params.year;
     from = req.query.from;
      to = req.query.to;
      limit = req.query.limit;
      offset = req.query.offset;

      bool=false;
      result=[];
      for (i=0;i<situation.length;i++){
        if(situation[i].country==name && situation[i].year==ye){
          console.log("new get 333"+name);
          result.push(situation[i]);
          res.send(result);
          bool=true;

        }

      }
      if (bool){

        res.sendStatus(404);
      

      }



      res.sendStatus(404);
      



};
     





module.exports.postMovie=function(req,res){


  var country = req.params.country;
  var year = req.params.year;
  var datos= req.body;
  console.log("los dato de postMovie",datos);

    for (var i=0; i< situation.length; i++){
      if(  situation[i].country== datos.country && situation[i].year == datos.year){
        res.sendStatus(409);
        return 0;

      }
    }
    if (datos.country == "" || datos.year==""|| datos.sales==""|| datos.digital==""|| datos.nodigital==""){
      res.sendStatus(400);
      return 0;
    }else{
      situation.push(datos);
      res.send(situation);
      res.sendStatus(201);
    }
  

};

module.exports.postMovie2=function(req,res){


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
      	


module.exports.putMovie=function(req,res){

    console.log("WARNING put");
    res.sendStatus(405);

 
};




module.exports.putMovie2=function (req,res){ 
  var country = req.params.country;
  var year = req.params.year;
  var assist = req.body;
  var find = true;
  var good = true;

  console.log("New putMovie2", assist);

    if(assist.country==""||assist.year==""||assist.sales==""||assist.digital==""||assist.nodigital==""){
      res.sendStatus(400);
      console.console.log(("1.Put Bad request"));
      good = false;
    }
    for(i=0;i<situation.length;i++){
      if(assist.country!=country||assist.year!=year){
        res.sendStatus(400);
        console.log("2.Put Bad Request");
        break;
      }
      if(situation[i].country == country && situation[i].year == year && good){
        situation[i].country = assist.country;
      
        situation[i].year = req.body.year;
        situation[i].sales = req.body.sales;
        situation[i].digital =req.body.digital;
        situation[i].nodigital = req.body.nodigital;
        res.sendStatus(201);
        
        
        console.log("3.New PUT of resource " + country +" "+year);
        
        find=false;
        break;
      }

    }
    if(find){
      console.log("4.PUT of " + country +" "+year+ " not found");
      res.sendStatus(404);
    }
    //res.send(situation);
    res.send(situation[i]);
  
    
};



module.exports.deleteMovie=function(req,res){

  var name=req.params.country;
  console.log("New DELETE of resource "+name);
	var mov = PosArray(name,situation);

    if(mov!=-1){
      situation.splice(mov,1);
      res.send(situation);
      res.sendStatus(200);
    }else{
      res.sendStatus(404);
    }

};

  

  module.exports.deleteMovie2=function(req,res){


      console.log("New DELETE of all resources");
      situation.splice(0,situation.length);
      res.sendStatus(200);

   
	
  };



