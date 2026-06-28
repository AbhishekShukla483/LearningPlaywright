class TestCase {
    constructor(name,status,priority) {
        this.name=name;
        this.status=status;
        this.priority=priority;

    }
    display()
    {
        console.log(this.name+"->"+this.status+"->"+this.priority);
    }
}
let loginTc = new TestCase("Login Test", "Pass", "P1");
loginTc.display();