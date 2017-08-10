
	if(typeof(Storage)!=undefined)
	{

		
		 var li = document.createElement("li");
				var array=[];
		 var i=0;
			 for(i=0;i<localStorage.length;i++)
			 {
			 	//var key1=localStorage.key(i); 
			 
			 	var obje=JSON.parse(localStorage.getItem(localStorage.key(i)));
			 	//var obje=JSON.parse(localStorage.getItem(localStorage.key(i)));
			 	array.push(obje);

			 }	

			 
				
			

		 	$(document).ready(
		 		function()
		 		 {
		 		 	  // var array1=JSON.stringify(array)
        				//var li=createElement('li');
			        $.each(array, function(index, value) 
			        {

			        	//var li=createElement("li");
			        	var d=new Date();
						var n=d.toString();
						var arr=n.split(" ");
						var str=arr[4];
						var key=str.concat(value['firstname']);
						var url="#";
						 var a1=$('<li><a class="selectit" href="' + url + '" id='+key+'>' +key + '</a></li>').appendTo("#ul1");


						//var link=document.getElementById("demo").innerHTML=a1;
						
						});


			        }
		      );
							$("a").click(function(event)
								{

									var d1=$(this).text();
									 $.each(array, function(index, value) 
			       					 {

									var data1 = localStorage.getItem();
									//alert(data1);
 									
									var data11=JSON.parse(localStorage.getItem(data1));
									alert(data11);
									

		    					//$("this").html("<b><h4>First Name ="+ data1[0]['firstname']+"<br>Last Name ="+ data1[0]['lastname']+"<br>Email  =+ "+data1[0]['email']+"<br>Mobile ="+ data1[0]['mobile'] + "<br>Sub 1 ="+ data1[0]['m1'] + "<br>Sub 2 ="+ data1[0]['m2'] + "<br>Sub 3 ="+ data1[0]['m3']+  
//"</b>");
								});
									});

						 // li.innerHTML="<a  onclick='view(\""+key+"\")'>"+key+"</a>";
			           //$('<li>'+value['firstname']+'</li>').appendTo("#ul1");
			            //console.log(value['key']);
						//li.innerHTML="<a onclick='view(\""+key+"\")'>"+key+"</a>"
				  		//ul.appendChild(li);

			        
			   
		  
		 	//document.write(JSON.stringify(array));

		 	//console.log(JSON.stringify(obje));

	}

/*function view(key){

		data1 = localStorage.getItem(key);
 				data1 = JSON.parse(data1);
 				
 			// 	for (var key in data1) {
				//   if (data1.hasOwnProperty(key)) {
				//     var val = data1[key];
				//     console.log(val);
				//   }
				// }

					$("#data").click(function(){
		    					$("this").html("<b><h4>First Name ="+ data1[0]['firstname']+"<br>Last Name ="+ data1[0]['lastname']+"<br>Email  =+ "+data1[0]['email']+"<br>Mobile ="+ data1[0]['mobile'] + "<br>Sub 1 ="+ data1[0]['m1'] + "<br>Sub 2 ="+ data1[0]['m2'] + "<br>Sub 3 ="+ data1[0]['m3']  ;
 </b>");
						});

				$("#data").click

				var str="<h4>First Name ="+ data1[0]['firstname'] + "<br>Last Name ="+ data1[0]['lastname'] + "<br>Email  ="+ data1[0]['email'] + "<br>Mobile ="+ data1[0]['mobile'] + "<br>Sub 1 ="+ data1[0]['m1'] + "<br>Sub 2 ="+ data1[0]['m2'] + "<br>Sub 3 ="+ data1[0]['m3']  ;

				//console.log(data1[0]['firstname']);
				document.getElementById("data").innerHTML=str;
				document.getElementById("result").value=data1[0]['avg'];

}*/
