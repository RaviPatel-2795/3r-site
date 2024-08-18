$(document).ready(function(){
	$("#err1").hide();
	$("#err2").hide();
	$("#err3").hide();
	$("#err4").hide();
	$("#err5").hide();
});

function ValidateContactForm()
{
    var fname = document.ContactForm.fname;
    var email = document.ContactForm.email;
    var pphone = document.ContactForm.pphone;
    var newEmail = document.ContactForm.newEmail;
    var message = document.ContactForm.message;
	
	 if (newEmail.value != "")
    {
		$("#err4").show();
		document.getElementById("errormessages").style.height = "auto";
        newEmail.focus();
        return false;
    }
	else 
	{	
		$("#err4").hide();
	}

    if (fname.value == "")
    {
		$("#err1").show();
		document.getElementById("errormessages").style.height = "auto";
        fname.focus();
        return false;
    }
	else 
	{	
		$("#err1").hide();
	}
    
    if (email.value == "")
    {
       $("#err2").show();
		document.getElementById("errormessages").style.height = "auto";
        email.focus();
        return false;
    }
	else 
	{	
		$("#err2").hide();
	}
	
    if (email.value.indexOf("@", 0) < 0)
    {
        $("#err2").show();
		document.getElementById("errormessages").style.height = "auto";
        email.focus();
        return false;
    }
	else 
	{	
		$("#err2").hide();
	}
	
    if (email.value.indexOf(".", 0) < 0)
    {
		$("#err2").show();
		document.getElementById("errormessages").style.height = "auto";
        email.focus();
        return false;
    }
	else 
	{	
		$("#err2").hide();
	}
	
	if (pphone.value == "")
    {
        $("#err3").show();
		document.getElementById("errormessages").style.height = "auto";
        pphone.focus();
        return false;
    }
	else 
	{	
		$("#err3").hide();
	}

    if (message.value == "")
    {
        $("#err5").show();
		document.getElementById("errormessages").style.height = "auto";
        message.focus();
        return false;
    }
	else 
	{	
		$("#err5").hide();
	}
    return true;
}