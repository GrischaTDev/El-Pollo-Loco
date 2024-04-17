class ThrowableObject extends MovableObject {

    IMAGES_BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    constructor() {
        super();
        this.x = 80;
        this.y = 180;
        this.width = 130;
        this.height = 250;
        this.speed = 5;
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.animate();
    }


    animate() {
        setInterval(() => {
            // Move right
            if (this.world.keyboard.d) {
                this.moveRight();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }
}