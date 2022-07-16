const btn = document.querySelectorAll(".btn");
console.log(btn);

const stopSounds = () => {
    btn.forEach((button) => {
        const sound = document.getElementById(button.innerText);
        sound.pause();
        sound.currentTime = 0;
    })
}

//let currentClickBtn;


//const playSound = () => {
btn.forEach((button) => {
        button.addEventListener('click', () => {
            stopSounds(button);
            document.getElementById(button.innerText).play();
        })
    })
    //}
    //playSound();