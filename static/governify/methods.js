$(document).ready(()=>{
  			$("#btn").click(()=>{
  				console.log("Dentro de click");
    			var request = $.ajax({
      				url: "/api/prueba?apikey="+$("#apikey").val(),
      				contentType: "application/json",
      				type: "GET"
    		});
    		request.done((data)=>{
      			var jsonString = JSON.stringify(data);
      			$("#result").html(jsonString);
      			
    		});
    		request.always((data,jqXHR,status)=>{
      			if(status=="error"){
      				console.log("Dentro de click en el if");
        			$("#status").html(status);
      			}else if(status=="Payment Required"){
        			console.log("code 402");
      				$("#result").html('<a href="http://portal.governify.io/app/#/portal?configurl=http:%2F%2Flabs.isa.us.es%2Fir%2Fhdzlaserna%2FGovernify-API%2FPlans%2Fportal-config.json">You must buy</a>');
      				
    			}else if(status=="Unauthorized"){
      				console.log("code 401");
      				$("#result").html("Unauthorized, please insert apikey.");
      				
    			}else if(status=="Too Many Requests"){
      				console.log("code 429");
      				$("#result").html('<a href="http://portal.governify.io/app/#/portal?configurl=http:%2F%2Flabs.isa.us.es%2Fir%2Fhdzlaserna%2FGovernify-API%2FPlans%2Fportal-config.json">You must buy</a>');
      				
    			}			
    		});
  		});
	});