let pianoKeys=document.querySelectorAll(".piano-keys .key"); //by default, audio src is "a" tune
let volumeSlider=document.querySelector(".volume-slider input");
let keysCheckbox=document.querySelector(".keys-checkbox input");

let allKeys=[],
audio = new Audio("tunes/a.wav");

let playTune = (key)=>{
    audio.src=`tunes/${key}.wav`; //passing audio src based on key pressed
    audio.play();  //playing audio
    
    let clickedKey=document.querySelector(`[data-key="${key}"]`); //getting clicked key element
    clickedKey.classList.add("active");  //adding active class to the clicked key element
    setTimeout(()=>{  //removing active class after 150ms fromt the clicked key element
        clickedKey.classList.remove("active");
    },150);
}
pianoKeys.forEach((key)=>{
    allKeys.push(key.dataset.key);
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", ()=>playTune(key.dataset.key));
   
});

let handleVolume = (e)=>{
    audio.volume=e.target.value;  //passing the range slider value as an audio volume
}
let pressedKey=(e)=>{
    // if the pressed key is in the allKeys array, only call the playTune function
    if(allKeys.includes(e.key)){
        playTune(e.key);
    }
}
let showhideKeys=()=>{
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key=>key.classList.toggle("hide"));
}
document.addEventListener("keydown",pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showhideKeys);