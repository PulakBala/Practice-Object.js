const person = {
    fullName:'Jhon',
    lastName:'Doe',
    language:'en',
    get lang(){
        // return this.language;
        return this.fullName + " " + this.lastName;
    }
};

console.log(person.lang);