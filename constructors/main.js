function Person(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName
    }
};

const Pulak = new Person('Pulak', 'Bala',22);
const Nayem = new Person('Nayem', 'Jannatul',27);
const Nayon = new Person('Emran', 'masud',24);

 Nayem.country = 'Bangladesh';

console.log(Nayem);