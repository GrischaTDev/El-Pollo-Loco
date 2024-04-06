class MovableObject {
    x = 80;
    y = 230;
    img;
    width = 130;
    height = 250;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    } 

    moveRight() {
        console.log('Moving Right');
    }

    moveLeft() {
        
    }
}