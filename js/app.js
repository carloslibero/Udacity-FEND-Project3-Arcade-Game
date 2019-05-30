// Tile Board Class that will be used for positioning and collision with borders/water
// Lane will be set based on a 6 x 5 grid.
// [0,0] will be set to the top left corner (water) and [4, 5] bottom right corner (grass)
class TileBoard {
    constructor (rows, columns) {
        this.rows = rows;
        this.columns;
    }

    lanePosition (tileLane) {
        switch (tileLane) {
            case 0:
                return -15;
                break;
            case 1:
                return 60;
                break;
            case 2:
                return 145;
                break;
            case 3:
                return 230;
                break;
            case 4:
                return 310;
                break;
            case 5:
                return 400;
                break;
            default:
                return -100;
                break;
        }
    }

    tilePosition (tileSetx, tileSety) {

    }

};

// Instantiate the TileBoard for all objects to use it
const tileBoard = new TileBoard(6,5);

// Enemies our player must avoid
class Enemy {    
    // Constructor class with ES6 approach
    constructor (type, lane) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // Enemy type and lane (from top to down, 1 to 3)
        this.type = type;
        this.lane = lane;

        // Enemy position at screen
        this.x = -120;
        this.y = tileBoard.lanePosition(this.lane);

        // Enemy speed
        this.speed = 50;
    
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

        // Update player x position based on its speed times dt.
        this.x = this.x + (this.speed * dt);
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor () {
        // Positioned at starting
        this.x = 20;
        this.y = 20;

        // Player stamina
        this.stamina = 100;

        // Player sprite
        this.sprite = "images/char-boy.png"
    }

    // update method for player
    update (dt) {

    }

    // Render method for player
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Player handle input method
    handleInput(keyPressed) {
        switch (keyPressed) {
            case 'left':
                console.log("left");
                break;
            case 'up':
                console.log("up");
                break;
            case 'right':
                console.log("right");
                break;
            case 'down':
                console.log("down");
                break;
            default:
                break;
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [enemy1 = new Enemy("bug", 1),
                  enemy2 = new Enemy("bug", 2),
                  enemy3 = new Enemy("bug", 3)];
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    // Allowed arrows and traditional ASDW keys to work with game
    let allowedKeys = {
        37: 'left',
        65: 'left',
        38: 'up',
        87: 'up',
        39: 'right',
        68: 'right',
        40: 'down',
        83: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
