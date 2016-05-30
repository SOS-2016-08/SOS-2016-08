
var contador=0;
var s=0;
var suma=0;
$(document).ready(() => {
  console.log("Jquery ready!");
  var dir;


  function diretion_bus(){

    if($("#payload1").val()==0 && $("#payload2").val()==0 && $("#payload3").val()==0 && $("#payload4").val()==0  ){

      dir="/api/v1/music/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val(); 


    }else if($("#payload1").val()==0 && $("#payload2").val()==0 && $("#payload3").val()==0 && $("#payload4").val()!=0){

      dir="/api/v1/music"
          +"/"
          +$("#payload4").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();

    }else if($("#payload1").val()==0 && $("#payload2").val()==0 && $("#payload3").val()!=0 && $("#payload4").val()==0){

      dir="/api/v1/music"
          +"/"
          +$("#payload3").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()==0 && $("#payload2").val()==0 && $("#payload3").val()!=0 && $("#payload4").val()!=0){

      dir="/api/v1/music"
          +"/"
          +$("#payload3").val()
          +"/"
          +$("#payload4").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()==0 && $("#payload2").val()!=0 && $("#payload3").val()==0 && $("#payload4").val()==0){

      dir="/api/v1/music"
          +"/"
          +$("#payload2").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()==0 && $("#payload2").val()!=0 && $("#payload3").val()==0 && $("#payload4").val()!=0){

      dir="/api/v1/music"
          +"/"
          +$("#payload2").val()
          +"/"
          +$("#payload4").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()==0 && $("#payload2").val()!=0 && $("#payload3").val()!=0 && $("#payload4").val()==0){

      dir="/api/v1/music"
          +"/"
          +$("#payload2").val()
          +"/"
          +$("#payload3").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()==0 && $("#payload2").val()!=0 && $("#payload3").val()!=0 && $("#payload4").val()!=0){

      dir="/api/v1/music"
          +"/"
          +$("#payload2").val()
          +"/"
          +$("#payload3").val()
          +"/"
          +$("#payload4").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()!=0 && $("#payload2").val()==0 && $("#payload3").val()==0 && $("#payload4").val()==0){

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()!=0 && $("#payload2").val()==0 && $("#payload3").val()==0 && $("#payload4").val()!=0){

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/"
          +$("#payload4").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()!=0 && $("#payload2").val()==0 && $("#payload3").val()!=0 && $("#payload4").val()==0){

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/"
          +$("#payload3").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()!=0 && $("#payload2").val()==0 && $("#payload3").val()!=0 && $("#payload4").val()!=0){

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/"
          +$("#payload3").val()
          +"/"
          +$("#payload4").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()!=0 && $("#payload2").val()!=0 && $("#payload3").val()==0 && $("#payload4").val()==0){

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/"
          +$("#payload2").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()!=0 && $("#payload2").val()!=0 && $("#payload3").val()==0 && $("#payload4").val()!=0){

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/"
          +$("#payload2").val()
          +"/"
          +$("#payload4").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();


    }else if($("#payload1").val()!=0 && $("#payload2").val()!=0 && $("#payload3").val()!=0 && $("#payload4").val()==0){

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/"
          +$("#payload2").val()
          +"/"
          +$("#payload3").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();

    }else {

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/"

          +$("#payload2").val()
          +"/"
          +$("#payload3").val()
          +"/"
          +$("#payload4").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();

    }

    return dir;
  };
   
 

 
$("#ini").click(() => {
  contador=0;
    var request2=$.ajax({
      url: "/api/v1/music/loadInitialdata?apikey=multiPlan_C5_sos-2016-08-bhl_ag",
      type: "GET",
      contentType: "application/json"
    });

    request2.always(function (jqXHR,status){
        if(status=="error"){
          console.log("Status: "+jqXHR.status);
          if($("#apikey").val()==0){
            console.log("ENTRA EN APIKEY");
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Introduce the password. (apikey)");
            
            
          }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){

            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("The password is incorrect, try again");
          
          
          }else if (jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");


          }else if (jqXHR.status==402){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Payment Required, buy a plan");


          }
        
        }else{
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("The data has been load.");
        }

    });
});



$("#search").click(() => {
  contador=0;
  console.log("Entra en search");
  dir=diretion_bus();
  console.log("direccion "+dir);
  var request = $.ajax({

    url:dir,
    type: "GET",
    data:"{"+ ' "country": ' + '"' + $("#payload1").val() + '"'  
              + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
              + "," + ' "percentage": ' + '"' + $("#payload3").val()+'"'+ "," 
              + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
    contentType: "application/json"

  });
  

  request.done(function(data,status,jqXHR) {
    console.log("reques que se supone que pinta la tabla "+data);
    $("#country").find("tr:gt(0)").remove();    
    for (i=0;i<data.length;i++){ 
      var row = $('<tr/>');
      $("#country").append(row);
      $('<td></td>').text(data[i].country).appendTo(row);
      $('<td></td>').text(data[i].year).appendTo(row);
      $('<td></td>').text(data[i].percentage).appendTo(row);
      $('<td></td>').text(data[i].type).appendTo(row);
    }
    $("#status").html(jqXHR.status);
    $("#log").html(status);
    $("#msg").html("Everything is correct.");
  });


  request.always(function (jqXHR,status){
    if(status=="error"){
      console.log("Status: "+jqXHR.status);
      if($("#apikey").val()==0){
        console.log("ENTRA EN APIKEY");
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("Introduce the password. (apikey)");
          
            
      }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){

        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("The password is incorrect, try again");
          
          
      }else if(jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");


      }else if (jqXHR.status==402){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Payment Required, buy a plan");


      }else if (jqXHR.status==404){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("There isn't resource with this data");


      }
        
    }else{
      $("#status").html(jqXHR.status);
      $("#log").html(status);
      $("#msg").html("Everything is correct.");
    }

  });
}); // fin de ver



$("#edit").click(() => {
  contador=0;
  console.log("Data updated");
  dir="/api/v1/music/"
          +$("#payload1").val()
          +"/"
          +$("#payload2").val()
          +"/?apikey="+$("#apikey").val();
  var request=$.ajax({
    url: dir,
    type: "PUT",
    data:"{" + ' "country": ' + '"' + $("#payload1").val() + '"'  
             + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
             + "," + ' "percentage": ' + '"' + $("#payload3").val()+'"'
             + "," + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
    contentType: "application/json"
  });

  var request2=$.ajax({
    url: "/api/v1/music/?apikey=multiPlan_C5_sos-2016-08-bhl_ag",
    type: "GET",
    contentType: "application/json"
  });


  request.done(function(data,status,jqXHR) {
    console.log("Handling request (OK)");
    console.log("Data received:");
    $("#status").html(jqXHR.status);
    $("#log").html(status);
    $("#msg").html("Everything is correct.");
  });

  request2.done(function(data,status,jqXHR) {
    console.log("Handling request (OK)");
    $("#country").find("tr:gt(0)").remove();    //delete all rows
    for (i=0;i<data.length;i++){
      var row = $('<tr/>');
      $("#country").append(row);
      $('<td></td>').text(data[i].country).appendTo(row);
      $('<td></td>').text(data[i].year).appendTo(row);
      $('<td></td>').text(data[i].percentage).appendTo(row);
      $('<td></td>').text(data[i].type).appendTo(row);
    }
    
  });

  request.always(function (jqXHR,status){

    if(status=="error"){
      console.log("Status: "+jqXHR.status);
      if($("#apikey").val()==0){
        console.log("ENTRA EN APIKEY");
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("Introduce the password. (apikey)");
      }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){

        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("The password is incorrect, try again");
      }else if(jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");


      }else if (jqXHR.status==402){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Payment Required, buy a plan");


      }else if (jqXHR.status==404 && $("#payload1").val()==0 || $("#payload2").val()==0){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("To edit a resource is necessary to fill both the country and year box");


      }else if (jqXHR.status==400 ){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("You must fill in both the percentage and type");


    }
    }else{
    $("#status").html(jqXHR.status);
    $("#log").html(status);
    $("#msg").html("The password is correct.");
    }
    

  });
});// fin add

$("#delete").click(() => {
  contador=0;
  console.log("Data removed");
  dir=diretion_bus();
  var request = $.ajax({
    url:dir,
    type: "DELETE",
    data:"{" + ' "country": ' + '"' + $("#payload1").val() + '"'  
             + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
             + "," + ' "percentage": ' + '"' +$("#payload3").val()+'"'
             + "," + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
    contentType: "application/json"
  });

  var request2=$.ajax({
    url: "/api/v1/music/?apikey=multiPlan_C5_sos-2016-08-bhl_ag",
    type: "GET",
    contentType: "application/json"
  });

  request.done(function(data,status,jqXHR) {
    console.log("Handling request (OK)");
    $("#status").html(jqXHR.status);
    $("#log").html(status);
    $("#msg").html("Everything is correct.");
  });

  request2.done(function(data,status,jqXHR) {
    console.log("Handling request (OK)");
    $("#country").find("tr:gt(0)").remove();    //delete all rows
    for (i=0;i<data.length;i++){ // A MI NO ME VA A FUNCIONAR PORQUE NO TENGO LA MISMA TABLA 
      var row = $('<tr/>');
      $("#country").append(row);
      $('<td></td>').text(data[i].country).appendTo(row);
      $('<td></td>').text(data[i].year).appendTo(row);
      $('<td></td>').text(data[i].percentage).appendTo(row);
      $('<td></td>').text(data[i].type).appendTo(row);
    }
    $("#status").html(jqXHR.status);
    $("#log").html(status);
    $("#msg").html("Everything is correct.");
  });

  request.always(function (jqXHR,status){
    if(status=="error"){
      console.log("Status: "+jqXHR.status);

      if($("#apikey").val()==0){
        console.log("ENTRA EN APIKEY");
        $("#status").html(jqXHR.status);
        $("#log").html(status);
       $("#msg").html("Introduce the password. (apikey)");
      }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("The password is incorrect, try again");
      }else if(jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");


      }else if (jqXHR.status==402){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Payment Required, buy a plan");


      }else if (jqXHR.status==404){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("To delete a resource is necessary to fill both the country and year box");
      }
    }else{
    $("#status").html(jqXHR.status);
    $("#log").html(status);
    $("#msg").html("Everything is correct.");
    }


  });
});// fin delete

$("#add").click(() => {
  contador=0;

  console.log("Data added");
  var request = $.ajax({

    url:"/api/v1/music/?apikey="+$("#apikey").val(),
    type: "POST",
    data:"{"+ ' "country": ' + '"' + $("#payload1").val() + '"'  
            + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
            + "," + ' "percentage": ' + '"' +$("#payload3").val()+'"'+ "," 
            + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
    contentType: "application/json"
  });

  var request2=$.ajax({
    url: "/api/v1/music/?apikey=multiPlan_C5_sos-2016-08-bhl_ag",
    type: "GET",
    contentType: "application/json"
  });

  request2.done(function(data,status,jqXHR) {
    //console.log("Handling request (OK)"+status);
    console.log("Data received:");
    $("#status").html(jqXHR.status);
    $("#log").html(status);
  });

  request.done(function(data,status,jqXHR) {

    console.log("status del request done"+status);


      $("#country").find("tr:gt(0)").remove();    //delete all rows           
      for (i=0;i<data.length;i++){

        var row = $('<tr/>');
        $("#country").append(row);
        $('<td></td>').text(data[i].country).appendTo(row);
        $('<td></td>').text(data[i].year).appendTo(row);
        $('<td></td>').text(data[i].percentage).appendTo(row);
        $('<td></td>').text(data[i].type).appendTo(row);
      }
          /*    if(jqXHR.status==201){
                $("#log").html(status);
                $("#msg").html("THe resource has been added.");*/
    
           
  });

  request.always(function (jqXHR,status){
    console.log("status del request always "+status);
      if(status=="error"){
        console.log("Status: "+jqXHR.status);
        if($("#apikey").val()==0){
          console.log("ENTRA EN APIKEY");
          $("#status").html(jqXHR.status);
          $("#log").html(status);
          $("#msg").html("Introduce the password. (apikey)");
        }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){
          $("#status").html(jqXHR.status);
          $("#log").html(status);
          $("#msg").html("The password is incorrect, try again");
        }else if(jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");
        }else if (jqXHR.status==402){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Payment Required, buy a plan");


        }else if (jqXHR.status==400){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("A box is empty , please review it and try again");


        }else if( status=409){
          $("#status").html(jqXHR.status);
          $("#log").html("ERROR");
          $("#msg").html("You can´t push a resource with the same country and year.");

        }

      }else{
      $("#status").html(jqXHR.status);
      $("#log").html(status);
      $("#msg").html("Everything is correct.");
      }
      

    });
});// fin add



$("#previous").click(() => {  
  console.log("contador "+contador);

  if( contador < 0){

    contador=0;

  }else if (contador == 0){
    dir="/api/v1/music/?apikey="+$("#apikey").val()          
          +"&offset="+$("offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();
    
    var request = $.ajax({

      url:dir,
      type: "GET",
      data:"{"+ ' "country": ' + '"' + $("#payload1").val() + '"'  
              + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
              + "," + ' "percentage": ' + '"' + $("#payload3").val()+'"'+ "," 
              + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
      contentType: "application/json"

    });
    request.done(function(data,status,jqXHR) {
      
      $("#country").find("tr:gt(0)").remove();    
      for (i=0;i<data.length;i++){ 
        var row = $('<tr/>');
        $("#country").append(row);
        $('<td></td>').text(data[i].country).appendTo(row);
        $('<td></td>').text(data[i].year).appendTo(row);
        $('<td></td>').text(data[i].percentage).appendTo(row);
        $('<td></td>').text(data[i].type).appendTo(row);
      }
      $("#status").html(jqXHR.status);
      $("#log").html(status);
      $("#msg").html("Everything is correct.");
    });


    request.always(function (jqXHR,status){
      if(status=="error"){
        console.log("Status: "+jqXHR.status);
        if($("#apikey").val()==0){
          console.log("ENTRA EN APIKEY");
          $("#status").html(jqXHR.status);
          $("#log").html(status);
          $("#msg").html("Introduce the password. (apikey)");
          
            
        }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){

          $("#status").html(jqXHR.status);
          $("#log").html(status);
          ("#msg").html("The password is incorrect, try again");
          
          
        }else if(jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");


        }
        
      }else{
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("Everything is correct.");
      }

    });
  contador++;
  }else{
    console.log("Valor de contador dentro de previous "+contador);
    s=parseInt($("#limit").val());
    
    suma=suma+s;
    console.log("valor de suma en previous "+suma);
    
    dir="/api/v1/music/?apikey="+$("#apikey").val()          
          +"&offset="+suma
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();
    console.log("direccion del else "+dir);
    var request = $.ajax({

      url:dir,
      type: "GET",
      data:"{"+ ' "country": ' + '"' + $("#payload1").val() + '"'  
              + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
              + "," + ' "percentage": ' + '"' + $("#payload3").val()+'"'+ "," 
              + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
      contentType: "application/json"

    });
    request.done(function(data,status,jqXHR) {
      
      $("#country").find("tr:gt(0)").remove();    
      for (i=0;i<data.length;i++){ 
        var row = $('<tr/>');
        $("#country").append(row);
        $('<td></td>').text(data[i].country).appendTo(row);
        $('<td></td>').text(data[i].year).appendTo(row);
        $('<td></td>').text(data[i].percentage).appendTo(row);
        $('<td></td>').text(data[i].type).appendTo(row);
      }
      $("#status").html(jqXHR.status);
      $("#log").html(status);
      $("#msg").html("Everything is correct.");
    });


    request.always(function (jqXHR,status){
      if(status=="error"){
        console.log("Status: "+jqXHR.status);
        if($("#apikey").val()==0){
          console.log("ENTRA EN APIKEY");
          $("#status").html(jqXHR.status);
          $("#log").html(status);
          $("#msg").html("Introduce the password. (apikey)");
          
            
        }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){

          $("#status").html(jqXHR.status);
          $("#log").html(status);
          ("#msg").html("The password is incorrect, try again");
          
          
        }else if(jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");


        }
        
      }else{
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("Everything is correct.");
      }

    });

  contador++;  
  }
 
});// fin previous

/*$("#back").click(() => {  
  console.log("Valor de contador dentro de back  "+contador);
  if( contador2 < 0){
    contador2=0;

  }else if (contador2 = 0){
    dir="/api/v1/music/?apikey="+$("#apikey").val()          
          +"&offset="+$("offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();
    
    var request = $.ajax({

      url:dir,
      type: "GET",
      data:"{"+ ' "country": ' + '"' + $("#payload1").val() + '"'  
              + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
              + "," + ' "percentage": ' + '"' + $("#payload3").val()+'"'+ "," 
              + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
      contentType: "application/json"

    });
    request.done(function(data,status,jqXHR) {
      
      $("#country").find("tr:gt(0)").remove();    
      for (i=0;i<data.length;i++){ 
        var row = $('<tr/>');
        $("#country").append(row);
        $('<td></td>').text(data[i].country).appendTo(row);
        $('<td></td>').text(data[i].year).appendTo(row);
        $('<td></td>').text(data[i].percentage).appendTo(row);
        $('<td></td>').text(data[i].type).appendTo(row);
      }
      $("#status").html(jqXHR.status);
      $("#log").html(status);
      $("#msg").html("Everything is correct.");
    });


    request.always(function (jqXHR,status){
      if(status=="error"){
        console.log("Status: "+jqXHR.status);
        if($("#apikey").val()==0){
          console.log("ENTRA EN APIKEY");
          $("#status").html(jqXHR.status);
          $("#log").html(status);
          $("#msg").html("Introduce the password. (apikey)");
          
            
        }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){

          $("#status").html(jqXHR.status);
          $("#log").html(status);
          ("#msg").html("The password is incorrect, try again");
          
          
        }else if(jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");


        }else if (jqXHR.status==402){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Payment Required, buy a plan");


        }

        
      }else{
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("Everything is correct.");
      }

    });
  
  }else{
    s=parseInt($("#limit").val());
    
    suma=suma-s;
    console.log("valor de suma en back "+suma);
    
    dir="/api/v1/music/?apikey="+$("#apikey").val()          
          +"&offset="+suma
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();
    
    var request = $.ajax({

      url:dir,
      type: "GET",
      data:"{"+ ' "country": ' + '"' + $("#payload1").val() + '"'  
              + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
              + "," + ' "percentage": ' + '"' + $("#payload3").val()+'"'+ "," 
              + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
      contentType: "application/json"

    });
    request.done(function(data,status,jqXHR) {
      
      $("#country").find("tr:gt(0)").remove();    
      for (i=0;i<data.length;i++){ 
        var row = $('<tr/>');
        $("#country").append(row);
        $('<td></td>').text(data[i].country).appendTo(row);
        $('<td></td>').text(data[i].year).appendTo(row);
        $('<td></td>').text(data[i].percentage).appendTo(row);
        $('<td></td>').text(data[i].type).appendTo(row);
      }
      $("#status").html(jqXHR.status);
      $("#log").html(status);
      $("#msg").html("Everything is correct.");
    });


    request.always(function (jqXHR,status){
      if(status=="error"){
        
        if($("#apikey").val()==0){
          
          $("#status").html(jqXHR.status);
          $("#log").html(status);
          $("#msg").html("Introduce the password. (apikey)");
          
            
        }else if($("#apikey").val()!="multiPlan_C5_sos-2016-08-bhl_ag" && $("apikey").val()!=0){

          $("#status").html(jqXHR.status);
          $("#log").html(status);
          ("#msg").html("The password is incorrect, try again");
          
          
        }else if(jqXHR.status==429){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Too many request, buy a plan");


        }else if (jqXHR.status==402){
            $("#status").html(jqXHR.status);
            $("#log").html(status);
            $("#msg").html("Payment Required, buy a plan");


        }
        
      }else{
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        $("#msg").html("Everything is correct.");
      }

    });

  contador++;
  }

});// fin back
*/


});// final del todo





    