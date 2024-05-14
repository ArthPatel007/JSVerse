// singleton
// object.create
// object literals

const mySym=Symbol("key1");

const user = {
    "full name": "Arth Patel",
    age: 20,
    [mySym]:"mykey1",
    isLogin: false,
};

console.log(user.age);
console.log(user["age"]);
console.log(user["full name"]);
console.log(user[mySym]);

user.age=21;
Object.freeze(user)