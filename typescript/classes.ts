//classes

class User {
    name: string;
    email: string;
    password: string;

    //readonly properties
    readonly createdAt: Date;
    readonly updatedAt: Date;

    //static properties
    static readonly userCount: number = 100;

    //private properties
    private readonly id: number;

    //optional properties
    readonly optional?: string;

    //optional properties with default value
    readonly optionalWithDefaultValue?: string = "default value";

    //constructor
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    

    //static method
    static getUserCount() {
        return 100;
    }

    //public access modifier with getter
    public getUserData() {
        return this.name + " " + this.email + " " + this.password;
    }

    //private access modifier with setter
    private setUserData(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    //protected access modifier
    protected getUserCount() {
        return 100;
    }
}

const user = new User("Hassan", "hassan@gmail.com", "123456");
console.log(user.getUserData());
console.log(User.getUserCount());
