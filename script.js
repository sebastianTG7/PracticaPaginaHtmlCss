//SCROLL
document.body.classList.add('disable-scroll');

//

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simula un tiempo de carga (puedes cambiar el valor)
    setTimeout(function () {
        loader.style.display = "none";
        content.style.display = "block"; // Muestra el contenido
        document.body.classList.remove("hidden");
        document.body.classList.remove('disable-scroll');
    }, 2000); // Cambia a la duración que desees
});



// MUSIC
const audio = document.querySelector('audio'),
    songLength = document.getElementById('SongLength'),
    currentTime = document.getElementById('CurrentSongTime');

const calculateTime = (secs) =>{
    const minutes = Math.floor(secs / 60),
        seconds = Math.floor(secs % 60),
        returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () =>{
    songLength.innerHTML = calculateTime(audio.duration);
}

if(audio.readyState > 0){
    displayDuration();
    currentTime.innerHTML = calculateTime(audio.currentTime);
}else{
    audio.addEventListener('loadedmetadata', () =>{
        displayDuration();
    })
}

audio.ontimeupdate = function(){
    currentTime.innerHTML = calculateTime(audio.currentTime);
    setProgress();
}

function setProgress(){
    let percentage = (audio.currentTime / audio.duration) * 100;
    document.querySelector('.progress').style.width = percentage + '%'; 
}

//Audio Controls
const playPause = document.getElementById('PlayPause'),
    plus10 = document.getElementById('Plus10'),
    back10 = document.getElementById('Back10');

playPause.addEventListener('click', ()=>{
    if(audio.paused){
        playPause.src = 'SVG/pause.svg';
        audio.play();
    }else{
        playPause.src = 'SVG/Play.svg';
        audio.pause();
    }
})

plus10.addEventListener('click', ()=>{
    audio.currentTime +=10;
})

back10.addEventListener('click', ()=>{
    audio.currentTime -=10;
})

// 