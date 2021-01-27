var email = document.forms['form']['email']

var emailSuc = document.getElementById("email-suc")

var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/

function validation(){
    if (email.value.match(mailformat)){
        emailSuc.innerHTML = "Email Successfully recorded"
        return false;
    }
    else{
        emailSuc.innerHTML = "Invalid email address"
        return false;
    }
}