const overlay = document.createElement('div')
overlay.id = 'overlay'
document.body.appendChild(overlay)

const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('click', e => {
        overlay.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (overlay.firstChild) {
            overlay.removeChild(overlay.firstChild)
        }
        overlay.appendChild(img)
    })
})

overlay.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    overlay.classList.remove('active')
})