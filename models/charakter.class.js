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

    IMAGES_SLEEP = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    offset = {
        top: 80,
        left: 20,
        right: -30,
        bottom: 20
    }

    timeSinceLastMovement = 0;
    sleep_sound = new Audio('audio/snoring.m4a');
    walking_sound = new Audio('audio/running.mp3');
    hurt_sound = new Audio('audio/pepe-hurt.mp3');

    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.x = 80;
        this.y = 180;
        this.width = 130;
        this.height = 250;
        this.speed = 5;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
        this.applyGravity(this.y);
    }


    /**
     * Start all animations with an interval
     */
    animate() {
        setInterval(() => this.charakterIdle(), 300);
        setInterval(() => this.charakterMove(), 1000 / 60);
        setInterval(() => this.charakterPlay(), 80);
    }


    /**
     * Charakter idle animation
     */
    charakterIdle() {
        if (this.canIdle()) {
            this.charIdle();
            if (this.canSleep())
                this.charSleep();
        } else {
            this.sleep_sound.pause();
            this.timeSinceLastMovement = 0;
        }
    }


    /**
     * Returns the query whether the character starts the idle animation
     * 
     * @returns - See if the character moves to the left or right
     */
    canIdle() {
        return !this.world.keyboard.right && !this.world.keyboard.left;
    }


    /**
     * Start the idle animation character
     */
    charIdle() {
        this.timeSinceLastMovement += 300;
        let i = this.currentImage % this.IMAGES_IDLE.length;
        this.playAnimation(this.IMAGES_IDLE);
    }


    /**
     * Returns the query whether the character starts the sleep animation
     * 
     * @returns - Checks whether the character is in idle mode for longer than 15 seconds
     */
    canSleep() {
        return this.timeSinceLastMovement >= 15000;
    }


    /**
     * Start the sleep animation character
     */
    charSleep() {
        this.playAnimation(this.IMAGES_SLEEP);
        this.sleep_sound.play();
        this.sleep_sound.volume = 0.2;
        this.sleep_sound.playbackRate = 0.7;
    }


    /**
     * Charakter move animation
     */
    charakterMove() {
        this.walking_sound.pause();
        if (this.canMoveRight())
            this.moveRight();
        if (this.canMoveLeft())
            this.moveLeft(); 
        if (this.canJump()) {
            this.currentImage = 0;
            this.jump();
        }

        this.world.camera_x = -this.x + 100;
    }


    /**
     * Returns the query whether the character starts the move right animation
     * 
     * @returns - See if the character moves to the right
     */
    canMoveRight() {
        return this.world.keyboard.right && this.x < this.world.level.level_end_x;
    }


    /**
     * Start move right animation
     */
    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
        this.walking_sound.volume = 0.5;
    }


    /**
     * Returns the query whether the character starts the move left animation
     * 
     * @returns - See if the character moves to the left
     */
    canMoveLeft() {
        return this.world.keyboard.left && this.x > 0;
    }


    /**
     * Start move left animation
     */
    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
        this.walking_sound.volume = 0.5;
    }


    /**
     * Returns the query whether the character starts the jump animation
     * 
     * @returns - check whether the space button has been printed and the character is on the floor
     */
    canJump() {
        return this.world.keyboard.space && !this.isAboveGround();
    }


    /**
     * Starts the various character animations
     */
    charakterPlay() {
        if (this.isAboveGround()) {
            if (this.speedY > 0 && this.currentImage > 3)
                this.currentImage = 3;
            if (this.speedY < 0 && this.currentImage > 4)
                this.currentImage = 7;
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else {
            if (this.world.keyboard.right || this.world.keyboard.left)
                this.playAnimation(this.IMAGES_WALKING);
        }
    }
}