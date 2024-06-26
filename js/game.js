let world, canvas, startScreen, winScreen, gameOverScreen, gameMenu, mobileControls, on, off, fullscreen;
let backgroundMusic = false;
let keyboard = new Keyboard();
let startSound = new Audio('audio/start-background-sound.mp3');
let startWinSound = new Audio('audio/win.mp3');
let startGameOverSound = new Audio('audio/game-over.wav');

let intervalIDs = [];
let i = 1;

/**
 * Loading start screen and various variables
 */
function init() {
    gameMenu = document.getElementById('game-menu');
    startScreen = document.getElementById('start-screen');
    winScreen = document.getElementById('win-screen');
    gameOverScreen = document.getElementById('gameover-screen');
    mobileControls = document.getElementById('control-mobile');
    on = document.getElementById('fullscreen-btn-on');
    off = document.getElementById('fullscreen-btn-off');
    fullscreen = document.getElementById('fullscreen');
    loadStartScreen();
}


/**
 * Clear all intervalls
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


/**
 * Play current level again
 */
function playAgain() {
    clearAllIntervals();
    gameMenu.classList.add('d-none');
    mobileControls.classList.add('d-none');
    canvas.classList.remove('d-none');
    winScreen.classList.add('d-none');
    gameOverScreen.classList.add('d-none')
    world = null;
    startGame(initLevel);
}


/**
 * Start next level
 */
function startNextLevel() {
    canvas.classList.remove('d-none');
    winScreen.classList.add('d-none');
    mobileControls.classList.remove('d-none');
    world = null;
    startGame(initLevel2);
}


/**
 * Load the winning screen
 */
function loadWinScreen() {
    clearAllIntervals();
    stopSound();
    playWinSound();
    let ingameMenu = document.getElementById('ingame-menu');
    ingameMenu.classList.add('d-none');
    mobileControls.classList.add('d-none');
    canvas.classList.add('d-none');
    winScreen.classList.remove('d-none');
}


/**
 * Load the lost screen
 */
function loadGameOverScreen() {
    clearAllIntervals();
    stopSound();
    playGameOverSound();
    let ingameMenu = document.getElementById('ingame-menu');
    ingameMenu.classList.add('d-none');
    gameOverScreen.classList.remove('d-none')
    mobileControls.classList.add('d-none');
    canvas.classList.add('d-none');
}


/**
 * Load the start screen
 */
function loadStartScreen() {
    if (backgroundMusic) {
        playSound();
    }
    let ingameMenu = document.getElementById('ingame-menu');
    ingameMenu.classList.add('d-none');
    gameMenu.classList.add('d-none');
    mobileControls.classList.add('d-none');
    winScreen.classList.add('d-none');
    gameOverScreen.classList.add('d-none')
    startScreen.classList.remove('d-none');
}

/**
 * Start the game and create new world
 * 
 * @param {function} initLevel - Current level
 */
function startGame(initLevel) {
    if (backgroundMusic) {
        playSound();
    }
    let ingameMenu = document.getElementById('ingame-menu');
    ingameMenu.classList.remove('d-none');
    startScreen.classList.add('d-none');
    mobileControls.classList.remove('d-none');
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    initLevel();
    world = new World(canvas, keyboard);
}


/**
 * Play the sound you have won
 */
function playWinSound() {
    startWinSound.play();
    startWinSound.volume = 0.2;
    startWinSound.loop = false;
}


/**
 * Play the lost sound
 */
function playGameOverSound() {
    startGameOverSound.play();
    startGameOverSound.volume = 0.2;
    startGameOverSound.loop = false;
}


/**
 * Play the background sound
 */
function playSound() {
    let playButton = document.getElementById('play-sound');
    let muteButton = document.getElementById('mute-sound');
    muteButton.classList.add('d-none');
    playButton.classList.remove('d-none');
    startSound.play();
    startSound.volume = 0.2;
    startSound.loop = true;
    backgroundMusic = true;
}


/**
 * Mute the background sound
 */
function muteSound() {
    let playButton = document.getElementById('play-sound');
    let muteButton = document.getElementById('mute-sound');
    muteButton.classList.remove('d-none');
    playButton.classList.add('d-none');
    startSound.pause();
    backgroundMusic = false;
}


/**
 * Stop the background sound
 */
function stopSound() {
    startSound.pause();
}


/**
 * Open game menu
 */
function openGameMenu() {
    gameMenu.classList.remove('d-none');
    mobileControls.classList.add('d-none');
}


/**
 * Close game menu
 */
function closeopenGameMenu() {
    gameMenu.classList.add('d-none');
    mobileControls.classList.remove('d-none');
}


/**
 * Back to the main menu
 */
function backToHomescreen() {
    clearAllIntervals();
    gameMenu.classList.add('d-none');
    canvas.classList.add('d-none');
    loadStartScreen();
}


/**
 * Open control info menu
 */
function controlInfo() {
    let controlInfo = document.getElementById('control-info');
    controlInfo.classList.remove('d-none');
}


/**
 * Close control info menu
 */
function closeControlInfo() {
    let controlInfo = document.getElementById('control-info');
    controlInfo.classList.add('d-none');
}

/**
 * Close the window when clicking on the background
 */
let controlInfo2 = document.getElementById('control-info');
controlInfo2.addEventListener('click', (event) => {
    if (event.target === controlInfo2) {
        controlInfo2.classList.add('d-none');
    }
});


/**
 * Switch on the fullscreen
 */
function fullscreenOn() {
    on.classList.add('d-none');
    off.classList.remove('d-none');
    fullscreen.classList.add('fullscreen');
    openFullscreen();
}

/**
 * Close the fullscreen
 */
function fullscreenOff() {
    on.classList.remove('d-none');
    off.classList.add('d-none');
    fullscreen.classList.remove('fullscreen');
    closeFullscreen();
}

/**
 * Switch on the fullscreen for different browsers
 */
function openFullscreen() {
    if (fullscreen.requestFullscreen) {
        fullscreen.requestFullscreen();
    } else if (fullscreen.webkitRequestFullscreen) { /* Safari */
        fullscreen.webkitRequestFullscreen();
    } else if (fullscreen.msRequestFullscreen) { /* IE11 */
        fullscreen.msRequestFullscreen();
    }
}

/**
 * Close the fullscreen for different browsers
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

/**
 * Handle fullscreen change events
 */
function onFullscreenChange() {
    if (!document.fullscreenElement) {
        on.classList.remove('d-none');
        off.classList.add('d-none');
        fullscreen.classList.remove('fullscreen');
    }
}

// Add event listeners for fullscreen change
document.addEventListener('fullscreenchange', onFullscreenChange);
document.addEventListener('webkitfullscreenchange', onFullscreenChange); /* Safari */
document.addEventListener('msfullscreenchange', onFullscreenChange); /* IE11 */


/**
 * Check whether the screen is in landscape mode
 */
window.addEventListener('DOMContentLoaded', function() {
    const landscapeWarning = document.getElementById('landscapeWarning');

    function handleOrientationChange() {
        if (window.innerWidth < window.innerHeight) {
            landscapeWarning.classList.remove('d-none');
        } else {
            landscapeWarning.classList.add('d-none');
        }
    }

    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
});