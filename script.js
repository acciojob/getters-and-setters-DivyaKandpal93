//complete this code
class Person {
	constructor(nameEmp, ageEmp){
		this.nameEmp = nameEmp;
		this.ageEmp= ageEmp;
	}
	get name(){
        return this.nameEmp;
    }
    get age() {
		return this.ageEmp;
	}
    set age(newAge){
        this.ageEmp = newAge;
    }
    
}

class Student extends Person {
	constructor(nameEmp, ageEmp){
		super(nameEmp, ageEmp);
	}
    study(){
        console.log(`${this.name} is studying`);
        console.log(`${this.name} age is ${this.age}`);
    }
	
}

class Teacher extends Person {
	constructor(nameEmp, ageEmp){
		super(nameEmp, ageEmp);
	}
    teach(){
        console.log(`${this.name} is teaching`);
        console.log(`${this.name} age is ${this.age}`);
    }
	
	
}
const ob1 = new Student("Divya",25);
ob1.study();
ob1.age =32;
const ob2 = new Teacher("Vivek", 24);
ob2.age = 25; // Using the setter to change age
console.log(ob2.age); 
console.log(ob1.age);
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
