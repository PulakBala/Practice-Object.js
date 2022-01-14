const person = {
    firstName:'Jhon',
    lastName:'Dhoe',
    language:'',
    set lang(lang){
        this.language = lang
    }
};
person.lang = "bn";

console.log(person);