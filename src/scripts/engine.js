const pianoKeys = document.querySelectorAll(".piano-keys .key")

let mapedKeys = []
let audio = new Audio("Tunes/a.wav")

const playTune = key => {
    audio.src = `Tunes/${key}.wav`
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`)
    clickedkey.classList.add("active")
    setTimeout(()=>{
        clickedkey.classList.remove("active")
    },150)
};

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
})

document.addEventListener("keydown", (e)=>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key)   
    } 
});