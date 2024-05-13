class ThrowableObject extends MovableObject {

    IMAGES_BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.trow(x, y);
        this.animate();
    }

    
    /**
     * Transfers the current position of the bottle
     */
    trow(x, y) {
        this.speedY = 30;
        this.applyGravity();
        if (world.charakter.otherDirection) {
            this.speedX = -10; 
        } else {
            this.speedX = 10;  
        }

        setInterval(() => {
            this.x += this.speedX;
        }, 25);
    }


    /**
     * Starts the animation of the thrown bottle
     */
    animate() {
        setInterval(() => this.throwBottle(), 100);
    }


    /**
     * Updates the current image of the thrown bottle
     */
    throwBottle() {
        let i = this.currentImage % this.IMAGES_BOTTLE_ROTATION.length;
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
    }
}