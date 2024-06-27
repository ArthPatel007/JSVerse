// oops in with ex
const user = {
  username: "Arth",
  loginCount: 8,
  singedId: true,

  getuserDetails: function () {
    console.log("Got User Details from database");
  },
};

console.log(user.username);
console.log(user.getuserDetails);