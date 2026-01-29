//classes
var User = /** @class */ (function () {
    //constructor
    function User(name, email, password) {
        //optional properties with default value
        this.optionalWithDefaultValue = "default value";
        this.name = name;
        this.email = email;
        this.password = password;
    }
    //static method
    User.getUserCount = function () {
        return 100;
    };
    //public access modifier with getter
    User.prototype.getUserData = function () {
        return this.name + " " + this.email + " " + this.password;
    };
    //private access modifier with setter
    User.prototype.setUserData = function (name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    };
    //protected access modifier
    User.prototype.getUserCount = function () {
        return 100;
    };
    //static properties
    User.userCount = 100;
    return User;
}());
var user = new User("Hassan", "hassan@gmail.com", "123456");
console.log(user.getUserData());
console.log(User.getUserCount());
