class Level {
    enemies;
    clouds;
    coins;
    backgroundObjects;
    level_end_x = 3000;

    constructor(enemies, clouds, backgroundObjects, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
    }
}