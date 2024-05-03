class World {
    level = level1;
    charakter = new Charakter();
    endboss = this.level.enemies[0];
    throwableObject = [];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    statusBarEndboss = new StatusBarEndboss();
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

            console.log('Tabasko', this.bottles);
            console.log('Tabasko Array', this.throwableObject.length);
        } else {
            return;
        }
    }


    checkCollisions() {
        this.checkCollisionEnemys();
        this.checkCollisionCoins();
        this.checkCollisionBottles();
        this.checkCollisionEndboss();
    }


    checkCollisionEndboss() {
        this.endboss = this.level.enemies.find(enemy => enemy.name === "Endboss");

        this.throwableObject.forEach((flasche) => {
            if (this.endboss.isColliding(flasche)) {
                this.bossHit();
            }
        });
    }


    bossHit() {
        if (this.endboss.currentHit) return;
        this.endboss.hit(20);
        this.endboss.isEndbossHurt = true;
        this.endboss.currentHit = true;
        this.endboss.energy;
        this.statusBarEndboss.setPercentage(this.endboss.energy);
        console.log('Boss getroffen', this.endboss.energy);

        setTimeout(() => {
            this.endboss.currentHit = false;
        }, 1000)
    }


    checkCollisionEnemys() {
        this.level.enemies.forEach((enemy) => {
            if (this.charakter.isColliding(enemy) && this.charakter.speedY == 0 && !enemy.chickenIsDead) {
                this.charakterHit();
            }
            
            if (this.charakter.isColliding(enemy) && this.charakter.speedY < 0) {
                console.log('Erwischt!');
                enemy.loadImage('img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
                enemy.speed = 0;
                enemy.stopAnimation();
                enemy.chickenIsDead = true;
                setTimeout(() => {
                    enemy.x = -3000;
                }, 2000);
            }
        });
    }


    charakterHit() {
        if (this.charakter.currentHit) return;
        this.charakter.hit(5);
        this.charakter.hurt_sound.play();
        this.charakter.hurt_sound.volume = 0.5;
        this.charakter.currentHit = true;
        this.statusBar.setPercentage(this.charakter.energy);
        console.log('Charakter, energy', this.charakter.energy);

        setTimeout(() => {
            this.charakter.currentHit = false;
        }, 1000)
    }


    checkCollisionCoins() {
        this.level.coins.forEach((coins) => {
            if (this.charakter.isColliding(coins)) {
                this.collectCoin();
                this.statusBarCoin.setPercentage(this.coins);
                console.log('Charakter Coins', this.coins);
                console.log('Münze', this.coins);
                coins.x = -3000;
                coins.collectSound.play()
                coins.collectSound.volume = 0.5;
            }
        });
    }

    
    checkCollisionBottles() {
        this.level.bottles.forEach((currentBottle) => {
            if (this.charakter.isColliding(currentBottle)) {
                this.collectBottle();
                this.statusBarBottle.setPercentage(this.bottles);
                currentBottle.x = -3000;
                currentBottle.collectSound.play()
                currentBottle.collectSound.volume = 0.5;
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
        if (this.endboss.isEndbossHurt) {
            this.addToMap(this.statusBarEndboss);
        } 
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