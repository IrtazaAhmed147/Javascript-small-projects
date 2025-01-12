let video = document.getElementById('video')
let videoTime = document.getElementById('videoTime')
let playBtn = document.getElementById('play-pause')
let videoLengthRange = document.getElementById('videoLengthRange')
let volume = document.getElementById('volume')
let volumeRange = document.getElementById('volumeRange')

video.volume = volumeRange.value / 100;


playBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play().then(() => {
            playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
        })
    } else {
        video.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
    }
})
volumeRange.addEventListener('input', () => {
    video.volume = volumeRange.value / 100;
    video.muted = false; 
    if (video.volume === 0) {
        video.muted = true;
        volume.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
    } else if (video.volume >= 0.5) {
        volume.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    } else {
        volume.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
    }
})

video.addEventListener('loadedmetadata', () => {
    videoLengthRange.max = video.duration;
});
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

video.addEventListener('timeupdate', () => {
    videoTime.innerHTML = `${formatTime(video.currentTime)}/${formatTime(video.duration)}`;
    videoLengthRange.value = video.currentTime;
});
videoLengthRange.addEventListener('input', () => {
    video.currentTime = videoLengthRange.value;

})


volume.addEventListener('click', function () {
    if (video.muted === true) {
        video.volume = volumeRange.value / 100;
        if (video.volume >= 0.50) {
            video.muted = false
            volume.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
        } else if (video.volume < 0.50) {
            video.muted = false
            volume.innerHTML = `<i class="fa-solid fa-volume-low"></i>`

        }

    } else {
        video.muted = true
        volume.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    }
})