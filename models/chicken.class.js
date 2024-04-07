class Chicken extends MovableObject {
    width = 70;
    height = 90;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 250 + Math.random() * 600;
        this.y = 340;
    }

}