function loadlocalreg_form()
{

}


/*function loadlocalreg_form()
{

	if(typeof(Storage)!=undefined)
	{
		
		 		var res=JSON.parse(localStorage.getItem("key"));
		 		//var f=res.firstname;
		 		alert(res);
		
		 
	}

}*/
/*var store=function()
{
	$(document).ready(
		function()
		 {
   			 $("#register").click(function()
   			 {
       		 		alert(JSON.parse(localStorage.getItem(key)));
    		}
    		); 
		}
		);
}*/





function loadlocallogin()
{

	if(typeof(Storage)!=undefined)
	{
		 document.getElementById("form-username").value=localStorage.getItem("uname");
		 document.getElementById("form-password").value=localStorage.getItem("password");
		
	}

}

function resultval()
{

	if(typeof(Storage)!=undefined)
	{
		var result11= document.getElementById("result").value=localStorage.getItem("result1");
		if(result11)
		{
  			document.getElementById("t").innerHTML='<font size="6" color="green"><b> Thank you.....</b></font>';

		}	
	}

}


	$(document).ready(
		function()
		 {
   			 $("#btn_done").click(function()
   			 {
       		 alert("button");
    		}
    		); 
		}
		);




function login()
{

	window.location ="index.html";

}

function formData()
{


	window.location ="second.html";

}




