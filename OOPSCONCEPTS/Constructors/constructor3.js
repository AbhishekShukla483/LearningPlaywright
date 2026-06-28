class Browser {
    constructor (name) {
        this.name=name;
        this.isOpen=true;
        console.log(name+"launched");
        console.log(this.isOpen);
    }
    startBrowser()
    {
      console.log("starting the browser");
    }
    closeBrowser(){
        console.log("closing the browser");
    }
}
let chrome =new Browser("chrome");
let firefox=new Browser("firefox");
