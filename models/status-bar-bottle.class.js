class StatusBarBottle extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png', 
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png', 
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png', 
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png', 
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png', 
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ]

    percentage = 0;

    constructor() {
        super();
        this.x = 20;
        this.y = 80;
        this.width = 180;
        this.height = 50;
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }

    /**
     * Transfers the current percentage value and updates the bottle status bar
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
        } else if (this.percentage < 2) {
            return 1;
        } else if (this.percentage < 3) {
            return 2;
        } else if (this.percentage < 4) {
            return 3;
        } else if (this.percentage < 5) {
            return 4;
        } else {
            return 5;
        }
    }
}