"use strict";


// task 1
// let number1 = +prompt("Введіть число від");
// let number2 = +prompt("Введіть число до");
// for (let i = number1; i < number2; i++) {
//   console.log(i);
//   let result = number2 - number1;
//   alert(result);
// }

// task 2
// let number1 = +prompt("Введіть перше число");
// let number2 = +prompt("Введіть друге число");
// while (number1 && number2) {
//   if (number1 > number2) {
//     number1 = number1 % number2;
//   } 
//   else if (number1 < number2) {
//     number2 = number2 % number1;
//   } 
//   else if (number1 === number2) {
//     number1 = 0;
//   }
// }
// let result = `Найбільший спільний дільник є ${number1 + number2}`;
// alert(result);


// task 3
// let num = +prompt("Введіть число");
// for (let i = 1; i < num; i++) {
//     let number = num % i;
//     if (number != 0) {
//         continue;} 
//     else {
//         alert(i);
//     }
// }


// task 4
// let num = +prompt("Введіть число");
// let counter = 0;
// while (num > 0) 
// {
//     num = Math.floor(num / 10);
//     counter = counter + 1;
// }  
// alert (counter);

// task 5
// let countpositive = 0;
// let counnegative = 0;
// let counterzero = 0;
// let countodd = 0;
// let counteven = 0;
// for (let i=0; i < 10; i++) {
//     let number = +prompt("Введіть число");
//     if (number === 0) {
//         counterzero++;
//     }
//     if (number > 0) {
//         countpositive ++;
//     }
//     if (number < 0) {
//         counnegative ++;
//     }
//     if (number % 2 === 0)  {
//         countodd ++;
//     }
//     if (number % 2 === 1) {
//         counteven ++;
//     }
// }
// console.log(`Ти маєш ${counterzero} ${countpositive}  ${counnegative}  ${countodd}  ${counteven}`);

// task 6
// while (true) {
// let action = prompt ("Оберіть дію +, -, *, /, stop");
// if (action == 'stop') {
//     break
// }
// let num1 = +prompt ("Введіть перше число");
// let num2 = +prompt ("Введіть друге число");
// let result;
// if (action == '+') {
//     result = num1 + num2;
// }
// if (action == '-') {
//     result = num1 - num2;
// }
// if (action == '*') {
//     result = num1 * num2;
// }
// if (action == '/') {
//     result = num1 / num2;
// }
// alert(result);
// }


// task 7
// let num1 = +prompt("Введіть число");
// let qwe = num1;
// let num2 = +prompt("Введіть число 2");
// let counter = 0;
// while (num1 > 0) 
// {
//     num1 = Math.floor(num1 / 10);
//     counter = counter + 1;
// }  
// let multiplier = 0;
// for (let i = 0; i < counter; i++) {
//     multiplier = multiplier * 10;
//     multiplier = multiplier + num2;
// }
// let result = qwe + multiplier; 
// alert (result);

// task 8
let count = 0;
let i 
let next = true;
while (i = next) {
    i++; 
    count ++;
    next = confirm ('Бажаєте дізнатися перший день тижня?')
    switch (count) {
        case 1:
        alert ('tuesday, do yot want to see next day?')
            break;
        case 2:
        alert  ('wednesday, do yot want to see next day?')
            break;
        case 3:
        alert  ('thursday, do yot want to see next day?')
            break;
        case 4:
        alert  ('friday, do yot want to see next day?')
            break;
        case 5:
        alert  ('saturday, do yot want to see next day?')   
            break;
        case 6:
        alert  ('sunday, do yot want to see next day?')
            break;
        case 7:
        alert ('monday, do yot want to see next day?')
            count = 0;
            break;
    }
}


    // if (next === false) {
    //     alert ('Як хочеш')
    //     break;
    // }