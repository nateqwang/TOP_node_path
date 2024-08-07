const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
    }
};

// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]

const variable = 'property';

myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable]; // this is equivalent to myObject['property'] and returns 'Value!'

//OBJECTS AS DESIGN PATTERN

// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

console.log(playerOneName);
console.log(playerTwoName);

// example two
const playerOne = {
  name: "tim",
  marker: "X"
};

const playerTwo = {
  name: "jenn",
  marker: "O"
};

function printName(player) {
    console.log(player.name);
};

function gameOver(winningPlayer){
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!");
};

// OBJECT CONSTRUCTORS

function PlayerBasic(name, marker) {
    this.name = name;
    this.marker = marker;
};

const playerSteve = new PlayerBasic('steve', 'X');
console.log(playerSteve.name); // 'steve'

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
};

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true

Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
 
Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
 
// INHERITANCE
  
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player2(name, marker) {
  this.name = name;
  this.marker =marker;
}

Player2.prototype.getMarker = function() {
  cons2ole.log(`My marker is '${this.marker}'`);
};2

Object.getPrototypeOf(Player2.prototype); // returns Object.prototype
2
// Now make `Player` objects2 inherit from `Person`
Object.setPrototypeOf(Player2.prototype, Person.prototype);
Object.getPrototypeOf(Player2.prototype); // returns Person.prototype
2
const player12 = new Player2('steve', 'X');
const player22= new Player2('also steve', 'O');

player12.sayName(); // Hello, I'm steve!
player22.sayName(); // Hello, I'm also steve!

player12.getMarker(); // My marker is 'X'
player22.getMarker(); // My marker is 'O'
  

  