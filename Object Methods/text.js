const person = {
    firstName:"John",
    lastName:"Doe",
    id:3354
};

person.fullName = function(){
    return(this.firstName+" "+this.lastName).toUpperCase();
}

person.age = 34;
 
console.log(person.fullName());