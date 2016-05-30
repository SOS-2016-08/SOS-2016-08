google.charts.load('current', {'packages':['corechart']});
      $(document).ready(()=>{
        var request2=$.ajax({
          type: "GET",
          //url: 'http://datos.alcobendas.org/dataset/d6637fc0-112b-4070-b4db-0406cfa6ca5f/resource/6febf50b-0553-4825-856f-11b9d9606c8e/download/periodomediodepagoaproveedoresmensualdetalleporentidades.json',
          //url:"http://datos.alcobendas.org/dataset/f12a930c-a61b-408d-96f0-58735c7cfa87/resource/43af029e-4c1c-42d2-ac67-8b2001140132/download/cusersjriazadesktopeleccionesgenerales20dediciembre2015porcentajetotalmunicipio.json",
          //url:"http://datos.santander.es/api/rest/datasets/pulso_ciudad_incidencias_abiertas.json",
          url:"http://datos.alcobendas.org/dataset/aa3efc4c-e73a-46ca-933b-df501f6ad563/resource/823c2fb5-9104-4366-b3b1-6ad0dda0bc6b/download/esculturasarteenlaciudad.json",
          dataType: "json",

          async: false

        });

        var request=$.ajax({
          type: "GET",
          url: '/api/v1/music?apikey=multiPlan_C5_sos-2016-08-bhl_ag',
          data: "{}",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
        });


        var data_type=[];

        request.done(function(data,status){

          for (i=0;i<data.length;i++){
            var item=data[i];
      
            var itemF=[item.percentage];
            data_type.push(itemF);
     
      
          }
    
        });
        var data_partpo=[];
        request2.done(function(data,status){
          


          for (i=0;i<data.length;i++){
            var item=data[i];



            var autor=item.FIELD1;

            var long=item.FIELD7;

            console.log("long"+long);

            var itemF=[autor,long];
            data_partpo.push(itemF);

          }

          google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
            var dataForWidget = [['Autor','long', 'percentage']];

            for (i=0;i<data_type.length;i++){
              
                var a=data_partpo[i][0];
                var p= data_type[i];
                var e= data_partpo[i][1];

                var itemF=[a,parseInt(e),parseInt(p)];


                  
                dataForWidget.push(itemF);
                console.log("dataForWidget "+dataForWidget);



              
              
            }
            console.log("dataForWidget "+dataForWidget);
            console.log("tamaño dataForWidget "+dataForWidget.length);

            var options = {
              title:"Integration with an external api , which is several authors with information from a particular work .",
              //legend:{position:'in'},
                    
            };

            var data = google.visualization.arrayToDataTable(dataForWidget);
            var chart = new google.visualization.Histogram(document.getElementById('chart_div'));

            chart.draw(data, options);
          }

                
               
        });
});


