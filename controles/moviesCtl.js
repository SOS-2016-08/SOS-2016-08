var movies=[ {country:"spain"   ,year:"2010",sales:"160,54",  digital:"48%",  nodigital:"55%" },
{"country":"italy"   ,"year":"2010","sales":"101,66",  "digital":"39%",  "nodigital":"36%" },
{"country":"france"  ,"year":"2012","sales":"79,44",  "digital":"45%",  "nodigital":"49%" },
{"country":"spain"  ,"year":"2012","sales":"130,36",  "digital":"36%",  "nodigital":"67%" },
{"country":"spain"   ,"year":"2013","sales":"155,66",  "digital":"57%",  "nodigital":"76%" },
{"country":"france"  ,"year":"2012","sales":"79,44",  "digital":"45%",  "nodigital":"49%" },
{"country":"spain"  ,"year":"2012","sales":"130,36",  "digital":"36%",  "nodigital":"67%" },
{"country":"spain"   ,"year":"2014","sales":"155,66",  "digital":"57%",  "nodigital":"76%" },
{"country":"france"  ,"year":"2012","sales":"79,44",  "digital":"45%",  "nodigital":"49%" },
{"country":"spain"  ,"year":"2009","sales":"130,36",  "digital":"36%",  "nodigital":"67%" },
{"country":"spain"   ,"year":"2008","sales":"155,66",  "digital":"57%",  "nodigital":"76%" }
];
var fs= require("fs");

var pass = 123;


module.exports.getLoad=function(req,res){
  //lee datos
  var apikey=req.query.apikey;
  
  if (apikey==pass){
  	movies=[];
    var file= fs.readFileSync('social.json','utf8');
    movies= JSON.parse(file);
    res.send(movies);
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

for(var i=0;i<movies.length;i++)
{
  resultado.push(movies[i]);
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
}

else
{
  res.sendStatus(401);
}


};
//get y limit general
//   var limit = req.query.limit;
//   var offset = req.query.offset;
//   fr = req.query.from;
//   to = req.query.to;
//   var paginacion=[];
//   var apikey=req.query.apikey;
//   if (apikey==pass){
//     if (limit && offset){
//       for (i=limit;i<offset;i++){
//         paginacion.push(movies[i]);

//       }
//     if ( fr && to){
//       for (var i=0; i<movies.length; i++){
//         //console.log("FROM Y TO "+fr+to);
//         if( movies[i].year < fr || movies[i].year > to){
//           paginacion.splice(i,1);
//           i=i-1;
//         }
//       }
//     }

//     }else{
//       res.status(200).jsonp(movies);
//       console.log("limit0 y offset0-->"+limit  +  offset);
//       console.log("New GET for directory listing");

//     }
//     res.status(200).jsonp(paginacion);


//   }else{
//     res.sendStatus(401);

//   }

// };
// module.exports.getMovie=function(req,res){//get y limit general
//   fr = req.query.from;
//   to = req.query.to;
//   limit= req.query.limit;
//   offset= req.query.offset;
//   apikey= req.query.apikey;

//   var resul=[];

//   if(apikey==pass){

//     for (var i =0;i< movies.length ;  i++) {

//       resul.push(movies[i]);
//     }
  
//     if ( fr && to){
//       for (var i=0; i<resul.length; i++){
//         if( resul[i].year < fr || resul[i].year > to){
//           resul.splice(i,1);
//           i=i-1;
//         }
//       }
//     }
//     if (limit && offset){
//       for (i=limit;i<offset;i++){
//         resul.push(movies[i]);

//       }
      
//     }
//   res.send(resul);
//   }
//   else{

//     res.sendStatus(401);
//   }
// //res.send(resul);

// };





  





module.exports.getMovie2=function(req,res){ //get name or get year
     var name = req.params.country;
     var year = req.params.year;
     var apikey=req.query.apikey;
     var bool=true;
   
     result=[];
     if(apikey==pass){
      for (i=0;i<movies.length;i++){
        if(movies[i].country==name || movies[i].year==name){
          console.log("new get "+name+year);
          result.push(movies[i]);
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
     if(apikey==pass){
      console.log("apikey1 y pass1-->"+apikey+pass);
      result=[];
      for (i=0;i<movies.length;i++){
        if(movies[i].country==name && movies[i].year==ye){
          console.log("new get "+name);
          result.push(movies[i]);

        }

      }
      res.send(result);
      res.sendStatus(404);


     }else{
      res.sendStatus(401);

     }

};
     






module.exports.postMovie=function(req,res){
  var apikey = req.query.apikey;

  if(apikey == pass){
    var contact = req.body;
    var ok = true;

    movies.forEach(function(value, key){
      if(value.country == contact.country && value.year == contact.year ){
        ok =  false;
      }
    });
    
    if(!ok){
      res.sendStatus(409);
    }else{
      movies.push(contact);
      //console.log("New POST of resource "+contact.name);
      res.sendStatus(201);
      
    } 
  }else{
    res.sendStatus(401);
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




module.exports.putMovie2=function(req,res){
  var apikey=req.query.apikey;
  var country=req.params.country;
  var year=req.params.year;
  var temp = req.body;
  if(apikey==pass){
    for (var i=0;i<movies.length;i++){
      if(movies[i].country==country && movies[i].year==year){
        movies.splice(i,1);
        movies.push(temp);
        res.sendStatus(200);
        break;
      }
      
    }
  }else{
    res.sendStatus(401);
  }
 res.sendStatus(400); 

};






//     if (mov != -1){
//       var mov = PosArray(id,movies);
//       movies[mov].country=temp.country;
//       res.send(200);

//     }else{
//       res.send(404);
//     }

//   }else{
//     res.sendStatus(401);

//   }
// };


module.exports.deleteMovie=function(req,res){
  var apikey=req.query.apikey;
  var name=req.params.country;
  console.log("New DELETE of resource "+name);
	var mov = PosArray(name,movies);
  if(apikey==pass){
    if(mov!=-1){
      movies.splice(mov,1);
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
      movies.splice(0,movies.length);
      res.sendStatus(200);

    }else{
      res.sendStatus(404);
    }
	
  };



