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
