var audio = document.getElementById('audio');
    var audioControlBtn = document.getElementById('audio-control-btn');

    audioControlBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            audioControlBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            audioControlBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });