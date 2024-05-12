class Coin extends MovableObject {
    collectSound = new Audio('audio/collect.mp3');

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


    /**
     * Start all animations with an interval
     */
    animate() {
        setInterval(() => this.coinIdle(), 650);
    }


    /**
     * Coin idle animation
     */
    coinIdle() {
        let i = this.currentImage % this.IMAGES_COIN.length;
        this.playAnimation(this.IMAGES_COIN);
    }
}