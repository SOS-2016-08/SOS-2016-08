google.charts.load('current', {'packages':['bar']});
      $(document).ready(()=>{
        var request=$.ajax({
          type: "GET",
          url: 'http://datos.santander.es/api/rest/datasets/poblacion_pais.json',
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          async: false
        });
        request.done((dataFromServer,status)=>{
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                var dataForWidget = [['id', 'name']];
                for (i=0;i<dataFromServer.length;i++){
                  var item=dataFromServer[i];
                  var itemForWidget =[item.id,item.name];
                  dataForWidget.push(itemForWidget);
              }
                var options = {
                    chart: {
                    title: 'External API',
                  }
                };
                console.log(dataForWidget);
                var data = google.visualization.arrayToDataTable(dataForWidget);
                var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
                chart.draw(data, options);
              }
      });
    });