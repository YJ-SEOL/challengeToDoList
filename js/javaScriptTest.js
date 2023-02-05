// 22-10-14
// const a = 5;
// const b = 2;
// let myName = "nico";

// console.log(a + b);
// console.log(a * b);
// console.log(a - b);
// console.log("Hello " + myName);

// // 업데이트
// myName = "nicolas";

// console.log("Your new name is " + myName);

// 22-10-17
// "boolean 데이터타입"
// const amIFat = null;
// let something;

// console.log(amIFat, something);

// "Array"
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // array에서 아이템 받아오기
// console.log(daysOfWeek);

// // array에 항목(아이템) 추가하기
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// todo "objects"

// const player = {
//     name: "nico",
//     points: 10,
//     handsome: false,
//     fat: true,
// };

// console.log(player);
// // console.log(player.name);
// // console.log(player["name"]);

// player.lastName = "potato";
// player.points = player.points + 15;
// console.log(player.points);

// todo "function"
// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and i'm " + age);
// }

// sayHello("nico", 24);
// sayHello("cal", 30);
// sayHello("lynn", 21);

// const player = {
//     name: "nico",
//     sayHello: function (otherPersonsName) {
//         console.log("hello! " + otherPersonsName + " nice to meet you");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");

// const calculator = {
//     add: function (a, b) {
//         console.log(a + b);
//     },
//     miu: function (a, b) {
//         console.log(a - b);
//     },
//     div: function (a, b) {
//         console.log(a / b);
//     },
//     multi: function (a, b) {
//         console.log(a * b);
//     },
//     pow: function (a, b) {
//         console.log(a ** b);
//     },
// };
// calculator.add(5, 1);
// calculator.miu(5, 1);
// calculator.div(5, 2);
// calculator.multi(5, 2);
// calculator.pow(5, 2);

// TODO: 10/18
// const calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     miu: function (a, b) {
//         return a - b;
//     },
//     div: function (a, b) {
//         return a / b;
//     },
//     multi: function (a, b) {
//         return a * b;
//     },
//     pow: function (a, b) {
//         return a ** b;
//     },
// };

// calculator.add(5, 1);
// calculator.miu(5, 1);
// calculator.div(5, 2);
// calculator.multi(5, 2);
// calculator.pow(5, 2);

// const plusResult = calculator.add(2, 4);
// console.log(plusResult);

// const miuResult = calculator.miu(plusResult, 5);
// console.log(miuResult);

// console.log(calculator.add(5, 1));

// const age = 96;
// function calculatorKrAge(ageOfForeigner) {
//     ageOfForeigner + 2;
//     return "hello";
// }

// const krAge = calculatorKrAge(age);

// console.log(krAge);

// const age = prompt("how old r u?");
// --- prompt가 js를 실행을 중단하고 있는 중
// 입력을 해야 계속 실행 ---

// String "15" => num 15

// console.log(typeof "15", typeof parseInt("15"));
// console.log(age, parseInt(age));

// const age = parseInt(prompt("how old r u?"));
// // console.log(isNaN(age)); // NaN: not a number

// if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("Your are too young");
// } else if (18 <= age && age <= 50) {
//     console.log("You can dring");
// } else if (80 >= age && age > 50) {
//     console.log("You should excirse");
// } else if (age === 100) {
//     console.log("wow you ar wise");
// } else if (age > 80) {
//     console.log("You can do whatever you want.");
// }
