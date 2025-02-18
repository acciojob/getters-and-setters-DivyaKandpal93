//complete this code
class Person {
	constructor(name:string, age: number){
		this.name = name;
		this.age= age;
	}
	get name(name){
		return name;
	}

	set age(newAge){
		this.age= newAge;
	}
}

class Student extends Person {
	constructor(name:string, age: number){
		super(name,age);
	}
	super.name("Divya");
}

class Teacher extends Person {
	constructor(name:string, age: number){
		super(name,age);
	}
	super.age(23);
}
const window = new Person();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
