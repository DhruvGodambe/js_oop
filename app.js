// we can use function as a substitute for class in OOP
// creating a parent class
function Person(fname, lname) {
    this.fname = fname
    this.lname = lname
}

//creating method on the parent class that it's objects can inherit
Person.prototype.sayHi = function() {
    return "Hi " + this.fname
}

// creating a child class
function Student(fname, lname, grade){
    //inheriting parent reference
    Person.call(this, fname, lname) // can also use Person.apply(this, arguments)
    this.grade = grade
}

//inheriting the parent methods from prototype
Student.prototype = Object.create(Person.prototype)
Student.prototype.tellGrade = function(){return "I have a " + this.grade + " in school"}

// creating a Student instance
var s1 = new Student("Dhruv", "Godambe", "A-")
console.log(s1, s1.__proto__, s1 instanceof Student)

// creating a Person instance
var p1 = new Person("Dhruv", "Godambe")
console.log(p1, p1.__proto__, p1 instanceof Person)