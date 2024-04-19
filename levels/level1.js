const level1 = new Level(
[
    new Chicken(700),
    new Chicken(1100),
    new Chicken(1300),
    new Chicken(1720),
    new Chicken(1780),
    new Endboss()
],  
[
    new Cloud()
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

    new BackgroundObject('img/5_background/layers/air.png', 719*2),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),
    new BackgroundObject('img/5_background/layers/air.png', 719*3),
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),

    new BackgroundObject('img/5_background/layers/air.png', 719*4),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*4),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*4),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*4),
    new BackgroundObject('img/5_background/layers/air.png', 719*5),
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*5),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*5),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*5)
],
[
    new Coin(400, 300, 50, 50),
    new Coin(500, 300, 50, 50),
    new Coin(600, 300, 50, 50),
    new Coin(950, 200, 50, 50),
    new Coin(1020, 150, 50, 50),
    new Coin(1090, 200, 50, 50),
    new Coin(1600, 160, 50, 50),
    new Coin(1700, 220, 50, 50),
    new Coin(1800, 280, 50, 50),
    new Coin(2900, 180, 200, 200)
]  
);