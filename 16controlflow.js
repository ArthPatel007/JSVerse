// if statement
// if (condition) {

// }
// const isUserloginIn = true;

// const temp = 45;

// if (temp === 49) {
//   console.log("less then 50");
// } else {
//   console.log("temp is greater 50 ");
// }

// if (2 != 3) {
//   console.log("true");
// }

// JavaScript Assignment Operators
// < ,>,<=,>=,==,!=,===,!==

// const balance = 1000;
// if (balance < 500) {
//   console.log("less then 500");
// } else if (balance < 750) {
//   console.log("less then 750");
// } else if (balance < 900) {
//   console.log("less then 750");
// } else {
//   console.log("greater then 1200");
// }

const userLogin = true;
const debitcard = true;
const loginInfromgoogle = true;
const logInFromemail = true;

// if (userLogin && debitcard) {
//   console.log("user can Buy");
// } else {
//   console.log("user can not Buy");
// }

// if (loginInfromgoogle || logInFromemail) {
//   console.log("user can Login");
// } else {
//   console.log("user can not Login");
// }

// switch
// const month = 3;
// switch (month) {
//   case 1:
//     console.log("jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   default:
//     console.log("default case");
//     break;
// }

//switch with string ex

// const day = "wednesday";

// switch (day) {
//   case "sunday":
//     console.log("sunday");
//     break;
//   case "tuesday":
//     console.log("tuesday");
//     break;
//   case "wednesday":
//     console.log("wednesday");
//     break;
//   default:
//     console.log("default case");
//     break;
// }



// truthy and falsy value with if

const empobj = {};
if (Object.keys(empobj).length === 0) {
  console.log("object is empty");
} else {
  console.log("object is not empty");
}

// nullish coalescing operator javascript 
// const value1 = null;
// const value2 = 2;

// const result1 = value1 ?? 0;
// const result2 = value2 ?? 0;

// val1 =null ?? 10 ?? 20
// console.log(val1);

// console.log(result1); // Output: 0
// console.log(result2); // Output: 2


// ternary operator ex

const age = 20;

console.log(age > 18 ? "true" : "false");



// console.log(3 > 2 ? "true" : "false");



