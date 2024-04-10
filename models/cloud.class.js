class Cloud extends MovableObject {

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = 0 + Math.random() * 500;
        this.y = 50;
        this.width = 600;
        this.height = 300;
        this.speed = 0.15
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}