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

  const outerWear = "T-Shirt";

function myOutfit() {

   var outerWear = "sweater"
  return outerWear;
}

myOutfit();                      //Global vs. Local Scope in Functions

let sum = 0;

function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}

addThree();
addFive();           //Understanding Undefined Value returned from a Function

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}  

 processed = processArg(7);   //Assignment with a Returned Value

 function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
  
    return arr.shift();
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));  //Stand in Line

  function welcomeToBooleans() {
  
    return true;                    //Understanding Boolean Values
  }


  function trueOrFalse(wasThatTrue) {

     if (wasThatTrue) {
       return "Yes, that was true";
     }
    
     return "No, that was false";
  
  }                                      //Use Conditional Logic with If Statements

  function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
   
  testStrict(10);               //Comparison with the Strict Equality Operator

  function compareEquality(a, b) {
    if (a === b) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");    //Practice comparing different values

  function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);              //Comparison with the Inequality Operator

  function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);             //Comparison with the Strict Inequality Operator

  function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val > 10) { 
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);    //Comparison with the Greater Than Operator

  function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);      //Comparison with the Greater Than Or Equal To Operator

  function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);          //Comparison with the Less Than Operator

  function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);  //Comparison with the Less Than Or Equal To Operator
  
  function testLogicalAnd(val) {

    if (val <= 50 && val >=25) {
        return "Yes";
      }

    return "No";
  }
  
  testLogicalAnd(10);         //Comparisons with the Logical And Operator

  function testLogicalOr(val) {
 
    if (val > 20 || val < 10) {
      return "Outside";
    }
  
    return "Inside";
  }
  
  testLogicalOr(15);             //Comparisons with the Logical Or Operator2

  function testElse(val) {
    let result = "";
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "5 or Smaller";
    }
  
    return result;
  }
  
  testElse(4);                 //Introducing Else Statements

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
   else {
    return "Between 5 and 10";
    }
  }
  
  testElseIf(7);                 //Introducing Else If Statements

  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);                      //Logical Order in If Else Statements

  function testSize(num) {
       if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return  "Medium";
  } else if (num < 20) {
    return  "Large";
  }else {
    return "Huge";
  }
  
  }
  
  testSize(7);                     //Chaining If Else Statements

  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

   if (strokes == 1) {
     return "Hole-in-one!";
   }
   else if (strokes <= par - 2	) {
     return "Eagle";
   }
   else if (strokes == par - 1	) {
     return "Birdie";
   }
   else if (strokes == par 	) {
     return "Par";
   }
   else if (strokes == par + 1	) {
     return "Bogey";
   }
   else if (strokes == par + 2	) {
     return "Double Bogey";
   }
   else{
     return "Go Home!";
   }

}                                           //Golf Code

function caseInSwitch(val) {
  let answer = "";

    switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
   answer = "beta";
    break;
  case 3:
   answer = "gamma";
    break;
  case 4:
   answer = "delta";
}

  return answer;
}

caseInSwitch(1);
 
golfScore(5, 4);           //Selecting from Many Options with Switch Statements

function switchOfStuff(val) {
  let answer = "";
  
    switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}

  return answer;
}                            //Adding a Default Option in Switch Statements

function sequentialSizes(val) {
  let answer = "";
 
    switch(val) {
       case 1:
       case 2:
       case 3:
          answer = "Low";
          break;
       case 4:
       case 5:
       case 6:
          answer = "Mid";
          break;
       case 7:
       case 8:
       case 9:
          answer = "High";
          break;
}

  return answer;
}                             //Multiple Identical Options in Switch Statements

function chainToSwitch(val) {
  let answer = "";
  
  switch(val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}

  return answer;
}

chainToSwitch(7);        //Replacing If Else Chains with Switch

function isLess(a, b) {
  
  return a < b;
 
}

isLess(10, 15);            //Returning Boolean Values from Functions

function abTest(a, b) {
  
    if (a < 0 || b < 0){
      return undefined;
    }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

sequentialSizes(1);           //Return Early Pattern for Functions

let count = 0;

function cc(card) {
   switch(card) {
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
     count++;
     break;
     
    
     case 10:
     case "J":
     case "Q":
     case "K":
     case "A":
     count--;
   }
   if (count > 0){
      let positive = count + " Bet";
       return positive;
   }
   else {
      let negative = count + " Hold";
       return negative;
   }

  return "Change Me";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');   //Counting Cards

const myDog = {

    name: "dog",
    legs: 4,
    tails: 1,
    friends: ["human","being"]

  
};                             //Build JavaScript Objects

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};


const hatValue = testObj.hat;    
const shirtValue = testObj.shirt;   //Accessing Object Properties with Dot Notation

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];  
const drinkValue = testObj["the drink"];  //Accessing Object Properties with Bracket Notation

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObj[playerNumber];   //Accessing Object Properties with Variables

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
  myDog["name"] = "Happy Coder";       //Updating Object Properties
  
  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
   
    myDog.bark = "woof";                  //Add New Properties to a JavaScript Object

    const myDog = {
      "name": "Happy Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"],
      "bark": "woof"
    };
    
    delete myDog.tails;                    //Delete Properties from a JavaScript Object

    function phoneticLookup(val) {
      let result = "";
    
      const obj = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
      };
     
     result = obj[val];
    
      return result;
    }
    
    phoneticLookup("charlie");            //Using Objects for Lookups

    function checkObj(obj, checkProp) {

      if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
      }
      else {
      return "Not Found";
      }
    }                                    //Testing Objects for Properties

    const myMusic = [
      {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CD",
          "8T",
          "LP"
        ],
        "gold": true
      } ,
      {
        "artist": "flop singer",
        "title": "guitar man",
        "release_year": 1999,
        "formats": ["ab","cd"]
      }
    ];                             //Manipulating Complex Objects

    const myStorage = {
      "car": {
        "inside": {
          "glove box": "maps",
          "passenger seat": "crumbs"
         },
        "outside": {
          "trunk": "jack"
        }
      }
    };
    
    const gloveBoxContents = myStorage.car.inside["glove box"]; //Accessing Nested Objects

    const myPlants = [
      {
        type: "flowers",
        list: [
          "rose",
          "tulip",
          "dandelion"
        ]
      },
      {
        type: "trees",
        list: [
          "fir",
          "pine",
          "birch"
        ]
      }
    ];
    const secondTree = myPlants[1].list[1];  //Accessing Nested Arrays

    const myArray = [];

var i = 5;

while (i >= 0){
   myArray.push(i);
   i--        
}                                 //Iterate with JavaScript While Loops

const myArray = [];

 var i;
 for (i = 1; i < 5;i ++){
   myArray.push(i);
 }                                 //Iterate with JavaScript For Loops

 const myArray = [];

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}                                    //Iterate Odd Numbers With a For Loop

const myArray = [];

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}                                   //Count Backwards With a For Loop










