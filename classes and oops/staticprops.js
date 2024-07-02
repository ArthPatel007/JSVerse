// static pros in js

class User {
    constructor(username, email, password) {
        this.username = username;
    }

    static encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return this.username.toUpperCase();
    }
}

const user = new User("Arth", "X.com", "1234");

console.log(user.encryptPassword());

console.log(user.changeUsername());

