//interfaces 
//passing interface object to the function
function printUserData(obj) {
    console.log(obj.name, obj.email, obj.password);
}
printUserData({ name: "Hassan", email: "hassan@gmail.com", password: "123456" });
var admin = { name: "Hassan", email: "hassan@gmail.com", password: "123456", role: "admin" };
printUserData(admin);
var userAndAdmin = { name: "Hassan", email: "hassan@gmail.com", password: "123456", role: "admin" };
printUserData(userAndAdmin);
var userOrAdmin = { name: "Hassan", email: "hassan@gmail.com", password: "123456", role: "admin" };
printUserData(userOrAdmin);
var userType = { name: "Hassan", email: "hassan@gmail.com", password: "123456" };
