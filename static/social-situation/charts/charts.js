



google.charts.load('current', {'packages':['map']});

$(document).ready(() =>{
  var request=$.ajax({
        type: "GET",
        url: '/api/v1/social_situation?apikey=123',
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      });

  request.done(function(data,status) {
    google.charts.setOnLoadCallback(drawMap);
    


  
  

    function drawMap() {
    

      var data_resource = [ ['country', 'year']];
      console.log("dentro de la fuinciona pinta mapa"+data_resource);
      for(i=0;i<data.length;i++){
          //resource=data[i];
          
            var resource_for_widjet=[data[i].country,data[i].year];
            data_resource.push(resource_for_widjet);
            console.log("dentro del done ..resource_for_widjet.."+resource_for_widjet);
      }
      var data_map = google.visualization.arrayToDataTable(data_resource);

      var options = {

      
      };

      var map = new google.visualization.Map(document.getElementById('chart_div'));

      map.draw(data_map, options);
    }
  })

});

      