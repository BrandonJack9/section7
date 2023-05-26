//Title and win by Joseph Verespey
class title extends Phaser.Scene{
    constructor()
    {
        super('title');
    }
    preload()
    {
        this.load.path = './assets/';
    }
    create()
    {
        
        
            let bigTitle=this.add.text(0, this.game.config.height * 0.4,"SECTION GAME!!",{fontFamily: 'Verdana', fontSize: '48px'});
            let text=this.add.text(1920/2-250,540, "Click to start",{fontFamily: 'Verdana', fontSize: '24px'}).setInteractive();
            bigTitle.x=-bigTitle.width;

            this.tweens.add({
                targets:bigTitle,
                x:this.game.config.width/2,
                duration:1000,
                ease:'Power1',
                delay:500
            });
                text.on('pointerover', ()=> {
                    
                    this.tweens.add({
                        targets: text,
                        scaleX: 0.8,
                        scaleY: 0.6,
                        duration: 100,
                        yoyo: true,
                        ease: 'Sine.easeInOut'
                    });
                });
                
                
                text.on('pointerout', function() {
                    
                    this.tweens.add({
                        targets: text,
                        scaleX: 1,
                        scaleY: 1,
                        duration: 100,
                        yoyo: true,
                        ease: 'Sine.easeInOut'
                    });
                });
            
            this.input.on('pointerdown', () => {
                    
                    this.tweens.add({
                        targets: text,
                        scaleX: 0.8,
                        scaleY: 0.6,
                        duration: 50,
                        yoyo: true,
                        ease: 'Sine.easeInOut'
                    });
                
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('gameplay'));
            });
        
    }
}



class gameplay extends Phaser.Scene{//Chase Houske
    constructor(){
        super('gameplay');
    }
    preload(){
        this.load.path = './assets/';
        //this.load.image('floor', 'Floor.png');
        this.load.image('ground', 'ground.png');
        this.load.image('frame00', 'frame0000.png');
        this.load.image('frame01', 'frame0001.png');
        this.load.image('frame02', 'frame0002.png');
        this.load.image('frame03', 'frame0003.png');
        this.load.image('frame04', 'frame0004.png');
        this.load.image('frame05', 'frame0005.png');
        this.load.image('frame06', 'frame0006.png');
        this.load.image('frame07', 'frame0007.png');
        this.load.image('frame08', 'frame0008.png');
        this.load.image('frame09', 'frame0009.png');
        this.load.image('frame10', 'frame0010.png');
        this.load.image('frame11', 'frame0011.png');
        this.load.image('frame12', 'frame0012.png');
        this.load.image('frame13', 'frame0013.png');
        this.load.image('frame14', 'frame0014.png');
        this.load.image('frame15', 'frame0015.png');
        this.load.image('frame16', 'frame0016.png');
        this.load.image('frame17', 'frame0017.png');
        this.load.image('frame18', 'frame0018.png');
        this.load.image('frame19', 'frame0019.png');
        this.load.image('frame20', 'frame0020.png');
        this.load.image('frame21', 'frame0021.png');
        this.load.image('frame22', 'frame0022.png');
        this.load.image('frame23', 'frame0023.png');
        this.load.image('frame24', 'frame0024.png');
        this.load.image('frame25', 'frame0025.png');
        this.load.image('frame26', 'frame0026.png');
        this.load.image('frame27', 'frame0027.png');
        this.load.image('frame28', 'frame0028.png');
        this.load.image('frame29', 'frame0029.png');
        this.load.image('frame30', 'frame0030.png');
        this.load.image('frame31', 'frame0031.png');
        this.load.image('frame32', 'frame0032.png');
        this.load.image('frame33', 'frame0033.png');
        this.load.image('frame34', 'frame0034.png');
        this.load.image('frame35', 'frame0035.png');
        this.load.image('frame36', 'frame0036.png');
        this.load.image('frame37', 'frame0037.png');
        this.load.image('frame38', 'frame0038.png');
        this.load.image('frame39', 'frame0039.png');


    }
    create(){

        this.anims.create({
            key: 'rolling',
            frames: [
                { key: 'frame00' },
                { key: 'frame01' },                
                { key: 'frame02' },
                { key: 'frame03' },
                { key: 'frame04' },
                { key: 'frame05' },
                { key: 'frame06' },
                { key: 'frame07' },
                { key: 'frame08' },
                { key: 'frame09' },
                { key: 'frame10' },
                { key: 'frame11' },
                { key: 'frame12' },
                { key: 'frame13' },
                { key: 'frame14' },                
                { key: 'frame15' },
                { key: 'frame16' },
                { key: 'frame17' },
                { key: 'frame18' },
                { key: 'frame19' },
                { key: 'frame20' },
                { key: 'frame21' },
                { key: 'frame22' },
                { key: 'frame23' },
                { key: 'frame24' },
                { key: 'frame25' },
                { key: 'frame26' },
                { key: 'frame27' },                
                { key: 'frame28' },
                { key: 'frame29' },
                { key: 'frame30' },
                { key: 'frame31' },
                { key: 'frame32' },
                { key: 'frame33' },
                { key: 'frame34' },
                { key: 'frame35' },
                { key: 'frame36' },
                { key: 'frame37' },
                { key: 'frame38' },
                { key: 'frame39' },
            ],
            frameRate: 13,
            repeat: -1
        });


        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(500, 900, 'ground');
        this.player = this.physics.add.sprite(100, 560, 'frame0').setScale(0.3);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.slug2 = this.physics.add.sprite(700, 560, 'frame0').setScale(0.3);
        this.slug3 = this.physics.add.sprite(1100, 560, 'fram0').setScale(0.3);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.slug2, this.platforms);
        this.physics.add.collider(this.slug3, this.platforms);
        this.player.setVelocityX(100);
        this.slug2.setVelocityX(-100);
        this.slug3.setVelocityX(-100);
        this.slug2.setSize(230, 402);
        this.slug3.setSize(230, 402);
        this.physics.add.overlap(this.player, this.slug2, this.die, null, this);
        this.physics.add.overlap(this.player, this.slug3, this.die, null, this);
        this.xspeed = 100;
    }
    update(){
        const { left, right, up } = this.cursors;
        if(this.player.body.touching.down && up.isDown){
            this.player.setVelocityY(-430);
        }
        
    }
    die(player, slug){
        if(this.player.body.touching.down){
            this.scene.start(title);
        }
    }
}

class win extends Phaser.Scene{
    constructor()
    {
            super('win'); 
    }
    preload()
    {

    }
    create()
    {
        this.add.text(1920/2-250,540, "YOU DID IT!").setFontSize(60).setColor('#FFFFFF');
        this.cameras.main.setBackgroundColor(0x000000);
        this.add.text(1920/2-250,5, "Click to Play again");
        this.input.on('pointerdown', () => {
        
        this.cameras.main.fade(1000, 0,0,0);
        this.time.delayedCall(1000, () => this.scene.start('gameplay'))});
        
    }
}
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    backgroundColor: 0x87CEEB,
    //scene: stage1,
    scene: [gameplay, title, win/*, flow*/],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: true
        }
    },
}
let game = new Phaser.Game(config);