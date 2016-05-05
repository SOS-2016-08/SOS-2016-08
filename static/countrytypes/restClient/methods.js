$(document).ready(() => {
  console.log("Jquery ready!");
  var dir;
  var urll="/api/v1/music/?apikey=";

  
  

  function diretion_bus(){    
    if($("#payload1").val()==0 && $("#payload2").val()==0){ //todos los

      dir="/api/v1/music/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();



    }else if($("#payload1").val()!=0 && $("#payload2").val()==0){ //con country sin year

      dir="/api/v1/music"
          +"/"
          +$("#payload1").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();
  


    }else if($("#payload1").val()==0 && $("#payload2").val()!=0){ //sin country con year
      dir="/api/v1/music"
          +"/"+$("#payload2").val()
          +"/?apikey="+$("#apikey").val()          
          +"&offset="+$("#offset").val()
          +"&limit="+$("#limit").val()
          +"&from="+$("#from").val()
          +"&to="+$("#to").val();
    }else{
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
    }

    console.log("AÑO : "+$("#payload2").val());

    return diretion_post();
  };//fin function diretion


  function diretion_put(){

    if($("#payload1").val()==0 || $("#payload2").val()==0){
      dir="/api/v1/music/?apikey="+$("#apikey").val();
    }else{


      dir="/api/v1/music/"
          +$("#payload1").val()
          +"/"
          +$("#payload2").val()
          +"/?apikey="+$("#apikey").val();
    }
    return dir;
  }; //fin function diretion_put 

  function diretion_post(){
    
    if($("#payload3").val()==0 && $("#payload4").val()!=0){
      dir=dir
          +"&type="+$("#payload4").val();

    }else if($("#payload3").val()!=0 && $("#payload4").val()==0){
      dir=dir
          +"&percentage="+$("#payload3").val();

    }else if($("#payload3").val()!=0 && $("#payload4").val()!=0){
      dir=dir
          +"&percentage="+$("#payload3").val()
          +"&type="+$("#payload4").val();
    }else{
      dir=dir;
  }
  return dir;
}; // fin funtion dirertion_post

$("#search").click(() => {
    dir=diretion_bus();
    var request = $.ajax({

      url:dir,
      type: "GET",
      data:"{"+ ' "country": ' + '"' + $("#payload1").val() + '"'  
              + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
              + "," + ' "percentage": ' + '"' + $("#payload3").val()+'"'+ "," 
              + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
      contentType: "application/json; charset=utf-8"

      });

    request.done(function(data,status,jqXHR) {
      console.log("Handling request (OK)");
      console.log("Data received:");

      $("#country").find("tr:gt(0)").remove();    //delete all rows
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

    });

    request.always(function (jqXHR,status){
        if(status=="error"){
          console.log("Status: "+jqXHR.status);
          if($("#apikey").val()==0){
            console.log("ENTRA EN APIKEY");
            $("#status").html(jqXHR.status);
        }else if($("#apikey").val()!="abc" && $("apikey").val()!=0){

          $("#status").html(jqXHR.status);
        }
        $("#status").html(jqXHR.status);
        $("#log").html(status);
        }

    });
}); // fin de ver

$("#edit").click(() => {
  console.log("Data updated");
  dir=diretion_put();
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
    url: "/api/v1/musci/?apikey=123",
    type: "GET",
    contentType: "application/json"
  });


  request.done(function(data,status,jqXHR) {
    console.log("Handling request (OK)");
    console.log("Data received:");
    $("#status").html(jqXHR.status);
    $("#log").html(status);
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
    $("#status").html(jqXHR.status);
    $("#log").html(status);
  });

  request.always(function (jqXHR,status){

    if(status=="error"){
      console.log("Status: "+jqXHR.status);
      if($("#apikey").val()==0){
        console.log("ENTRA EN APIKEY");
        $("#status").html(jqXHR.status);
    }else if($("#apikey").val()!="123" && $("apikey").val()!=0){

      $("#status").html(jqXHR.status);
    }
    $("#status").html(jqXHR.status);
    $("#log").html(status);
    }

  });
});// fin add

$("#delete").click(() => {
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
    url: "/api/v1/music/?apikey=123",
    type: "GET",
    contentType: "application/json"
  });

  request.done(function(data,status,jqXHR) {
    console.log("Handling request (OK)");
    $("#status").html(jqXHR.status);
    $("#log").html(status);
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
  });

  request.always(function (jqXHR,status){
    if(status=="error"){
      console.log("Status: "+jqXHR.status);
      $("#status").html(jqXHR.status);
    if($("#apikey").val()==0){
      console.log("ENTRA EN APIKEY");
      $("#status").html(jqXHR.status);
    }else if($("#apikey").val()!="123" && $("apikey").val()!=0){
      $("#status").html(jqXHR.status);
    }
    $("#log").html(status);
    }

  });
});

$("#add").click(() => {

  console.log("Data added");
  var request = $.ajax({
    url:urll+$("#apikey").val(),
    type: "POST",
    data:"{"+ ' "country": ' + '"' + $("#payload1").val() + '"'  
            + "," +'"year": ' + '"' + $("#payload2").val() + '"' 
            + "," + ' "percentage": ' + '"' +$("#payload3").val()+'"'+ "," 
            + ' "type": ' + '"' + $("#payload4").val() + '"' + "}",
    contentType: "application/json"
  });

  var request2=$.ajax({
    url: "/api/v1/music/?apikey=123",
    type: "GET",
    contentType: "application/json"
  });

  request.done(function(data,status,jqXHR) {
    console.log("Handling request (OK)");
    console.log("Data received:");
    $("#status").html(jqXHR.status);
    $("#log").html(status);
  });

  request2.done(function(data,status,jqXHR) {
    console.log("Handling request (OK)");
    
        //delete all rows
    for (i=0;i<data.length;i++){
      for (var e = data.length - 1; e >= 0; e--) {
        if (data[i].country== data[e].country && data[i].year == data[e].year) {
          $("#status").html(jqXHR.status);
          $("#log").html(status);
        }
      }
      $("#country").find("tr:gt(0)").remove();
      var row = $('<tr/>');
      $("#country").append(row);
      $('<td></td>').text(data[i].country).appendTo(row);
      $('<td></td>').text(data[i].year).appendTo(row);
      $('<td></td>').text(data[i].percentage).appendTo(row);
      $('<td></td>').text(data[i].type).appendTo(row);    

    }
    $("#status").html(jqXHR.status);
    $("#log").html(status);
  });

    request.always(function (jqXHR,status){
      if(status=="error"){
        console.log("Status: "+jqXHR.status);
        if($("#apikey").val()==0){
          console.log("ENTRA EN APIKEY");
          $("#status").html(jqXHR.status);
        }else if($("#apikey").val()!="123" && $("apikey").val()!=0){
          $("#status").html(jqXHR.status);
        }
      if(status=409 && $("#apikey").val()=="123"){
        $("#status").html(jqXHR.status);
      }
      $("#status").html(jqXHR.status);
      $("#log").html(status);
      }

    });
  });


});// final del todo
    