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

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    animationInterval = null;

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2500
        this.y = 60;
        this.height = 400;
        this.width = 350;
        this.animate();
        this.isEndbossHurt = false;
        this.endbossIsDead = false;
    }

    animate() {
        this.animationInterval = setInterval(() => {
            if (!this.isEndbossHurt) {
                let i = this.currentImage % this.IMAGES_ALERT.length;
                this.playAnimation(this.IMAGES_ALERT);
            }
        }, 400);

        this.animationInterval = setInterval(() => {
            if (this.isEndbossHurt) {
                let i = this.currentImage % this.IMAGES_HURT.length;
                this.playAnimation(this.IMAGES_HURT);
            }
        }, 200);

        setInterval(() => {
            if (this.endbossIsDead) {
                let i = this.currentImage % this.IMAGES_DEAD.length;
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 666);

        this.animationInterval = setInterval(() => {
            if (this.isEndbossHurt) {
                this.x -= 50;
            }
        }, 1000);
    }

    stopAnimation() {
        // this.chickenDeadSound.play();
        clearInterval(this.animationInterval); // Stoppe das Intervall
    }
}