class MovableObject extends DrawableObject {
    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    currentHit = false;


    /**
     * Checks the gravity of an object
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else {
                this.speedY = 0;
            }
        }, 1000 / 25);
    }


    /**
     * Checks whether the object is above the ground
     * 
     * @returns - Returns whether it is a throwable object or the character
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            if (this instanceof Charakter) {
                return this.y < 180;
            } else {
                return this.y < 340;
            }
        }
    }


    /**
     * Start move right function
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * Start move left function
     */
    moveLeft() {
        this.x -= this.speed;
    }


    /**
     * executes an animation and passes the images provided for it within an array
     * 
     * @param {img} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * Start jump animation
     */
    jump() {
        this.speedY = 25;
    }


    /**
     * Checks whether the object collides
     */
    isColliding(mo) {
        return this.x + this.width + this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y  &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    /**
     * transfers the damage inflicted
     * 
     * @param {*} damage - current damage value
     */
    hit(damage) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * checks when damage was last inflicted
     * 
     * @returns returns the time interval
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }


    /**
     * passes the value that the energy is 0 and the object is dead
     * 
     * @returns sets the value of Energy to 0
     */
    isDead() {
        return this.energy == 0;
    }
}