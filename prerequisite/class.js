class person {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }
}

class teacher extends person {
    constructor(name, age, classStrength) {
        super(name, age);
        this.classStrength = classStrength;
    }
}

class student extends person {
    constructor(name, age, cgpa) {
        super(name, age);
        this.cgpa = cgpa;
    }
}

let person1 = new person("Adam", 25);
let teacher1 = new teacher("Steve", 40, 100);
let student1 = new student("Mark", 21, 8.0);

console.log(person1);
console.log(teacher1);
console.log(student1);