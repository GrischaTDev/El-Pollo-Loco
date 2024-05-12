class Keyboard {
    left = false;
    right = false;
    space = false;
    d = false;

    constructor() {
        this.bindKeyPressEvents();
        this.bindBtsPressEvents();
    }


    /**
     * Checks the mobile key pressure
     */
    bindBtsPressEvents() {
        this.mobileLeft();
        this.mobileRight();
        this.mobileJump();
        this.mobileThrow();
    }


    /**
     * Checks the mobile keystroke for the movement to the left
     */
    mobileLeft() {
        document.getElementById('btn-left').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.left = true;
        });
        document.getElementById('btn-left').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.left = false;
        });
    }


    /**
     * Checks the mobile keystroke for the movement to the right
     */
    mobileRight() {
        document.getElementById('btn-right').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.right = true;
        });
        document.getElementById('btn-right').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.right = false;
        });
    }


    /**
     * Checks the mobile keystroke for the movement to the jump
     */
    mobileJump() {
        document.getElementById('btn-jump').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.space = true;
        });
        document.getElementById('btn-jump').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.space = false;
        });
    }


    /**
     * Checks the mobile keystroke for the throw
     */
    mobileThrow() {
        document.getElementById('btn-throw').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.d = true;
        });
        document.getElementById('btn-throw').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.d = false;
        });
    }


    /**
     * Checks whether the following keys on the keyboard have been pressed
     */
    bindKeyPressEvents() {
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
    }
}