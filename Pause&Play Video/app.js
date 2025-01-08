let video = document.getElementById('video')
let pauseBtn = document.getElementById('pause')
let playBtn = document.getElementById('play')

playBtn.addEventListener('click', function() {
    pauseBtn.classList.remove('active')
    playBtn.classList.add('active')
    video.play()
})
pauseBtn.addEventListener('click', function() {
    playBtn.classList.remove('active')
    pauseBtn.classList.add('active')
    video.pause()
})

