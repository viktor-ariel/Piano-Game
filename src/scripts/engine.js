const pianoKeys = document.querySelectorAll(".piano-keys .key")

let audio = new Audio("Tunes/a.wav")

const playTune = key => {
    audio.src = `Tunes/${key}.wav`
    audio.play();
};

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key))
})