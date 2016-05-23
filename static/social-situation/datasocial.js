 
            var contador1=0;
            var contador2=0;
            var contador=0;
 
 $(document).ready(function (){

        console.log("JQuery ready");
          var request = $.ajax({
              type: "GET",
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
  
            request.done(function(data,status,jqXHR) {
              
              var js = JSON.stringify(data);
              
              $("#data").html(js);
              $("#status").html(jqXHR.status);
              console.log(jqXHR.status);
              $("#log").html(status);
              console.log(status);
              //$('#dg').datagrid('reload');

            });

            request.always(function (jqXHR,status){
              if(status=="error"){
                console.log("Status: "+jqXHR.status);
                $("#data").html(" ");
                $("#status").html(jqXHR.status);
                $("#log").html(status);
              };         
      
           });
          


});
 

          function saveUser(){
                $('#dlg').dialog('close');
                var key=$('#apikey').val();
                var request = $.ajax({
                    url: url,
                    type: metodo,
                    data: "{}",
                    data: '{"country":"'+$("#country").val()+'","year":"'+$("#year").val()+'","sales":"'+$("#sales").val()+'","digital":"'+$("#digital").val()+'","nodigital":"'+$("#nodigital").val()+'"}',
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
              },
              error:(jqXHR)=>{
                if(jqXHR.status==409)
                  alert("ERROR resource exits")
              }





            });
                  request.done(function(data,status,jqXHR) {
              
                      var js = JSON.stringify(data);
                      console.log("country",js);
                      $("#data").html(js);
                      $("#status").html(jqXHR.status);
                      console.log(jqXHR.status);
                      $("#log").html(status);
                      $('#dg').datagrid('reload');
                      $('#dg').datagrid('loadData', {"total":data.length,"rows":data});
                      console.log(status);
                      
                          });
                
                    request.always(function (jqXHR,status){
                    if(status=="error"){
                        console.log("Status: "+jqXHR.status);
                        $("#data").html(" ");
                        $("#status").html(jqXHR.status);
                        $("#log").html(status);
                    }else{
                        $("#txtStatus").text(status);
                    }
                  });
                }


        function newUser(){
            var key=$('#apikey').val();
            $('#dlg').dialog('open').dialog('center').dialog('setTitle','New User');
            $('#fm').form('clear');
            url = '/api/v1/social_situation?apikey='+key;
            metodo="POST";
            type="POST";
            console.log(metodo);

        }

        function recargar(){


            

            var key=$('#apikey').val();
               
                method= "GET";
                    var request =$.ajax({
                        type: method,
                        url: '/api/v1/social_situation/?apikey='+key ,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(data)
                                {
                                    $('#dg').datagrid('loadData', {"total":data.length,"rows":data}); 
                                },
                        error: function (jqXHR)
                                { if(jqXHR.status==401){
                                        alert("Wrong API Key")
                                    }else{
                                      if(jqXHR.status==409)
                                        alert("ERROR")
                                    } if(jqXHR.status==429){
                                      alert("YOU MUST BUY A PLAN. THANKS YOU");

                                     }
                                    //$('#dg').datagrid('reload');
                                }
                        
                    });
            
        }



        function editUser(){
            metodo="PUT";
            type="PUT";
            var key=$('#apikey').val();


            var row = $('#dg').datagrid('getSelected');
            console.log("ROW",row);
            if (row){
                $('#dlg').dialog('open').dialog('center').dialog('setTitle','Edit User');
                $('#fm').form('load',row);
                url = "../../../api/v1/social_situation/"+country.value+"/"+year.value+"?apikey="+key;
            }
            $('#dg').datagrid('reload');
        }

        function deleteUser(){
            var key=$('#apikey').val();
            metodo="DELETE";
            type="DELETE";
            var row = $('#dg').datagrid('getSelected');
            
            console.log("ROW",row);
            if (row){
                $('#dlg').dialog('open').dialog('center').dialog('setTitle','Are you sure you want to destroy this user?');
                $('#fm').form('load',row);
                url = "../../../api/v1/social_situation/"+country.value+"/"+year.value+"?apikey="+key;
                
            }
            $('#dg').datagrid('reload');
        }

function paginacion(value){
            //var limit=$('#limit').val();

            var offset=$('#offset').val();
            var limit=$('#limit').val();
            var from=$('#from').val();
            var to=$('#to').val();
            console.log(offset);
            method="GET";
            //var row = $('#dg').datagrid('getSelected');
            //console.log(row.country);
            var country=$('#buscador').val();
            console.log(country);
            //var country=value;
            url="/api/v1/social_situation/"+country+"?apikey=multiPlan_C2_sos-2016-08-cmg_ag&offset="+offset+"&limit="+limit+"&from="+from+"&to="+to;
            var request =$.ajax({
                        type: method,
                        url: url,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(data)
                                {  
                                 $('#dg').datagrid('loadData', {"total":data.length,"rows":data});  
                                },
                        error: function (jqXHR)
                                { if(jqXHR.status==401){
                                        alert("Wrong API Key");
                                    }else if(jqXHR.status==404){
                                        alert("NOT FOUND: Please write another country");
                                    }
                                }
                        
                        
                    });
        }



        




        function siguienteCountry(value){
            //var limit=$('#limit').val();
            

            var limite=parseInt( $("#limit").val() );
            contador2=contador1;
            contador1=limite;
            if(contador1!=contador2){
                contador=0;
            }

           

            var from=$('#from').val();
            var to=$('#to').val();
            console.log(contador);
            method="GET";
            //var row = $('#dg').datagrid('getSelected');
            var country=$('#buscador').val();
            var request =$.ajax({

                        type: method,
                        url: "/api/v1/social_situation/"+country+"?apikey=multiPlan_C2_sos-2016-08-cmg_ag&offset="+contador+"&limit="+limite+"&from="+from+"&to="+to,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(data)
                                {  

                                  $('#dg').datagrid('loadData', {"total":data.length,"rows":data});
                                  $('#next').linkbutton('enable');
                                  $('#previus').linkbutton('enable');

                                 if(limite>data.length){
                                   $('#next').linkbutton('disable');
                                    console.log("entra");
                                 }else{
                                  

                                 
                                    contador+=limite;
                                    
                                 } 
                                 

                                  
                                },
                        error: function (jqXHR)
                                { if(jqXHR.status==401){
                                        alert("Wrong API Key");
                                    }else if(jqXHR.status==404){
                                        alert("NOT FOUND: Please write another country");
                                    }
                                }
                        
                        
                    });


        }




        function anteriorCountry(value){

            //var limit=$('#limit').val();
            

            var limite=parseInt( $("#limit").val() );
            contador-=limite;
            contador2=contador1;
            contador1=limite;
            if(contador1!=contador2){
                contador=0;
            }

           

            var from=$('#from').val();
            var to=$('#to').val();
            console.log(contador);
            method="GET";
            //var row = $('#dg').datagrid('getSelected');
            var country=$('#buscador').val();
            console.log(country);
          
           //var country=value;
            // if(country==="undefined"){
            //   console.log("problemas");

            // }
          
            
             
            var request =$.ajax({

                        type: method,
                        url: "/api/v1/social_situation/"+country+"?apikey=multiPlan_C2_sos-2016-08-cmg_ag&offset="+contador+"&limit="+limite+"&from="+from+"&to="+to,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(data)
                                {  

                                  $('#dg').datagrid('loadData', {"total":data.length,"rows":data});
                                  $('#next').linkbutton('enable');
                                 if(contador<=0){
                                   $('#previus').linkbutton('disable');
                                    console.log("entra");
                                    contador+=limite;
                                 }
                                 

                                  
                                },
                        error: function (jqXHR)
                                { if(jqXHR.status==401){
                                        alert("Wrong API Key");
                                    }else if(jqXHR.status==404){
                                        alert("NOT FOUND: Please write another country");
                                    }
                                }
                        
                        
                    });


        }

function search(value){
            var limit=$('#limit').val();
            var offset=$('#offset').val();
            var url;
            console.log(url);
            

           var key=$('#apikey').val();
           console.log(key);
            var country=value;
            method="GET";
            url="/api/v1/social_situation/"+country+"?apikey="+key;
            var request =$.ajax({
                        type: method,
                        url: url,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(data)
                                {  
                                 $('#dg').datagrid('loadData', {"total":data.length,"rows":data});  
                                },
                        error: function (jqXHR)
                                { if(jqXHR.status==401){
                                        alert("Wrong API Key");
                                    }else if(jqXHR.status==404){
                                        alert("NOT FOUND: Please write another country");
                                    }
                                }
                        
                        
                    });
        }



