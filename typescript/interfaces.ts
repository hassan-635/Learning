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
