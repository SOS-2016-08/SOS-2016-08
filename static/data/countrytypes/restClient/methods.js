$("document").ready(function(){




  $("#button").click(function (){
    

    var method = $("input[type=radio]:checked").attr("id");
    var request = $.ajax({
      url: $("#url").val(),
      type: method,
      data: $("#payload").val(),
      contentType : "application/json"
    });
        
    request.done(function(data,status,jqXHR) {
      
      var js = JSON.stringify(data);
      
      $("#data").html(js);
      console.log(js);
      $("#status").html(jqXHR.status);
      console.log(jqXHR.status);
      $("#log").html(status);
      console.log(status);

    });

    request.always(function (jqXHR,status){
      if(status=="error"){
        console.log("Status: "+jqXHR.status);
        $("#data").html(" ");
        $("#status").html(jqXHR.status);
        $("#log").html(status);
      }
    });

  }); 

});



    