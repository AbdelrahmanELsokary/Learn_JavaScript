//Data Types We Are Learning
//--------------------------//
//1-String
//2-Number < (Integers//Floating)
//3-Boolean

//Integer
let number = 0;
console.log(number++); // 0 (يتم عرض القيمة ثم الزيادة)
console.log(number); // 1
console.log(++number); // 2 (يتم الزيادة ثم عرض القيمة)
console.log(~number); // -3 (يتم الزيادة بالسالب ثم عرض القيم)
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
//باقي القسمه
console.log(20 % 3); //2
//القسمه
console.log(50 / 5); //10
//الضرب
console.log(50 * 5); //250
//الجمع
console.log(100 + 100); //200
//الطرح
console.log(100 - 100); //0

//Floating
let myNumber = 77.22;
console.log(myNumber);

//boolean
let age = 20;
console.log(age >= 18); // true
age = 15;
console.log(age >= 18); // false

//const الثوابت
const PI = 3.14;
console.log(PI); // حاجه ثابته مش هتتغير حتي الازل

// عوامل المقارنة
console.log(5 == "5"); // true (مقارنة القيمة فقط)
console.log(5 == 5); // true
console.log(5 === "5"); // false (مقارنة القيمة والنوع)

//العوامل المنطقية
//-----------------//
//OR//
//مش لازم القيم كلها تتحقق عشان تعطي ممكن قيمه واحده بسtrue
console.log(true || true); // true
console.log(false || true); // true
console.log(false || false || true); // false

//AND
//لازم القيم كلها تتحقق عشان تعطي true
console.log(true && true); // true
console.log(false && true); // false
console.log(false && false && true); // false
console.log(false && false && false); // false
console.log(true && true && true); // true

//NOT
//بتعكس القيمه
console.log(!true); //false
console.log(!false); //true

//نفي النفي اثبات
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
