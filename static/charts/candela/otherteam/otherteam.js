
google.charts.load('current', {'packages':['geochart']});

$(document).ready(() =>{
  var request=$.ajax({
        type: "GET",
        url: '/api/v1/social_situation?apikey=multiPlan_C2_sos-2016-08-cmg_ag',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      });


  

  var request2=$.ajax({   
          type: "GET",
          url: "/api/v1/participants-number?apikey=multiPlan_C2_sos-2016-05-egf_ag",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          async: false
        });


var dataArray=[];
        request.done(function(data,status){
          for (i=0;i<data.length;i++){
            var item=data[i];
            var itemF =[item.country,item.year,parseInt(item.sales)];
            dataArray.push(itemF);
            console.log("mios",dataArray);
           
          }
        });





  var dataArray2=[];
        request2.done(function(data,status){
          for (i=0;i<data.length;i++){
            var item=data[i];
            var itemF =[item.country,parseInt(item.year)];
            dataArray2.push(itemF);
            console.log("enrique",dataArray2);
           
          }
        });




    google.charts.setOnLoadCallback(drawMap);
    

    function drawMap() {
      var dataForWidget=[["country","sales"]];
    
      for(i=0;i<dataArray.length;i++){
              for(j=0; j<dataArray2.length;j++){
                if(dataArray[i][0] == dataArray2[j][0] && dataArray[i][1] == dataArray2[j][1]){
                  var a=dataArray2[j][0];
                  var b=dataArray[i][2];
                  
                  var itemForWidget=[a,b];
                  dataForWidget.push(itemForWidget);
                  console.log("TODOS",dataForWidget);
                }
              }
              
              
            }

   
      var data_map = google.visualization.arrayToDataTable(dataForWidget);

      var options = {

           colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
           backgroundColor: '#81d4fa',
           datalessRegionColor: '#f8bbd0',
           defaultColor: '#f5f5f5',


      
      };

      var map = new google.visualization.GeoChart(document.getElementById('chart_div'));

      map.draw(data_map, options);
    }
 

});

      