class Endboss extends MovableObject {
    name = 'Endboss';
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.x = 2500
        this.y = 60;
        this.height = 400;
        this.width = 350;
        this.animate();
        this.isEndbossHurt = false;
    }

    animate() {
        setInterval(() => {
            if (!this.isEndbossHurt) {
                let i = this.currentImage % this.IMAGES_ALERT.length;
                this.playAnimation(this.IMAGES_ALERT);
            }
        }, 400);

        setInterval(() => {
            if (this.isEndbossHurt) {
                let i = this.currentImage % this.IMAGES_HURT.length;
                this.playAnimation(this.IMAGES_HURT);
            }
        }, 200);

        setInterval(() => {
            if (this.isEndbossHurt) {
                this.x -= 50; // Subtrahiere 50 von x und weise es x neu zu
            }
        }, 1000);
    }
}