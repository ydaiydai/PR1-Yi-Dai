var btn = document.getElementById("btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.documentElement.scrollTop > document.documentElement.scrollHeight/8 ){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}
