var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var listrado;

var bolha;

function preload() {
    this.load.image('oceano', 'assets/bg_azul-claro.png');

    this.load.image('peixe verde', 'assets/peixes/peixe_verde.png');

    this.load.image('baiacu', 'assets/peixes/baiacu_lado.png');

    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');

    this.load.image('concha', 'assets/concha.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('peixe', 'assets/peixes/peixe_listra.png');

    this.load.image('areia', 'assets/areia.png');

    this.load.image('alga', 'assets/alga.png');

    this.load.image('bolha', 'assets/bolhas.png');

    this.load.image('estrela', 'assets/estrela.png');


}

function create() {
    this.add.image(400, 300, 'oceano');
    this.add.image(400, 400, 'areia');
    this.add.image(400, 300, 'baiacu').setOrigin(-0.8, 1.5).setScale(0.7);
    this.add.image(400, 300, 'tartaruga').setOrigin(1.7).setScale(0.8);
    this.add.image(400, 300, 'peixe verde').setOrigin(-0.4).setScale(0.6);
    this.add.image(400, 300, 'concha').setOrigin(-2, -3.4);
    this.add.image(400, 300, 'estrela').setScale(0.15).setOrigin(1.4, -0.6);
    this.add.image(400, 300, 'alga').setOrigin(-0.4, 0);
    this.add.image(400, 300, 'alga').setOrigin(1.4, 0);
    this.add.image(400, 525, 'logo').setScale(0.5);

   listrado = this.add.image(400, 300, 'peixe');
   bolha = this.add.image(400, 300, 'bolha')

   bolha.setOrigin(1.5, 1.5);
   bolha.setScale(0.08);
   
   listrado.setOrigin(0.5, 0.5);
   listrado.setFlip(true, false);


}

function update() {
    listrado.x = this.input.x
    listrado.y = this.input.y
    bolha.x = this.input.x
    bolha.y = this.input.y
}

