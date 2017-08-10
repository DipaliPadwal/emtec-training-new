s

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate()
{
var username = document.getElementById("form-username").value;
var password = document.getElementById("form-password").value;

var re_uname=/^[a-zA-Z0-9.\-_$@*!]{3,30}$/;

	if(re_uname.test(username))
	{

		if ( password =="dipali#123")
		{
			alert ("Login successfully");
			window.location ="second.html"; // Redirecting to other page.
			return false;
		}
		
	}
	else if(!re_uname.test(username))
	{

			document.getElementById("unameerr").innerHTML='<font color="red"><b>Invalid Username</b></font>';
	}
	else
	{

		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
			if( attempt == 0)
			{
				document.getElementById("form-username").disabled = true;
				document.getElementById("form-password").disabled = true;
				document.getElementById("submit").disabled = true;
				return false;
			}
	}


}

