google.charts.load("current", {packages:["bar"]});
$(document).ready(()=>{
  var request2=$.ajax({
          type: "GET",          
          url:"http://datosabiertos.rivasciudad.es/dataset/08112ac0-df1c-4ce6-b3af-0bbd33cce9b5/resource/18c5c486-f524-431a-9724-91bcd9ee03b3/download/indicadoresgenerales.json",
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

      var data_per=[];

      request.done(function(data,status){
        for (i=0;i<data.length;i++){
        var item=data[i];
        var itemF=[item.year,item.percentage];
        data_per.push(itemF);
     
        }
        console.log("data_per "+data_per);
    
      });
   
      

      var data_val=[];

      request2.done(function(data,status){
        for (i=0;i<data.length;i++){
        var item=data[i];
        var itemF=[item.value];
        data_val.push(itemF);
     
        }
        console.log("data_val "+ data_val);
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          //var data_sty=["#b87333","color: #e5e4e2","#b87333","color: #e5e4e2","#b87333"];


          var dataForWidget=[['year','percentage','value']]; 

          for (i=0; i<data_val.length;i++){
            var y= data_per[i][0];
            var p= data_per[i][1];
            var v= data_val[i];
            //var s= data_sty[i];

            var itemForWidget=[y,p,v];

            dataForWidget.push(itemForWidget);
            console.log("dataForWidget "+dataForWidget);


          }


          var data = google.visualization.arrayToDataTable(dataForWidget);

   

          var options = {
            chart:{
              title:'Mezcla'
            },
            bars:'horizontal'

          };
          var chart = new google.charts.Bar(document.getElementById("barchart_material"));
          chart.draw(data, options);
          }
      });
    
});

      