// inheritans in js

class User {
  constructor(username, email, password) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is {this.username}`);
  }
}

class Admin extends User {
  constructor(username, email, password) {
    super(username, email, password);
    this.admin = true;
  }
}
