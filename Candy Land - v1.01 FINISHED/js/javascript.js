
function PopupBox()
{
alert("Hello, Thank you for subscribing to our newsletter and we hope you will be in touch!");
}




		
		function validateForm(form){
				
			var fNm = form.fname.value;
			var eMl = form.email.value;
			var apos=eMl.indexOf("@");
			var dotpos=eMl.lastIndexOf(".");
				
			  if (fNm == "" || fNm == null){
			    alert( "Please enter your name." );
			    form.fname.focus();
			    return false;
			  }
			  else if(eMl == ""  || eMl == null){
				alert( "Please enter your email." );
			    form.email.focus();
			    return false;
			  }
			  else if(apos<1||dotpos-apos<2){
			    alert( "Please enter a valid email address for example *candy@land.com* " );
			    form.email.focus();
			    return false;
			  }
			  else{ alert("Thank you for subscribing!");
			  	return true;
			  }
			
			}

