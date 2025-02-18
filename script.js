class Person {
	constructor(nameEmp, ageEmp){
		this._name = nameEmp;
		this._age = ageEmp;
	}
	get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get age(){
		return this._age;
	}
    set age(newAge){
        this._age = newAge;
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
ob1.age =32;
const ob2 = new Teacher("Vivek", 24);
ob2.age = 25; 
console.log(ob2.age); 
console.log(ob1.age);
ob2.teach();

window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;