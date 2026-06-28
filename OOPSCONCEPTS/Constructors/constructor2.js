class Car{
    constructor(name)
    {
        this.name=name;
    }
    drive() {
        //console.log(this.name);
        console.log("I am driving", this.name);

    }
}
const tesla = new Car("model S");
//console.log(tesla.name);
tesla.drive();

const i20 = new Car("grand i20");
i20.drive();
