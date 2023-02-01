var number = 50;
var twoNumber = 99;

if ((number >= 50 && number <= 99) || (twoNumber >= 10 && twoNumber >= 99)) {
  console.log(true);

}else {
    console.log(false);
}


let num =35;
let newNum = 65;
let moreNum = 75;

if ((num >= 50 && num <= 99) || (newNum >= 50 && newNum <= 99) || (moreNum >= 50 && moreNum <= 99)) {
    console.log(true);
}else {
    console.log(false);
}


console.log(Math.max(num, newNum, moreNum));

let complete = 'py'
let moreComplete = 'hton'

if (moreComplete.substring(0, 2) == 'py') {
    console.log(moreComplete);
}else {
    console.log(`${complete}${moreComplete}`);
}


//number 5
let integer = 30;
let newInteger = 20;
let moreInteger = integer + newInteger;

if (moreInteger >= 50 && moreInteger <= 80) {
    console.log(65);
}else {
    console.log(80);
}

//6

let x = 10; //let x = 10;
let y = 2; //let y = 18;
let sum = x + y;
let dif = x - y;

if (sum == 8 || dif == 8) {
    console.log('question', true);
}else {
    console.log('question',false);
}
/* if (sum == 8 || dif == -8) {
    console.log('question', true);
}else {
    console.log('question',false);
} then its true again*/

//7
let me = 20;
let you = 5;
let something = me + you;

if (me == 15 || something == 15 || you == 15) {
    console.log('.', true);
}else{
    console.log('.',false);
}

//8
x = 21;
y = 7;

if (x%7 == 0 || x%11 == 0 || y%7 == 0 || y%11 == 0) {
    console.log('q8', true);
}

