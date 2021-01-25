const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

var videoPlayer = document.getElementById("videoPlayer")
var myVideo = document.getElementById("myVideo")

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block"
    lightbox.classList.add('active')
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(videoPlayer)
}

function stopVideo(){
  videoPlayer.style.display = "none"
}

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  
})



