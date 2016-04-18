 $(document).ready(function (){
        console.log("JQuery ready");
      
          var request = $.ajax({
              type: "GET",
              url:"/api/v1/social_situation?apikey=123",
              data: "{}",
              contentType: "application/json",
              dataType: "json",
              cache: false,
              success: (data) => {
              var trHTML = '';
              $.each(data, function (i, item) {
              //Cambiar codigo para que muestre los elementos independientes
                  trHTML += '<tr><td>' + data[i].country + '</td><td>' + data[i].year + '</td><td>'+ data[i].sales + '</td><td>' + data[i].digital + '</td><td>'+ data[i].nodigital + '</td><td>';
              });

              $('#social').append(trHTML);
              console.log(trHTML);
              }
            });
            request.done((data)=>{
              console.log("data received");
              console.log(data);
              //$("#location").text(JSON.stringify(data));
            });
            request.always((jqXHR,status)=>{
                if(status=="error")
                console.log("Status: "+ jqXHR.status);
            });
       
    });