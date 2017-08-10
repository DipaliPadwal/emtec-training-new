function validate()
{


	var flag=1;
	var firstname1= document.getElementById("firstname").value;
	var lastname1= document.getElementById("lastname").value;
	var email1 = document.getElementById("email").value;
	var mobile1 = document.getElementById("mobile").value;
	var dob1 = document.getElementById("dob").value;
	var Website = document.getElementById("web").value;
	var Website = document.getElementById("web").value;
	
	var m1 = document.getElementById("s1").value;
	
	var m2= document.getElementById("s2").value;
	
	var m3= document.getElementById("s3").value;
	
	
	
	var re_mobile=/^\d{10}$/;
	var re_name=/^[a-zA-Z]+$/;
	var re_email =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		
		
		// first name validation 
		if (firstname1== "") 
		{
			//alert("Please enter firstname" + "\n");
			document.getElementById("firstnameerr").innerHTML='<font color="red"><b>Please enter firstname</b></font>';
			flag=0;
			
		}
		else if (re_name.test(firstname1))
		{
				//alert("firstname ok");
				document.getElementById("firstnameerr").innerHTML='<font color="green"><b>firstname ok</b></font>';
								//localStorage.setItem("firstname", firstname1);



		}
		else
		{
				//alert ("FirstName accepts Characters and spaces only" + "\n");
				document.getElementById("firstnameerr").innerHTML='<font color="red"><b>FirstName accepts Characters and spaces only</b></font>';
				flag=0;

				
		}
	
	// last name validation 
	
		if (lastname1== "") 
		{
			//alert("Please enter lastname" + "\n");
			document.getElementById("lastnameerr").innerHTML='<font color="red"><b>Please enter lastname</b></font>';
			flag=0;
		
		}
		else if (re_name.test(lastname1))
		{
				//alert("lastname ok");;
				document.getElementById("lastnameerr").innerHTML='<font color="green"><b>lastname ok</b></font>';
				//localStorage.setItem("lastname",lastname1);

		}
		else
		{
				//alert ("lastName accepts Characters and spaces only" + "\n");
				document.getElementById("lastnameerr").innerHTML='<font color="red"><b>FirstName accepts Characters and spaces only</b></font>';
				flag=0;

				
		}
		
		
				



		//Email validation 
	
		if ( email1 == "")
			{
					//alert("Please Enter Email" + "\n");
					document.getElementById("emailerr").innerHTML='<font color="red"><b>Please enter email</b></font>';
					flag=0;

					
			}
			else if (re_email.test(email1))
			{
				//alert( "email ok");
							document.getElementById("emailerr").innerHTML='<font color="green"><b>email okk</b></font>';
							//localStorage.setItem("email", email1);

			}
			else
			{
											document.getElementById("emailerr").innerHTML='<font color=""><b>wrong email</b></font>';
											flag=0;

			}
	


			 if(re_mobile.test(mobile1))
			{
					document.getElementById("mobileerr").innerHTML='<font color="green"><b>mobile number okk</b></font>';
					//localStorage.setItem("mobile", mobile1);

			}
			else
			{
				document.getElementById("mobileerr").innerHTML='<font color="green"><b>plz enter 10 digit number</b></font>';
				flag=0;

			}



			if(flag)
			{
				
				var d=new Date();
				var n=d.toString();
				var arr=n.split(" ");
				var str=arr[4];
				var key=str.concat(firstname1);
				var avg2=avg();
				//var average=avg2();
				var obj={
								"key":key,
								"firstname":firstname1,
								"lastname":lastname1,
								"email":email1,
								"mobile":mobile1,
								"dob":dob1,
								"Website":web,
								"sub1":m1,
								"sub2":m2,
								"sub3":m3,
								"avg":avg2
								
							};
				
				var obj1=JSON.stringify(obj);
				localStorage.setItem(key,obj1);
				window.location="third.html";
				
			}


				
function avg()
{
		var sub1 = document.getElementById("s1").value;
		var sub2 = document.getElementById("s2").value;
		var sub3 = document.getElementById("s3").value;


		var marks=[sub1,sub2,sub3];
		//console.log(marks[0]);
		
		var total = 0;
		
			for(var i = 0; i <marks.length; i++)
			 {
			    total +=parseInt(marks[i],10);
			}

				var avg1 = total / marks.length;
				return avg1;
			
	
}



/*var avg=function make()
{
	var total = 0;
	var sub1 = document.getElementById("s1").value;
		var sub2 = document.getElementById("s2").value;
		var sub3 = document.getElementById("s3").value;
		var marks=[sub1,sub2,sub3];

			function avg2()
			{
				for(var i = 0; i <marks.length; i++)
				 {
				    total +=parseInt(marks[i],10);
				}
				var avg1 = total / marks.length;
			}
				return avg1;
		}

}*/






}


 
