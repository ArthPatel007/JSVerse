class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  get username() {
    return this._username;
  }
  set username(username) {
    this._username = username;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    this._password = password;
  }
}

const user = new User("Arth", "X.com", "1234");

console.log(user.username);

console.log(user.email);

console.log(user.password);
