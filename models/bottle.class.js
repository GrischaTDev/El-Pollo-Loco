class Bottle extends DrawableObject {
    collectSound = new Audio('audio/collect.mp3');
    
    constructor(x, y, height, width, img) {
        super().loadImage(img);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}