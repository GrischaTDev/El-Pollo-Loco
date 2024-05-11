class Cloud extends MovableObject {

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 50;
        this.width = 600;
        this.height = 300;
        this.speed = 0.15;
        this.animate();
    }


    animate() {
        setInterval(() => this.moveLeft(), 1000 / 60);
    }
}