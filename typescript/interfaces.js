//interfaces 
//passing interface object to the function
function printUserData(obj) {
    console.log(obj.name, obj.email, obj.password);
}
printUserData({ name: "Hassan", email: "hassan@gmail.com", password: "123456" });
