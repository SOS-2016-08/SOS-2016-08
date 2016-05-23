google.charts.load('current', {'packages':['geochart']});

$(document).ready(() => {
  var request=$.ajax({
        type: "GET",
        url: '/api/v1/music?apikey=multiPlan_C5_sos-2016-08-bhl_ag',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      });
//multiPlan_C2_sos-2016-08-cmg_ag
  var request2=$.ajax({
        type: "GET",
        url: '/api/v1/social_situation?apikey=multiPlan_C1_sos-2016-08-cmg_ag',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      });

  var data_country=[];
  request.done(function(data,status){
    for (i=0;i<data.length;i++){
      var item=data[i];
      var itemF=[item.country,item.year];
      data_country.push(itemF);
      console.log("data_country[i][0]"+data_country[i][0]);
      
    }
    console.log("datos mios "+data_country);
  });

  var data_sales=[];
  request2.done(function(data,status){
    for (i=0;i<data.length;i++){
    var item=data[i];

    
    var itemF =[item.country,item.year,parseInt(item.sales)];
    console.log("itemF"+itemF);
    
    data_sales.push(itemF);
    console.log("data_sales[i][0]"+data_sales[i][0]);
    }
    console.log("datos candela "+data_sales);
  });

  google.charts.setOnLoadCallback(drawRegionsMap);
  function drawRegionsMap() {
    var dataForWidget=[["country","sales"]];

    
    for(i=0;i<data_country.length;i++){
      
      
      for(j=0; j<data_sales.length;j++){
        
        if(data_country[i][0] == data_sales[j][0] && data_country[i][1] == data_sales[j][1]){
          var c=data_country[i][0];
          var s=data_sales[j][2];
                  
          var itemForWidget=[c,s];

          dataForWidget.push(itemForWidget);
          console.log("dataForWidget "+dataForWidget);
        }
      }
              
              
    }
            
            
              //console.log("dataForWidget dentro del if sales menor que cero :"+dataForWidget);
             
              

              

            
    var data_map = google.visualization.arrayToDataTable(dataForWidget);
    var options = {
             
    };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data_map, options);
  }
});


 