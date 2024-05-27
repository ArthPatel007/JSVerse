function sayName() {
  console.log("A");
  console.log("R");
  console.log("T");
  console.log("H");
}

// sayName();

function addTwonumber(num1, num2) {
  // console.log(num1+num2);
  return num1 + num2;
}
const Result = addTwonumber(10, 5);
// console.log(Result);

function loginUsermsg(username) {
  if (username === undefined) {
    console.log("Enter Username");
    return
  }
  return `${username} Just Log In`;
}

// console.log(loginUsermsg("asd"));

function calculateCartprices(val1,...num3) {
  return num3
}
// console.log(calculateCartprices(101,200,30,500));

const user={
  username:"Arth",
  prices:299
}

function handelObj(anyobj) {
  console.log(`UserName is ${anyobj.username} and price is ${anyobj.prices}`);
}

// handelObj(user);
handelObj({
  username:"as",
  prices:100
})

const myNewArray=[200,300,400,500];

function returnSecondvalue(getAray) {
return getAray[2]
}

console.log(returnSecondvalue([10,20,30,40]));