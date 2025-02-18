//complete this code
class Person {
	constructor(nameEmp, ageEmp){
		this.nameEmp = nameEmp;
		this.ageEmp= ageEmp;
	}
	get name(){
        return this.nameEmp;
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
    }
	
}

class Teacher extends Person {
	constructor(nameEmp, ageEmp){
		super(nameEmp, ageEmp);
	}
    teach(){
        console.log(`${this.name} is teaching`);
    }
	
	
}
const ob1 = new Student("Divya",25);
ob1.study();
const ob2 = new Teacher("Vivek", 24);
ob2.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
