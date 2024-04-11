let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);


    console.log('My Charakter is', world.charakter);
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
    console.log(event);
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
    console.log(event);
})