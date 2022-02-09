//This is a single line comment
/*This is a 
multi line comment*/ 
var myName;

var a;
a = 7;

var b;
b = a;

var a = 9;  //Initializing Variables with the Assignment Operator

var myFirstName = "Naman";
var myLastName = "Jagga";     //Declare String Variables

var a = 5;;
var b = 10;;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";   //Understanding Uninitialized Variables

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;            //Understanding Case Sensitivity in Variables

let catName = "Oliver";
let catSound = "Meow!";     //Explore Differences Between the var and let Keywords

const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);    //Declare a Read-Only Variable with the const Keyword

const sum = 10 + 10;   //Add Two Numbers with JavaScript

const difference = 45 - 33; //Subtract One Number from Another with JavaScript

const product = 8 * 10;   //Multiply Two Numbers with JavaScript

const quotient = 66 / 33; //Divide One Number by Another with JavaScript

let myVar = 87;
myVar++;           //Increment a Number with JavaScrip

let myVar = 11;
myVar--;           //Decrement a Number with JavaScript

const ourDecimal = 5.7;
const myDecimal = 5.7;   //Create Decimal Numbers with JavaScript

const product = 2.0 * 2.5; //Multiply Two Decimals with JavaScript

const quotient = 4.4 / 2.0;  //Divide One Decimal by Another with JavaScript

const remainder = 11%3;  //Finding a Remainder in JavaScript

let a = 3;
let b = 17;
let c = 12;  

a += 12;
b += 9;
c += 7;  //Compound Assignment With Augmented Addition

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 5;
c -= 1;  //Compound Assignment With Augmented Subtraction

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;  //Compound Assignment With Augmented Multiplication

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;  //Compound Assignment With Augmented Division

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";  //Escaping Literal Quotes in Strings

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';  //Quoting Strings with Single Quotes

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";  //Escape Sequences in Strings

const myStr = "This is the start. " + "This is the end";   //Concatenating Strings with Plus Operator

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";      //Concatenating Strings with the Plus Equals Operator

const myName = "Naman";
const myStr = "My name is " +  myName + "and Iam well";  //Constructing Strings with Variables

const someAdjective = "bread and butter";
let myStr = "Learning to code is ";
myStr += someAdjective                       //Appending Variables to Strings

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;  //Find the Length of a String

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];  //Use Bracket Notation to Find the First Character in a String

let myStr = "Jello World";

myStr = "Hello World";      //Understand String Immutability

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2];  //Use Bracket Notation to Find the Nth Character in a String

const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2];  //Use Bracket Notation to Find the Nth-to-Last Character in a String

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb + "."; 
//Word Blanks

const myArray = [ "string",10];  //Store Multiple Values in one Variable using JavaScript Arrays

const myArray = [["first",1],["second",2]];  //Nest one Array within Another Array

const myArray = [50, 60, 70];
const myData = myArray[0];     //

const myArray = [18, 64, 99];
myArray[0] = 45;                  //Modify Array Data With Indexes

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];  //Access Multi-Dimensional Arrays With Indexes

const myArray = [["John", 23], ["cat", 2]];  

myArray.push(["dog",3]);                     //Manipulate Arrays With push()

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();     //Manipulate Arrays With pop()

const myArray = [["John", 23], ["dog", 3]];

myArray.shift();

myArray.unshift(["Paul", 35]);  //Manipulate Arrays With unshift()

const myList = [["milk",2],["bread",2],["table",1],["chair",4],["tea",5]];  //shopping list

function reusableFunction() {
    console.log("Hi World");
  }
reusableFunction();             //Write Reusable JavaScript with Functions

function functionWithArgs(arb1, arb2) {
    console.log(arb1 + arb2);
  }
  functionWithArgs(2,3);                  //Passing Values to Functions with Arguments

  function timesFive(num) {
    return num * 5;
  }
  
  const answer = timesFive(5);      //Return a Value from a Function with Return

  let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}                                            //Global Scope and Functions

function myLocalScope() {
    // Only change code below this line
    var myVar
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);     //Local Scope and Functions


