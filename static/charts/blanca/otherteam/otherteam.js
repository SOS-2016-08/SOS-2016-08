google.charts.load('current', {'packages':['corechart']});


$(document).ready(() => {

    var request=$.ajax({
        type: "GET",
        url: '/api/v1/music?apikey=multiPlan_C5_sos-2016-08-bhl_ag',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
    });


      var request2=$.ajax({
        type: "GET",
        url: '/api/v1/mort-sickness?apikey=multiPlan_C2_sos-2016-03-pgs_ag',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      });


    var data_type=[];

    request.done(function(data,status){
      for (i=0;i<data.length;i++){
        var item=data[i];
        var itemF=[item.year,item.type];
        data_type.push(itemF);
       
        
      }
      
    });


    var data_mort=[];

    request2.done(function(data,status){  
      console.log("done 2");  
      for (i=0;i<data.length;i++){
        var item=data[i];    
        var itemF =[item.year,item.totalMortality];    
        data_mort.push(itemF);
      }


      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var dataForWidget=[["type","totalMortality"]];    

        for( j=0; j<data_mort.length;j++){ 
          for(i=0;i<data_type.length;i++){
         
            if(data_type[i][0] == data_mort[j][0]){// si los años son iguales, muestra el tipo de muscia con el numero de muertos

              var t=data_type[i][1];
              var m=data_mort[j][1];
                        
              var itemForWidget=[t,parseInt(m)];

              dataForWidget.push(itemForWidget);
              console.log(" dataForWidget "+dataForWidget);
               


            }
          }
                    
        }


                
        console.log("cuando deberia pintar dataForWidget "+dataForWidget);
          
        var data_donu  = google.visualization.arrayToDataTable(dataForWidget);

          
        console.log("data_donu "+ data_donu);
        var options = {
        
        pieSliceText: 'label',
        title: 'Integration between mortality with the type of music most listened to in a given year .',
        pieStartAngle: 100,
      };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data_donu, options);
    }

    
    });  

});

