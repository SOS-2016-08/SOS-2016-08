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
        url: '/api/v1/social_situation?apikey=123',
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
      
    }
    console.log("datos mios "+data_country);
  });
  var data_sales=[];
  request2.done(function(data,status){
    for (i=0;i<data.length;i++){
    var item=data[i];
    
    var itemF =[item.country,item.year,parseInt(item.sales)];
    
    data_sales.push(itemF);
    }
    console.log("datos candela "+data_sales);
  });




          google.charts.setOnLoadCallback(drawRegionsMap);
          function drawRegionsMap() {
            var dataForWidget=[["country","sales"]];
            
           /* var sales=0;
            for(i=0;i<data_country.length;i++){
              
              var item=data_country[i];
              console.log("data_country[i] "+data_country[i]);
              console.log("data_country[i][0] "+data_country[i][0]);// country
              console.log("data_country[i][1] TIENE QUE SALIR AÑO "+data_country[i][1]);
              console.log("item[0] COUNTRY dentro del request done "+item[0]);// country
              console.log("item[1] YEAR dentro del request done "+item[1]);//porcentaje
              
            }
            for(j=0;j<data_sales.length;j++){
              var item2=data_sales[j];

              console.log("data_sales[j] "+data_sales[j]);
              console.log("data_sales[j][0] "+data_sales[j][0]);

              console.log("item2[0]  country "+item2[0]);// country de candela
              console.log("item2[1]  year "+item2[1]);//las ventas
              console.log("item2[2] sales  "+item2[2]);
            }*/

            for(i=0;i<data_country.length;i++){
              for(j=0; j<data_sales.length;j++){
                if(data_country[i][0] == data_sales[j][0] && data_country[i][1] == data_sales[j][1]){
                  var c=data_country[i][0];
                  var s=data_sales[j][2];
                  
                  var itemForWidget=[c,s];
                  dataForWidget.push(itemForWidget);
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


 /* request.done(function(data,status) {
    google.charts.setOnLoadCallback(drawRegionsMap);
    console.log("dentro del done ..data.."+data);

    function drawRegionsMap() {
    

      var data_resource = [ ['country', 'percentage']];
      console.log("dentro de la fuinciona pinta mapa"+data_resource);
      for(i=0;i<data.length;i++){
          //resource=data[i];
          
            var resource_for_widjet=[data[i].country,data[i].percentage];
            data_resource.push(resource_for_widjet);
            console.log("dentro del done ..resource_for_widjet.."+resource_for_widjet);
      }
      var data_map = google.visualization.arrayToDataTable(data_resource);

      var options = {

      
      };

  

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(data_map, options);
    }
  })

});
*/