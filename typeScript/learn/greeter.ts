class Student {
    fullName: string;
    // public 等同于创建同名的成员变量
    constructor(public firstName, public middleInitial, public lastName) { 
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// const user = "jiang";
// const user = { firstName: 'jiang', lastName: 'name'};
const user = new Student("jiang", "name", "user");

console.log(greeter(user));