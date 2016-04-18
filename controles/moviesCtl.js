var situation=[ {country:"spain"   ,year:"2010",sales:"160,54",  digital:"48%",  nodigital:"55%" },
{"country":"italy"   ,"year":"2010","sales":"101,66",  "digital":"39%",  "nodigital":"36%" },
{"country":"france"  ,"year":"2012","sales":"79,44",  "digital":"45%",  "nodigital":"49%" },
{"country":"rumania"  ,"year":"2012","sales":"130,36",  "digital":"36%",  "nodigital":"67%" },
{"country":"noruega"   ,"year":"2013","sales":"155,66",  "digital":"57%",  "nodigital":"76%" },
{"country":"eeuu"  ,"year":"2012","sales":"79,44",  "digital":"45%",  "nodigital":"49%" },
{"country":"indonesia"  ,"year":"2012","sales":"130,36",  "digital":"36%",  "nodigital":"67%" },
{"country":"spain"   ,"year":"2008","sales":"155,66",  "digital":"57%",  "nodigital":"76%" }
];
var fs= require("fs");

var pass = 123;

function CheckBody(body){
    return body.country && body.year && body.sales && body.digital && body.nodigital;
    
}



function validar(str1,str2,elements){
  var cont = -1;
 for(var i=0;i<elements.length;i++)
      if(elements[i].country==str1 && elements[i].year==str2){
        cont=i;
      }
  return cont;
};


module.exports.getLoad=function(req,res){
  //lee datos

  var apikey=req.query.apikey;
  
  if (apikey==pass){
  	situation=[];
    var file= fs.readFileSync('social.json','utf8');
    situation= JSON.parse(file);
    res.send(situation);
    res.sendStatus(200);
  }else{
    
    res.sendStatus(401);
  }
	
};

module.exports.getMovie=function(req,res){



  from = req.query.from;
  to = req.query.to;
  limit = req.query.limit;
  offset = req.query.offset;
  apikey = req.query.apikey;
  var resultado = [];


if (apikey==pass)
{

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






module.exports.getMovie2=function(req,res){ //get name or get year
     var name = req.params.country;
     var year = req.params.year;
     var apikey=req.query.apikey;
     var bool=true;
   
     result=[];
     if(apikey==pass){
      for (i=0;i<situation.length;i++){
        if(situation[i].country==name || situation[i].year==name){
          console.log("new get 222 "+name+year);
          result.push(situation[i]);
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


    
     
module.exports.getMovie3=function(req,res){ //get country/year
     var name = req.params.country;
     var ye=req.params.year;
     var limit = req.params.limit;
     var offset = req.params.offset;
     var apikey =req.query.apikey;
      bool=false;
     if(apikey==pass){
      console.log("apikey1 y pass1-->"+apikey+pass);
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
      


     }else{
        res.sendStatus(401);

     }

};
     






module.exports.postMovie=function(req,res){

  if(apikey==pass){
    var sc = req.body;
    if(CheckBody(sc)){
      var array2=validar(sc.country,sc.year,situation);
      if(array2==-1){//not exist the resource
        situation.push(sc);
        console.log("New POST of resource "+sc.country+" "+sc.year);
        res.sendStatus(201);//created
            
      }else{//if exist the resource CONFLICT
        res.sendStatus(409);// Conflict 
      }

    }else{
      res.sendStatus(400);// Bad request
    }
    
    
  }else{
    console.log("you must identificate");
    res.sendStatus(401);//Unauthorized
  }
        
};

module.exports.postMovie2=function(req,res){
  var apikey=req.query.apikey;
  if(apikey==pass){
	 console.log("WARNING post");
	 res.sendStatus(403);
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
      	


module.exports.putMovie=function(req,res){

  var apikey=req.query.apikey;
  if(apikey==pass){

    console.log("WARNING put");
    res.sendStatus(405);

  }else{
    res.sendStatus(401);

  }
	
};




module.exports.putMovie2=function (req,res){ 
   var apikey=req.query.apikey;
  if(apikey==pass){
    console.log(req.body);
    console.log(req.params.country);
    console.log(req.params.year);
    if(CheckBody(req.body) && req.body.country==req.params.country && req.body.year==req.params.year){
        var si = validar(req.params.country,req.params.year,situation);
        console.log("valor de si",si);//req url
          if (si != -1){
            situation[si].country=req.body.country;//req body
            situation[si].year=req.body.year;
            situation[si].sales=req.body.sales;
            situation[si].digital=req.body.digital;
            situation[si].nodigital=req.body.nodigital;
            res.sendStatus(200);//ok
          }else{
          res.sendStatus(404);//Not Found
          }
    }else{
      res.sendStatus(400);//bad request
    }
      
  }else{
    console.log("you must identificate");
    res.sendStatus(401);//Unauthorized
  }
    
};



module.exports.deleteMovie=function(req,res){
  var apikey=req.query.apikey;
  var name=req.params.country;
  console.log("New DELETE of resource "+name);
	var mov = PosArray(name,situation);
  if(apikey==pass){
    if(mov!=-1){
      situation.splice(mov,1);
      res.sendStatus(200);
    }else{
      res.sendStatus(404);
    }
  }else{
    res.sendStatus(401);
}
};

  

  module.exports.deleteMovie2=function(req,res){
    var apikey=req.query.apikey;
    if(apikey==pass){
      console.log("New DELETE of all resources");
      situation.splice(0,situation.length);
      res.sendStatus(200);

    }else{
      res.sendStatus(404);
    }
	
  };



