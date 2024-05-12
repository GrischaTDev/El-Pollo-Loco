class DrawableObject {
    x;
    y;
    width;
    height;
    img;
    imageCache = {};
    currentImage = 0;

    
    /**
     * Loads the transferred images and saves them in the img variable
     * 
     * @param {string} path - current image path
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * Loads the transferred image array and saves them in the imageCache variable
     * 
     * @param {array} arr - Current image array
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * Shows a frame around the following objects to recognise collisions
     * 
     * @param {canvas} ctx 
     */
    drawFrameBorder(ctx) {
        if (this instanceof Charakter || this instanceof Chicken || this instanceof Coin || this instanceof Bottle || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    /**
     * draws the object in the canvas
     * 
     * @param {canvas} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}