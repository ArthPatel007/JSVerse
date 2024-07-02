// bind in js

class User {
  constructor(username, email, password) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is {this.username}`);
  }
}

const user = new User("Arth", "X.com", "1234");

const logMe = user.logMe.bind(user);

logMe();

user.logMe.bind(user)()

