class StatusBarCoin extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ]

    percentage = 0;

    constructor() {
        super();
        this.x = 20;
        this.y = 40;
        this.width = 180;
        this.height = 50;
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }

    
    /**
     * Transfers the current percentage value and updates the coin status bar
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Checks the value of the status bar
     */
    resolveImageIndex() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage < 3) {
            return 1;
        } else if (this.percentage < 6) {
            return 2;
        } else if (this.percentage < 9) {
            return 3;
        } else if (this.percentage < 10) {
            return 4;
        } else {
            return 5;
        }
    }
}