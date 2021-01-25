/*
var text = document.getElementById("response")

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
//alert("Valid email address!");
text.innerHTML = "Email Successfully recorded"
document.form1.text1.focus();
return true;
}
else
{
//alert("You have entered an invalid email address!")
text.innerHTML = "Invalid email address"
document.form1.text1.focus();
return false;
}
}
*/

var email = document.forms['form']['email']

var emailSuc = document.getElementById("email-suc")

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function validation(){
    if (email.value.match(mailformat)){
        emailSuc.innerHTML = "Email Successfully recorded"
        return false;
    }
    else{
        //emailSuc.style.display = "block"
        emailSuc.innerHTML = "Invalid email address"
        return false;
    }
}