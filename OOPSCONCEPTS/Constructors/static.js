class Student {
    static name="Playwright2X";
    static mentor="Prrammod Dutta";

    constructor(name_student, age, phoneNo) {
        this.name_student=name_student;
        this.age=age;
        this.phoneNo=phoneNo;
    }
    static display() {
        console.log("I am common function");
    }
}
const s1=new Student("yasho",32,"9876543210");
const s2=new Student("sharda",30,"8210910909");
console.log(s1.name_student);
console.log(s2.name_student);
console.log(Student.name);
console.log(Student.mentor);
Student.display();