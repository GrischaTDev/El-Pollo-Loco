class Charakter extends MovableObject {
    world;
    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_WALK = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.x = 80;
        this.y = 180;
        this.width = 130;
        this.height = 250;
        this.speed = 5;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.animate();
    }


    animate() {
        // IDLE animation
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 300);


        // WALK animation
        setInterval(() => {
            if (this.world.keyboard.right) {
                this.x += this.speed;
            }

            if (this.world.keyboard.left) {
                this.x -= this.speed;
            }
        }, 1000 / 60);

        setInterval(() => {
            // WALK RIGHT
            if (this.world.keyboard.right || this.world.keyboard.left) {
                this.x += this.speed;

                let i = this.currentImage % this.IMAGES_WALK.length;
                let path = this.IMAGES_WALK[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 60);
    }

    jump() {

    }
}