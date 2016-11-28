$(function(){
    	var page=1;	
    	var	$orders = $('.orders');
    	$('#btn1').on('click',function(){

        $orders.html("");
          Name=$('#Name').val();
          $('#Name').val("");
          searchresult(page);
      });

         function searchresult(page){
         	$orders.html("");

			$.ajax({
			type:'GET',
		    url:"http://www.omdbapi.com/?s="+Name+'&page='+page ,

		    success: function(orders){
		    	if(orders.Error){
		    		$orders.append('<div class="alert ">Sorry noo data found</div>')
		    	}
		    	console.log(orders);
		    	var data=orders.Search;
		    	console.log(data);
		    	
		    	 var year=data[0];
		    	
		    	
		    	data.sort(function(a, b) {
                               return parseFloat(b.Year) - parseFloat(a.Year);
                           });
		    	$.each(data, function(i,order1){
		    		
		    		$orders.append('');
		    		$orders.find('row').append;


		    		var html = '<div class="row" style="background-color:grey; margin-top:10px;">';
					    		$.each(order1,function(j,order2){
					    			
					    			if(j=="Poster"){

					    				if(order2=="N/A"){
					    				 html += '<div class=" col-sm-6 col-md-6 col-lg-6 pull-right" style="margin-top:20px; margin-bottom:20px; " >'+
			                              '<img id="image" src="sim.png" alt="sim.png" width="300" height="250">'+"</br>"
			                            +'</div>';
					    				}else{
					    				html +='<div class="col-sm-6 col-md-6 col-lg-6 pull-right" style="margin-top:20px; margin-bottom:20px;">'+
					    			   '<img id="image" src="'+order2+'" alt="ima.png" width="300" height="250">'+"</br>"
					    		 +'</div>';

					    		     }
					    		     	
					    			}
					    		});

					


		    		html +='<div class="col-sm-6 col-md-6 col-lg-6" style="margin-top:50px; ">';
		    		$.each(order1,function(j,order2){
		    			if(j!="Poster"){
		    	
		    				html+='<div  style="margin-top:20px; " >'+
		    		            j+":"+"\n"+order2+"</br>" 
		    		       
		    		       ;
		    			}
		    	    
		    		
		            });
		           html += '</div>';
					$orders.append(html);

		          
		        });
		    },
		    error: function(){
               alert("error loading function");
		    },
         });
		};
		$('#next').on("click",function(){
			page++;
			searchresult(page);
		});
		$('#prev').on("click",function(){
			page--;
			searchresult(page);
		});

	
		});