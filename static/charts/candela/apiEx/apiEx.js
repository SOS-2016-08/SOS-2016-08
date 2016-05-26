
 google.charts.load('current', {'packages':["corechart"]});

$(document).ready(() =>{
  var request=$.ajax({
        type: "GET",
        url: 'http://gsx2json.com/api?id=1WaM-dfRGgzXCJ_ladBtIuKQn1rtxKS2nMF_33tqBjiE',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        async: false
      });


  var request2=$.ajax({
        type: "GET",
        url: '/api/v1/social_situation?apikey=multiPlan_C2_sos-2016-08-cmg_ag',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      });


var dataArray=[];
        request.done(function(data,status){
          console.log("amtesgot",data.rows.length);
          for (i=0;i<data.rows.length;i++){
            var item=data.rows[i];
            var itemF =[item.country,parseInt(item.year),item.poblacion];
            dataArray.push(itemF);
            console.log("api",dataArray.length);
           
          }
        });

var dataArray2=[];
        request2.done(function(data,status){
          for (i=0;i<data.length;i++){
            var item=data[i];
            var itemF =[item.country,parseInt(item.year),parseInt(item.sales)];
            dataArray2.push(itemF);
            console.log("mios",dataArray2);
           
          }
        });





 


    google.charts.setOnLoadCallback(drawMap);
    

    function drawMap() {
      var dataForWidget=[["country","sales"]];
    
      for(i=0;i<dataArray.length;i++){
              for(j=0; j<dataArray2.length;j++){
                if(dataArray[i][0] == dataArray2[j][0]){
                  var a=dataArray2[j][0];
                  var b=dataArray2[j][2];
                  
                  var itemForWidget=[a,b];
                  dataForWidget.push(itemForWidget);
                  console.log("TODOS",dataForWidget);
                }
              }
              
              
            }
   
      var data_map = google.visualization.arrayToDataTable(dataForWidget);

      var options = {
        title: 'My Daily Activities',
          pieHole: 10.0,
           pieSliceText: 'label',
           sliceVisibilityThreshold: .2

        
          
      
      };

      var map = new google.visualization.PieChart(document.getElementById('donutchart'));

      map.draw(data_map, options);
    }
 

});
