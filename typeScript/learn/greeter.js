var Student = /** @class */ (function () {
    // public 等同于创建同名的成员变量
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    console.log(person.fullName);
    return "Hello, " + person.firstName + " " + person.lastName;
}
// const user = "jiang";
// const user = { firstName: 'jiang', lastName: 'name'};
var user = new Student("jiang", "name", "user");
console.log(greeter(user));
