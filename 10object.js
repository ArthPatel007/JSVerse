// singleton
// object.create
// object literals

const mySym = Symbol("key1");

const user = {
  "full name": "Arth Patel",
  age: 20,
  [mySym]: "mykey1",
  isLogin: false,
  greeting: function () {
    return "Hello Js User";
  },
  greetingTwo: function () {
    return `Hello js user, ${this["full name"]}`;
  },
};

console.log(user.age);
console.log(user["age"]);
console.log(user["full name"]);
console.log(user[mySym]);

user.age = 21;
Object.freeze(user);
user.age = 22;
console.log(user);

// user.greeting = function () {
//   return "Hello Js User";
// };

// user.greetingTwo = function () {
//   return `Hello js user, ${this["full name"]}`;
// };

console.log(user.greeting());
console.log(user.greetingTwo());
