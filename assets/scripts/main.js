//Data Types We Are Learning
//--------------------------//
//1-String
//2-Number < (Integers//Floating)
//3-Boolean

//Integer
let number = 0;
console.log(number++); // 0 (The value is displayed and then incremented)
console.log(number); // 1
console.log(++number); // 2 (The value is incremented and then displayed)
console.log(~number); // -3 (The increment is done by negative and then the value is displayed)
console.log(--number); //1
console.log(-number); //-1
console.log(~~number); //1
console.log(++number + 10); //12
console.log(number-- + 10); //12
console.log(--number + 10); //10
console.log(number++ + 10); //10
console.log(++number + 10); //12

//Power
console.log(10 ** 10); //10000000000
//rest of the division
console.log(20 % 3); //2
//The division
console.log(50 / 5); //10
//Multiplication
console.log(50 * 5); //250
//Addition
console.log(100 + 100); //200
//subtraction
console.log(100 - 100); //0

//Floating
let myNumber = 77.22;
console.log(myNumber);

//boolean
let age = 20;
console.log(age >= 18); // true
age = 15;
console.log(age >= 18); // false

//Constants
const PI = 3.14;
console.log(PI); // Fixed and will not change forever

// عوامل المقارنة
console.log(5 == "5"); // true (Value comparison only)
console.log(5 == 5); // true
console.log(5 === "5"); // false (Compare value and type)

//Boolean operators
//-----------------//
//OR//
//It is not necessary for all values ​​to be true Only one value may be possible
console.log(true || true); // true
console.log(false || true); // true
console.log(false || false || true); // false

//AND
//All values ​​must be true for true
console.log(true && true); // true
console.log(false && true); // false
console.log(false && false && true); // false
console.log(false && false && false); // false
console.log(true && true && true); // true

//NOT
//reversing values
console.log(!true); //false
console.log(!false); //true

//Negation of negation is proof
console.log(!!!false); //true
console.log(!!!true); //false

//AND & OR & NOT
//--------------//
console.log((true && true) || false || true); //true
console.log((true && true) || !false || !true); //true
console.log((true && false) || !true || !true); //false
console.log(true || false || (!true && false)); //true
console.log(((false || false) && true && !true) || (false && true) || !false); //true
console.log(((false || false) && true && !true) || (false && true) || !false); //true
console.log((true && !(false || true)) || (false && (true || !false)) || (!true && false)); //false
console.log((((false && true) || !false) && (true || false)) || (!(true && false) && (!false || !true))); // true
console.log((true && !(false || true)) || (false && (true || !false)) || (!true && false)) && ((((false && true) || !false) && (true || false)) || (!(true && false) && (!false || !true))); //fales

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//type of statements

//1-if statement
//2-if-else statement
//3-if-elif-else statement

//----if----//

let myAge = 80;
if (myAge == 80) {
  console.log("My agg:" + myAge);
}

//----if eles----//
let temperature = 40;
if (temperature >= 40) {
  console.log("It's hot");
} else if (temperature <= 50) {
  console.log("It's cool");
} else if (temperature < 60) {
  console.log("It's cold");
}
//output = "It's hot" // because the first condition is verification

let myMony = 80;
if (myMony > 80) {
  console.log("It's bad");
} else if (myMony <= 80) {
  console.log("It's cool");
}
//output = "It's cool" // because the first condition is't verification

//--New--//

let ageUser = 18;
let hasID = true;
if (ageUser >= 18 && hasID) {
  console.log("useful for you to enter");
} else if (hasID == true) {
  console.log("Where is your id");
} else if (ageUser >= 18 && hasID == false) {
  console.log("your are not adult");
} else {
  console.log("You are not allowed to enter");
}

//output = "useful for you to enter" // because the first condition is verification

//----------------------------------------------//

let score = 85;

if (score >= 90 && score <= 100) {
  console.log("excellent");
} else if (score >= 75 && score < 90) {
  console.log("very good");
} else if (score >= 50 && score < 75) {
  console.log("good");
} else {
  console.log("Failed");
}

//output = "very good" // because the first condition is't verification
