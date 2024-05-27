if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Arth";

  function two() {
    const website = "x.com";
    console.log(username);
  }
  two();
}
one();

if (true) {
  const username = "Arth";
  if (username === "Arth") {
    const website = "X.com";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// interting concepte

console.log(addone(5));
function addone(num) {
  return num + 1;
}

console.log(addTwo(5)); 
const addTwo = function (num) {
  return num + 2;
};

