//keeps track of which function to run aka which level (splash screen, game, win screen, lose screen...), starts at splashs
let level = 0; 

//counters score, lives & timer (if you want the test the game without losing, set lives to 20)
let score = 0; //what is your score (number of fuel)
let lives = 15; //how many lives do you get and earn in the level
let timer = 120; //how much time do you get to play

//gravity (everything so we can jump)
let jump = false; //are we jumping
let direction = 1; //the force of gravity in y direction
let velocity = 2; //the speed of the player
let jumpPower = 15; //the energy of strength of player
let fallingSpeed = 5; //equal to velocity
let minHeight = 375; //height of ground
let maxHeight = 50; //height of sky
let jumpCounter = 0; //keeps track of how much we are jumping

//multimedia
let font; //fonts used in screens
let fuelSound; //sound used when you pick up fuel
let lifeSound; //sound used when you lose a life
let winSound; //sound used when you win
let loseSound; //sound used when you lose
let bgi; //background image used in game
let winbgi; //background image used in win screen
let losebgi; //background image used in lose screen