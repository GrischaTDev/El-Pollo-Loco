class Coin extends MovableObject {

    IMAGES_COIN = [
        'img/8_coin/coin1.png',
        'img/8_coin/coin2.png'
    ];
    
    constructor(x, y, height, width) {
        super().loadImage('img/8_coin/coin1.png');
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    animate() {
        // IDLE animation
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_COIN.length;
            this.playAnimation(this.IMAGES_COIN);
        }, 650);
    }
}