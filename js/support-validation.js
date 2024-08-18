$(document).ready(function(){
	$("#err1").hide();
	$("#err2").hide();
	$("#err3").hide();
	$("#err4").hide();
	$("#err5").hide();
	$("#err6").hide();
	$("#err7").hide();
});

function ValidateSupportForm()
{
    var email = document.SupportForm.email;
    var mid = document.SupportForm.mid;
    var network = document.SupportForm.network;
    var vdate = document.SupportForm.vdate;
    var txn = document.SupportForm.txn;
    var newEmail = document.SupportForm.newEmail;
    var message = document.SupportForm.message;
	
	 if (newEmail.value != "")
    {
		$("#err6").show();
		document.getElementById("errormessages").style.height = "auto";
        newEmail.focus();
        return false;
    }
	else 
	{	
		$("#err6").hide();
	}

	if (email.value == "")
    {
       $("#err1").show();
		document.getElementById("errormessages").style.height = "auto";
        email.focus();
        return false;
    }
	else 
	{	
		$("#err1").hide();
	}
	
    if (email.value.indexOf("@", 0) < 0)
    {
        $("#err1").show();
		document.getElementById("errormessages").style.height = "auto";
        email.focus();
        return false;
    }
	else 
	{	
		$("#err1").hide();
	}
	
    if (email.value.indexOf(".", 0) < 0)
    {
		$("#err1").show();
		document.getElementById("errormessages").style.height = "auto";
        email.focus();
        return false;
    }
	else 
	{	
		$("#err1").hide();
	}

    if (mid.value == "")
    {
		$("#err2").show();
		document.getElementById("errormessages").style.height = "auto";
        mid.focus();
        return false;
    }
	else 
	{	
		$("#err2").hide();
	}
	
	if (network.value == "")
    {
        $("#err3").show();
		document.getElementById("errormessages").style.height = "auto";
        network.focus();
        return false;
    }
	else 
	{	
		$("#err3").hide();
	}

    if (vdate.value == "")
    {
        $("#err4").show();
		document.getElementById("errormessages").style.height = "auto";
        vdate.focus();
        return false;
    }
	else 
	{	
		$("#err4").hide();
	}
    
    if (txn.value == "")
    {
        $("#err5").show();
		document.getElementById("errormessages").style.height = "auto";
        txn.focus();
        return false;
    }
	else 
	{	
		$("#err5").hide();
	}
    
    if (message.value == "")
    {
        $("#err7").show();
		document.getElementById("errormessages").style.height = "auto";
        message.focus();
        return false;
    }
	else 
	{	
		$("#err7").hide();
	}

    return true;
}