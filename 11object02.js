// const tinderUser= new Object();

const tinderUser = {};

tinderUser.id = "0456ab";
tinderUser.name = "Raj";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularuser = {
  email: "abc@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Arth",
      lastname: "Patel",
    },
  },
};

console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
const obj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj3);

const user = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  }
];

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
