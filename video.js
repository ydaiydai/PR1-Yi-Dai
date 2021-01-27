const overlay = document.createElement('div')
overlay.id = 'overlay'
document.body.appendChild(overlay)

var videoPlayer = document.getElementById("videoPlayer")
var myVideo = document.getElementById("myVideo")

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block"
    overlay.classList.add('active')
    while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild)
    }
    overlay.appendChild(videoPlayer)
}

function stopVideo(){
    videoPlayer.style.display = "none"
}

overlay.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    overlay.classList.remove('active')
})



