// for of ex

// const myarray = ["Arth", "Raj", "meet"];

// for (const element of myarray) {
//   console.log(element);
// }

// for of ex of string

// const mystring = "Arth Patel";

// for (const element of mystring) {
//   console.log(element);
// }

// maps

// const map =new Map();
// map.set('In', "India");
// map.set('jp', "japan");
// map.set('usa', "united");

// // console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// const Myobj={
//     'game1':'NFS',
//     'game2':'PUBG',
//     'game3':'COD'
// }

// for (const [key, value] of Myobj) {
//     console.log(key, ':-',value);
// }

// object
// const myObje = {
//   js: "javascript",
//   py: "python",
//   java: "java",
// };

// for (const key in myObje) {
//   console.log(`${key} shorcut id for ${myObje[key]}`);
// }

// array with for in loop

const myarray = ["Arth", "Raj", "meet"];

for (const key in myarray) {
  console.log(key);
}

// for in loop in object

const myobj = {
  name: "Arth",
  age: 20,
};

for (const key in myobj) {
  console.log(myobj[key]);
}
