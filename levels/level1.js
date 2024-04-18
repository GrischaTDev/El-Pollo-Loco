const level1 = new Level(
[
    new Chicken(),
    new Chicken(),
    new Chicken(),
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
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3)
],
[
    new Coin(400, 300, 140, 140),
    new Coin(470, 300, 140, 140),
    new Coin(540, 300, 140, 140),
    new Coin(950, 180, 140, 140),
    new Coin(1020, 130, 140, 140),
    new Coin(1090, 180, 140, 140),
    new Coin(1600, 200, 140, 140),
    new Coin(1600, 150, 140, 140),
    new Coin(1600, 100, 140, 140),
    new Coin(2700, 0, 600, 600)
]  
);