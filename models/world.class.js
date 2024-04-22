class World {
    level = level1;
    charakter = new Charakter();
    throwableObject = [];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    coins = 0;
    bottles = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }


    setWorld() {
        this.charakter.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }


    checkThrowObjects() {
        if (this.keyboard.d && !this.bottles == 0) {
            let bottle = new ThrowableObject(this.charakter.x + 100, this.charakter.y + 100);
            this.throwableObject.push(bottle);
            this.bottles--;
            this.statusBarBottle.setPercentage(this.bottles);
        } else {
            return;
        }
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.charakter.isColliding(enemy)) {
                this.charakter.hit();
                this.statusBar.setPercentage(this.charakter.energy);
                console.log('Charakter, energy', this.charakter.energy);
            }
        });

        this.level.coins.forEach((coins) => {
            if (this.charakter.isColliding(coins)) {
                this.collectCoin();
                this.statusBarCoin.setPercentage(this.coins);
                console.log('Charakter Coins', this.coins);
                console.log('Münze', this.coins);
                coins.x = -3000;
                coins.collectSound.play()
            }
        });

        this.level.bottles.forEach((currentBottle) => {
            if (this.charakter.isColliding(currentBottle)) {
                this.collectBottle();
                this.statusBarBottle.setPercentage(this.bottles);
                console.log('Charakter Flaschen', this.bottles);
                console.log('Tabasko', this.bottles);
                currentBottle.x = -3000;
                currentBottle.collectSound.play()
            }
        });
    }


    collectCoin() {
        this.coins += 1;
    }

    
    collectBottle() {
        this.bottles += 1;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // Forwards
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0); // Back
        // ------- Space for fixed objects ---------
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0); // Forwards

        this.addToMap(this.charakter);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);

        this.ctx.translate(-this.camera_x, 0); // Back

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrameBorder(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}