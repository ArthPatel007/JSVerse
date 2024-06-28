class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return this.username.toUpperCase();
  }
}

const user = new User("Arth", "X.com", "1234");

console.log(user.encryptPassword());

console.log(user.changeUsername());
