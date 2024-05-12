class World {
    level = currentLevel;
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

    /**
     * Checks current collisions and throwable objects via intavall
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }


    /**
     * Checks whether bottles can be thrown and creates a thrown bottle
     * 
     * @returns if neither of these is the case, return
     */
    checkThrowObjects() {
        if (this.canThrowBottle()) {
            this.throwBottle();
        } else 
            return;
    }


    /**
     * Checks whether a bottle is present before throwing
     */
    canThrowBottle() {
        return this.keyboard.d && !this.bottles == 0;
    }

    
    /**
     * Creates a thrown bottle
     */
    throwBottle() {
        let bottle = new ThrowableObject(this.charakter.x + 100, this.charakter.y + 100);
        this.throwableObject.push(bottle);
        this.bottles--;
        this.statusBarBottle.setPercentage(this.bottles);
    }


    /**
     * Checks all collisions
     */
    checkCollisions() {
        this.checkCollisionEnemys();
        this.checkCollisionCoins();
        this.checkCollisionBottles();
        this.checkCollisionEndboss();
    }


    /**
     * Checks collisions with the boss
     */
    checkCollisionEndboss() {
        this.throwableObject.forEach((flasche) => {
            if (this.endboss.isColliding(flasche))
                this.bossHit();
        });
    }


    /**
     * Performs damage against the final boss
     */
    bossHit() {
        if (this.endboss.currentHit) return;
        this.endboss.chickenDeadSound.play();
        this.endboss.hit(20);
        this.endboss.isEndbossHurt = true;
        this.endboss.currentHit = true;
        this.endboss.energy;
        this.statusBarEndboss.setPercentage(this.endboss.energy);
        setTimeout(() => this.endboss.currentHit = false, 1000);
        this.isEndbossDead();
    }


    /**
     * Checks if the end boss is dead
     */
    isEndbossDead() {
        if (this.endboss.energy <= 0) {
            this.endboss.speed = 0;
            this.endboss.stopAnimation();
            this.endboss.endbossIsDead = true;
            setTimeout(() => {
                this.endboss.x = -3000;
            }, 2000);
        }
    }


    /**
     * Checks collisions with the enemys
     */
    checkCollisionEnemys() {
        this.level.enemies.forEach((enemy) => {
            if (this.charakter.isColliding(enemy)) {
                if (this.checkCollisionForHit(enemy)) {
                    this.charakterHit();
                }
            }

            if (this.checkCollisionFromTop(enemy)) {
                if (enemy.name == 'Chicken') {
                    enemy.loadImage('img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
                } else {
                    enemy.loadImage('img/3_enemies_chicken/chicken_small/2_dead/dead.png');
                }
                this.chickenIsDead(enemy);
                setTimeout(() => enemy.x = -3000, 2000);
            }
        });
    }


    /**
     * Checks collisions with the enemy
     */
    checkCollisionForHit(enemy) {
        return (this.charakter.speedY == 0 && !enemy.chickenIsDead && !enemy.endbossIsDead) || (this.charakter.speedY > 0 && enemy.name == 'Small Chicken');
    }


    /**
     * Checks collisions from top
     * 
     * @param {object} enemy 
     */
    checkCollisionFromTop(enemy) {
        return this.charakter.isColliding(enemy) && this.charakter.speedY < 0 && enemy.speedY == 0;
    }


    /**
     * Checks whether the chicken is dead 
     * 
     * @param {object} enemy 
     */
    chickenIsDead(enemy) {
        enemy.speed = 0;
        enemy.stopAnimation();
        enemy.chickenIsDead = true;
    }
 

    /**
     * performs damage against the character
     * 
     * @returns checks whether the character is currently receiving damage
     */
    charakterHit() {
        if (this.charakter.currentHit) return;
        this.charakter.hit(10);
        this.charakter.hurt_sound.play();
        this.charakter.hurt_sound.volume = 0.5;
        this.charakter.currentHit = true;
        this.statusBar.setPercentage(this.charakter.energy);
        if (this.charakter.energy == 0) {
            loadGameOverScreen()
        }

        setTimeout(() => {
            this.charakter.currentHit = false;
        }, 1000)
    }


    /**
     * Checks collisions with coin
     */
    checkCollisionCoins() {
        this.level.coins.forEach((coins) => {
            if (this.charakter.isColliding(coins)) {
                this.collectCoin();
                this.statusBarCoin.setPercentage(this.coins);
                coins.x = -3000;
                coins.collectSound.play()
                coins.collectSound.volume = 0.5;
            }
            if (this.coins == 10 &&  this.endboss.energy == 0) {
                loadWinScreen();
            }
        });
    }

    
    /**
     * Checks collisions with coin
     */
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


    /**
     * Collect coin
     */
    collectCoin() {
        this.coins += 1;
    }

    
    /**
     * Collect bottle
     */
    collectBottle() {
        this.bottles += 1;
    }


    /**
     * Draws objects in the canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); // Forwards
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0); // Back
        this.ctx.translate(this.camera_x, 0); // Forwards
        this.drawCharakterAndObjects();
        this.ctx.translate(-this.camera_x, 0); // Back
        this.drawStatusBar();
        let self = this;
        requestAnimationFrame(() => self.draw());
    }


    /**
     * Draws charakter and objects in the canvas
     */
    drawCharakterAndObjects() {
        this.addToMap(this.charakter);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
    }


    /**
     * Draws stauts bars on canvas
     */
    drawStatusBar() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        if (this.endboss.isEndbossHurt) {
            this.addToMap(this.statusBarEndboss);
        } 
    }


    /**
     * Draw all objects
     * 
     * @param {*} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }


    /**
     * Add object to canvas
     * 
     * @param {*} mo 
     */
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


    /**
     * Changes direction
     * 
     * @param {*} mo 
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * Changes direction back
     * 
     * @param {*} mo 
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}