class MovableObject {
    x;
    y;
    img;
    width;
    height;
    imageCache = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    
    loadImage(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });
    }

    moveRight() {
        console.log('Moving Right');
    }

    moveLeft() {
        this.x -= 0.2;
    }
}