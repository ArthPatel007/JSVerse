function SetUsername(username) {
  this.username = username;
}

// funcation of create user parameter is username use set funcation email  password

function CreateUser(username, email, password) {
  SetUsername.call(this,username);
  this.email = email;
  this.password = password;
}

const user2 = new CreateUser("Arth", "a@a.com", "123456");

console.log(user2);


