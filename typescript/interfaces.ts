//interfaces 

interface user {
    name: string,
    email: string,
    password: string
}

//passing interface object to the function

function printUserData(obj: user): void {
    console.log(obj.name, obj.email, obj.password);
}

printUserData({name: "Hassan", email: "hassan@gmail.com", password: "123456"});

//extending interfaces

interface admin extends user {
    role: string
}

const admin: admin = {name: "Hassan", email: "hassan@gmail.com", password: "123456", role: "admin"};

printUserData(admin);

//intersection types

type userAndAdmin = user & admin;

const userAndAdmin: userAndAdmin = {name: "Hassan", email: "hassan@gmail.com", password: "123456", role: "admin"};

printUserData(userAndAdmin);

//union types

type userOrAdmin = user | admin;

const userOrAdmin: userOrAdmin = {name: "Hassan", email: "hassan@gmail.com", password: "123456", role: "admin"};

printUserData(userOrAdmin);

//type aliases

type userType = {
    name: string,
    email: string,
    password: string
}

const userType: userType = {name: "Hassan", email: "hassan@gmail.com", password: "123456"};