
google.charts.load('current', {'packages':['geochart']});

$(document).ready(() => {
  var request=$.ajax({
        type: "GET",
        url: '/api/v1/music?apikey=multiPlan_C5_sos-2016-08-bhl_ag',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      });



  request.done(function(data,status) {
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

      