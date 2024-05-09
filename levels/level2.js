function initLevel2() {

    currentLevel = new Level(
        [
            new Endboss(),
            new SmallChicken(700),
            new Chicken(1250),
            new SmallChicken(1700),
            new Chicken(2120),
            new Chicken(2700)
        ],
        [
            new Cloud('img/5_background/layers/4_clouds/2.png', 200),
            new Cloud('img/5_background/layers/4_clouds/1.png', 900),
            new Cloud('img/5_background/layers/4_clouds/2.png', 1800),
            new Cloud('img/5_background/layers/4_clouds/2.png', 3000)
        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5)
        ],
        [
            new Coin(400, 200, 50, 50),
            new Coin(500, 350, 50, 50),
            new Coin(700, 300, 50, 50),
            new Coin(950, 200, 50, 50),
            new Coin(1120, 150, 50, 50),
            new Coin(1190, 300, 50, 50),
            new Coin(1600, 280, 50, 50),
            new Coin(1700, 220, 50, 50),
            new Coin(1800, 160, 50, 50),
            new Coin(2900, 180, 200, 200)
        ],
        [
            new Bottle(250, 350, 80, 80, 'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle(800, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle(1090, 350, 80, 80, 'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle(1600, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle(1800, 350, 80, 80, 'img/6_salsa_bottle/2_salsa_bottle_on_ground.png')
        ]
    );
}