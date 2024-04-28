let startScreen;
let canvas;
let world;
let keyboard = new Keyboard();
let startSound = new Audio('audio/start-background-sound.mp3');

let intervalIDs = [];
let i = 1;

function init() {
    loadStartScreen();
}


window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.right = true;
    }
    if (event.keyCode == 37) {
        keyboard.left = true;
    }
    if (event.keyCode == 32) {
        keyboard.space = true;
    }
    if (event.keyCode == 68) {
        keyboard.d = true;
    }
})


window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.right = false;
    }
    if (event.keyCode == 37) {
        keyboard.left = false;
    }
    if (event.keyCode == 32) {
        keyboard.space = false;
    }
    if (event.keyCode == 68) {
        keyboard.d = false;
    }
})


function loadStartScreen() {
    startScreen = document.getElementById('start-screen');
    startScreen.innerHTML = /* html */ `
    <div class="start-sound">
        <img id="mute-sound" class="" onclick="playSound()" src="./img/volume-off.svg" alt="">
        <img id="play-sound" class="d-none" onclick="muteSound()" src="./img/volume.svg" alt="">
    </div>
    <div class="start-btn" onclick="startGame()">Start Game</div>
    <div class="start-btn" onclick="startGame()">Settings</div>
    `;
}

function startGame() {
    muteSound();
    startScreen.classList.add('d-none');
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    initLevel();
    world = new World(canvas, keyboard);

    console.log('My Charakter is', world.charakter);
}

function playSound() {
    let playButton = document.getElementById('play-sound');
    let muteButton = document.getElementById('mute-sound');
    muteButton.classList.add('d-none');
    playButton.classList.remove('d-none');
    startSound.play();
    startSound.volume = 0.2;
    startSound.loop = true;
}

function muteSound() {
    let playButton = document.getElementById('play-sound');
    let muteButton = document.getElementById('mute-sound');
    muteButton.classList.remove('d-none');
    playButton.classList.add('d-none');
    startSound.pause();
}


function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIDs.push(id);
}


function stopGame() {
    intervalIDs.forEach(clearInterval);
}
