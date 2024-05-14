class DrawableObject {
    x;
    y;
    width;
    height;
    img;
    imageCache = {};
    currentImage = 0;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }


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
     * draws the object in the canvas
     * 
     * @param {canvas} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}