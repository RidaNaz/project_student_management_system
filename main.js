class School {
    addStudent(stdobj) {
        this.students.push(stdobj);
    }
    addTeacher(tchobj) {
        this.teachers.push(tchobj);
    }
    constructor(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
}
class Student {
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("Metropolitan School");
let school2 = new School("The Times Academy");
let school3 = new School("Happy Palace School");
let student1 = new Student("Rida", 20, school1.name);
let student2 = new Student("Dua", 20, school2.name);
let student3 = new Student("Kashaf", 10, school3.name);
let teacher1 = new Teacher("Huda", 30, school1.name);
let teacher2 = new Teacher("Humna", 30, school2.name);
let teacher3 = new Teacher("Ayesha", 30, school3.name);
school1.addStudent(student1);
school2.addStudent(student2);
school3.addStudent(student3);
school1.addTeacher(teacher1);
school2.addTeacher(teacher2);
school3.addTeacher(teacher3);
console.log(school1.name, school1.students, school1.teachers);
console.log(school2.name, school2.students, school2.teachers);
console.log(school3.name, school3.students, school3.teachers);
export {};
