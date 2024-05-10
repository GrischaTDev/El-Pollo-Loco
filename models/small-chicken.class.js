class SmallChicken extends MovableObject {
    name = 'Small Chicken';
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    animationInterval = null;
    chickenDeadSound = new Audio('audio/chicken-dead.mp3');

    constructor(x) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = x;
        this.y = 340;
        this.width = 70;
        this.height = 90;
        this.speed = 0.5 + Math.random() * 1;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.applyGravity(this.y);
        this.chickenIsDead = false;
    }


    animate() {
        setInterval(() => this.moveLeft(), 1000 / 60);
        this.walkingInterval = setInterval(() => this.moveSmallChicken(), 100);
        this.jumpingInterval = setInterval(() => this.jump(), 2000);
    }


    moveSmallChicken() {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        this.playAnimation(this.IMAGES_WALKING);
    }


    stopAnimation() {
        this.chickenDeadSound.play();
        clearInterval(this.walkingInterval); // Stoppe das Intervall
        clearInterval(this.jumpingInterval); // Stoppe das Intervall
    }
}