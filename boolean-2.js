//1
var isDog =(true)
        ? 'pat pat'
        : 'find me a dog to pat!';

console.log(isDog);
//2

var speedLimit = 100;
var speedCheck = (speedLimit < 50)
        ? "you're driving below the speed limit, Oma"
        : "you're going too fast";
console.log(speedCheck);
//3
var age = 22
var ageCheck = (age < 16)
        ? "serve butter beer"
        : "serve beer";
console.log(ageCheck);

//4
isStudent = true;
ticketPrice = (isStudent)
        ? "Ticket costs €5,00"
        : "Ticket costs €12,00";
console.log(ticketPrice);

//5
cake = false;
var okMarie = (cake)
        ? "let them eat cake"
        : "oh,bother";
console.log(okMarie);

//6

var number = 40.9;
var isEven = (number % 2 === 0)
        ? `${number} is even`
        : (parseInt(number) !== number)
          ? `${number} is not an Integer`
          : number + " is odd";
console.log(isEven);

var number = 30;
var isEven = (number % 2 === 0)
        ? `${number} is even`
        : number + " is odd"
console.log(isEven);

var number = 939;
var isEven = (number % 2 === 0)
        ? `${number} is even`
        : number + " is odd"
console.log(isEven);