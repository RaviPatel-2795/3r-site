$(document).ready(function(){
	//$("#err1").hide();
	//$("#err2").hide();
	//$("#err3").hide();
	$("#err4").hide();
	$("#err5").hide();
	// $("#err6").hide();
});

function ValidateEposContactForm()
{
    var fname = document.EposContactForm.fname;
    var bname = document.EposContactForm.bname;
    var pphone = document.EposContactForm.pphone;
    var querytype = document.EposContactForm.querytype;
    var newEmail = document.EposContactForm.newEmail;
    var message = document.EposContactForm.message;

    /*if (fname.value == "")
    {
		$("#err1").show();
        fname.focus();
        return false;
    }
	else 
	{	
		$("#err1").hide();
	}

	if (bname.value == "")
    {
		$("#err2").show();
        bname.focus();
        return false;
    }
	else 
	{	
		$("#err2").hide();
	}
	
	if (pphone.value == "")
    {
        $("#err3").show();
        pphone.focus();
        return false;
    }
	else 
	{	
		$("#err3").hide();
	}*/

	if (querytype.value == "Select")
    {
        $("#err4").show();
        querytype.focus();
        return false;
    }
	else 
	{	
		$("#err4").hide();
	}

	if (newEmail.value != "")
    {
		$("#err5").show();
        newEmail.focus();
        return false;
    }
	else 
	{	
		$("#err5").hide();
	}

    /*if (message.value == "")
    {
        $("#err6").show();
        message.focus();
        return false;
    }
	else 
	{	
		$("#err6").hide();
	}*/
    return true;
}