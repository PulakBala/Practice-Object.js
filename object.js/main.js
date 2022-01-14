const person = {
    name:'Sumit',
    age:35,
    getName:function(){
        return 'Sumit'
    }
};
const person2 = person;

person.age = 199;

console.log(person2);