class credentials {
   #apikey; //private variable
    user;

    constructor(user,key) {
        this.user=user;
        this.#apikey=key;
    }
    testgetAuthHeader(){
        return "Bearer" +this.#apikey
    }
}
let cred = new credentials("admin", "secret_key_1234");
console.log(cred.user);

const token=cred.testgetAuthHeader();
console.log(token);
