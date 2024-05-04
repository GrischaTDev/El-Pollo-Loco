let startScreen;
let winScreen;
let canvas;
let world;
let keyboard = new Keyboard();
let startSound = new Audio('audio/start-background-sound.mp3');

let intervalIDs = [];
let i = 1;

function init() {
    startScreen = document.getElementById('start-screen');
    winScreen = document.getElementById('win-screen');
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


function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function playAgain() {
    canvas.classList.remove('d-none');
    winScreen.classList.add('d-none');
    world = null;
    startGame(initLevel);
}

function startNextLevel() {
    canvas.classList.remove('d-none');
    winScreen.classList.add('d-none');
    world = null;
    startGame(initLevel2);
}


function loadWinScreen() {
    clearAllIntervals();
    canvas.classList.add('d-none');
    winScreen.classList.remove('d-none');
    winScreen.innerHTML = /* html */ `
    <div class="menu-btn" onclick="startNextLevel()">Next Level</div>
    <div class="menu-btn" onclick="playAgain()">Play again</div>
    <div class="menu-btn" onclick="loadStartScreen()">Back to menu</div>
    `;
}


function loadStartScreen() {
    let gameMenu = document.getElementById('game-menu');
    gameMenu.classList.add('d-none');
    winScreen.classList.add('d-none');
    startScreen.classList.remove('d-none');
    startScreen.innerHTML = /* html */ `
    <div class="menu-btn" onclick="startGame(initLevel)">Start Game</div>
    <div class="menu-btn" onclick="controlInfo()">Controls</div>
    `;
}


function startGame(initLevel) {
    muteSound();
    startScreen.classList.add('d-none');
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    initLevel();
    world = new World(canvas, keyboard);
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


function openGameMenu() {
    let gameMenu = document.getElementById('game-menu');
    gameMenu.classList.remove('d-none');
    gameMenu.innerHTML = /* html */ `
    <div class="menu-btn" onclick="closeopenGameMenu()">Continue</div>
    <div class="menu-btn" onclick="playAgain()">Level reset</div>
    <div class="menu-btn" onclick="controlInfo()">Controls</div>
    <div class="menu-btn" onclick="backToHomescreen()">Back to menu</div>
    `;
}


function closeopenGameMenu() {
    let gameMenu = document.getElementById('game-menu');
    gameMenu.classList.add('d-none');
}


function backToHomescreen() {
    clearAllIntervals();
    canvas.classList.add('d-none');
    loadStartScreen();
}


function controlInfo() {
    let controlInfo = document.getElementById('control-info');
    controlInfo.classList.remove('d-none');
    controlInfo.innerHTML = /* html */ `
    <img class="close" src="./img/icons/close.svg" onclick="closeControlInfo()" alt="">
    <div class="control-container">
        <span>Move character</span>
        <img src="./img/icons/control.png" alt="">
    </div>
    <div class="control-container">
        <span>Jump</span>
        <img src="./img/icons/space.png" alt="">
    </div>
    <div class="control-container">
        <span>Throw a bottle</span>
        <img src="./img/icons/letter-d.png" alt="">
    </div>
    `;
}


function closeControlInfo() {
    let controlInfo = document.getElementById('control-info');
    controlInfo.classList.add('d-none');
}


let controlInfo2 = document.getElementById('control-info');
controlInfo2.addEventListener('click', (event) => {
    if (event.target === controlInfo2) {
        controlInfo2.classList.add('d-none');
    }
});



function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIDs.push(id);
}


function stopGame() {
    intervalIDs.forEach(clearInterval);
}


function fullscreenOn() {
    let on = document.getElementById('fullscreen-btn-on');
    let off = document.getElementById('fullscreen-btn-off');
    on.classList.add('d-none');
    off.classList.remove('d-none');
    let fullscreen = document.getElementById('fullscreen');
    fullscreen.classList.add('fullscreen');
    openFullscreen(fullscreen);
}


function fullscreenOff() {
    let on = document.getElementById('fullscreen-btn-on');
    let off = document.getElementById('fullscreen-btn-off');
    on.classList.remove('d-none');
    off.classList.add('d-none');
    let fullscreen = document.getElementById('fullscreen');
    fullscreen.classList.remove('fullscreen');
    closeFullscreen(fullscreen);
}


function openFullscreen(fullscreen) {
    if (fullscreen.requestFullscreen) {
        fullscreen.requestFullscreen();
    } else if (fullscreen.webkitRequestFullscreen) { /* Safari */
        fullscreen.webkitRequestFullscreen();
    } else if (fullscreen.msRequestFullscreen) { /* IE11 */
        fullscreen.msRequestFullscreen();
    }
}


function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}