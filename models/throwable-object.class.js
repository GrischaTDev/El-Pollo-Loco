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

    trow(x, y) {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_BOTTLE_ROTATION.length;
            this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        }, 100);
    }

}