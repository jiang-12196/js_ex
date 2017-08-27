//factory pattern

function createPerson(name, job) {
    var o = new Object();
    o.name = name;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
var person1 = createPerson('Jiang', 'student');
var person2 = createPerson('Jiang', 'coder');

//gouzhao pattern

function Person(name, job) {
    this.name = name;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

var person3 = new Person('jiang', 'student');
var person4 = new Person('jiang', 'coder');

//prototype pattern

function Person() {

}
Person.prototype.name = 'jiang';
Person.prototype.job = 'coder';
Person.prototype.sayName = function () {
    console.log(this.name);
};
var person5 = new Person();

// con pattern

function Person(name) {
    this.name = name;
    this.friends = ['li', 'wang'];
}
Person.prototype.sayName = function () {
    console.log(this.name);
};
var person6 = new Person();
var person7 = new Person();
person6.friends.push('liu');
console.log(person6.friends);
console.log(person7.friends);
console.log(person6.friends === person7.friends);

//dongtai pattern
function Person(name, job) {
    this.name = name;
    this.job = job;
    if(typeof this.sayName !== 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name);
        }
    }
}
var person8 = new Person('jjiang', 'coder');
person8.sayName();

//
