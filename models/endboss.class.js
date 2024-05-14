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

    offset = {
        top: 80,
        left: 20,
        right: -30,
        bottom: 40
    }

    animationInterval = null;
    chickenDeadSound = new Audio('audio/chicken-dead.mp3');

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


    /**
     * Start all boss animations with an interval
     */
    animate() {
        this.animationInterval = setInterval(() => this.isHurt(), 400);
        this.moveAnimationInterval = setInterval(() => this.moveLeftIsHurt(), 1000);
        this.deadAnimationInterval = setInterval(() => this.isDead(), 300);
    }


    /**
     * checks if the endboss is hurt
     */
    isHurt() {
        if (!this.isEndbossHurt) {
            let i = this.currentImage % this.IMAGES_ALERT.length;
            this.playAnimation(this.IMAGES_ALERT);
        } else {
            let i = this.currentImage % this.IMAGES_HURT.length;
            this.playAnimation(this.IMAGES_HURT);
        }
    }


    /**
     * endboss moves to the left when it is hurt
     */
    moveLeftIsHurt() {
        if (this.isEndbossHurt) {
            this.x -= 50;
        }
    }


    /**
     * checks if the final boss is dead and executes the death animation
     */
    isDead() {
        if (this.endbossIsDead) {
            let i = this.currentImage % this.IMAGES_DEAD.length;
            this.playAnimation(this.IMAGES_DEAD);

            if (i === this.IMAGES_DEAD.length - 1) {
                clearInterval(this.deadAnimationInterval);
            }
        }
    }

    
    /**
     * stop endboss animations
     */
    stopAnimation() {
        clearInterval(this.animationInterval); 
        clearInterval(this.hurtAnimationInterval); 
        clearInterval(this.moveAnimationInterval); 
    }
}