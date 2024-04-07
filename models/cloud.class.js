class Cloud extends MovableObject {
    width = 600;
    height = 300;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = 0 + Math.random() * 500;
        this.y = 50;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 5;
        }, 1000 / 60);
    }
}