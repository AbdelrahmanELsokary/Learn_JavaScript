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

//-------------------------------------------------------//

//*-------------Switch Statement-------------*//

let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day!");
}

//!Output = "Tuesday" because the third case is verification

//----------------------------------------------//

let fruit = "Banana";

switch (fruit) {
  case "Apple":
    console.log("Price: $2 per kilogram");
    break;
  case "Banana":
    console.log("Price: $1 per kilogram");
    break;
  case "Orange":
    console.log("Price: $1.5 per kilogram");
    break;
  default:
    console.log("Fruit not available");
}

//?Output = "Banana" because the second case is verification

//*-------------------------------------------*//

let role = "admin";

switch (role) {
  case "admin":
    console.log("You have full access");
    break;
  case "editor":
    console.log("You can edit content");
    break;
  case "viewer":
    console.log("You can only view content");
    break;
  default:
    console.log("Unknown role");
}

//!Output = "You have full access" because the first case is verification

//*------------------Loops------------------*//

//!-----For Loop------!\\

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// //?Output = from (1) to (10)

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x 5 = ${5 * i}`);
}

//?Output = from (5*1) to (5*10)

console.log("---------------");

let num = "5";
console.log(`4 + ${num} = ${4 + num} `);

for (let i = 1; i <= 10; i++) {
  for (let x = 1; x <= 10; x++) {
    console.log(` ${i} x ${x} = ${i * x}`);
  }
  console.log("_____________");
}
//!Output = from (1*1) to (10*10)

//-------------------------------//

//*----- While Loop-----*\\

let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
//!Output = from (1) to (5)

//---------------------------//

let numberNegative = -1;

do {
  number = 5;
} while (number <= 0);
console.log("the number is: " + number);

//-----------------------------------------\\

//*----------Object----------*\\
let person = {
  firstName: "Ahmed",
  lastName: "Fathy",
  age: 30,
  isMarried: false,
};

console.log("First Name: " + person.firstName);
console.log("Age: " + person.age);

//--------------------------------\\
let employee = {
  name: "Mike",
  position: "Manager",
  address: "New York",
  zip: "10001",
};

console.log(employee.address);

//---------------------------------\\

//!---------type of--------\\

/**
 * name=ahmed
 * condition = typeof == string
 * if = string
 * print (true)
 * else
 * print (false)
 */

// let name1 = "ahmed";

// if (typeof name1 == "string") {
//   console.log("true");
// } else {
//   console.log("false");
// }

//------------------------------------\\

function name1(name2) {
  if (typeof name2 == "string") {
    console.log("true");
  } else {
    console.log("false");
  }
}
name1("sadasdas");

//-------------------//
/**
 * firstName
 * lastName
 * email
 * phoneNumber
 * password
 * confirmPassword
 * gender
 */
let userData = {
  firstName: "saad",
  lastName: "Ahmed",
  email: "saadahmed@gmail.com",
  phoneNumber: "01206259295",
  password: "lqrmg53g",
  confirmPassword: "lqrmg53g",
  gender: "male",
};

function user() {
  if (
    typeof userData.firstName == "string" &&
    typeof userData.lastName == "string" &&
    typeof userData.phoneNumber == "string" &&
    typeof userData.password == "string" &&
    typeof userData.confirmPassword == "string" &&
    typeof userData.gender == "string"
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}
user();
