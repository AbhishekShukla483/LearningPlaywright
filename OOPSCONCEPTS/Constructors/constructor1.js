class Person {
    constructor() {
       this.name="Abhishek Shukla";
       this.email= "Ashkla1112@gmail.com";
       this.salary= 78999
       this.address= "PanCard club road, baner, Pune, Maharashta";
    }
    
    sleep()
    {
        console.log("Sleeping.....");
    }
    eat()
    {
        console.log("Eating.....");
    }
    walk()
    {
        console.log("Walking.....");
    }

}
const obj_ref = new Person();
console.log(obj_ref);
obj_ref.sleep();
obj_ref.eat();
obj_ref.walk();