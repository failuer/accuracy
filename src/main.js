//tutorial / docs http://enchantjs.com/tutorial/lets-start-with-enchant-js/

var SPRITE = "../assets/img/sprite.png";
//var IMG2 = "preload2.gif";

function init(){
	enchant();
    var game = new Game(512, 512); 
    game.fps = 20;
    game.scale = 2;


    //preload assets
    game.preload(SPRITE);
    //game.preload(IMG1, IMG2);
    

    //game start code
	game.onload = function () {
		//call create main menu etc
		initMainMenu(game);
	};

    game.start();
}

function initMainMenu(game) {
	var scene = new Scene();
	scene.backgroundColor = "#ccc";
	
	var label = new Label('Hello World');
	label.font = '24px bold';

	var sprite = new Sprite(32, 32);
	sprite.y = 200;
	sprite.x = 200;
	sprite.image = game.assets[SPRITE];
	sprite.d = 0;

	sprite.addEventListener('touchstart', function() {
		sprite.d = 0;
	});
	sprite.addEventListener('touchend', function() {
		sprite.d = 1;
	});

	game.addEventListener('enterframe', function() {
		
		if(sprite.d == 0) {
			sprite.x += 1;
			if(sprite.scaleX < 3) {
				sprite.scaleX *= 1.02;
				sprite.scaleY *= 1.02;	
			} else {
				sprite.d = 1;
			}
		} else {
			sprite.x -= 1;
			if(sprite.scaleX > 1) {
				sprite.scaleX *= 0.98;
				sprite.scaleY *= 0.98;	
			} else {
				sprite.d = 0;
			}
		}

	});

	scene.addChild(sprite);
	scene.addChild(label);

	game.pushScene(scene);
}