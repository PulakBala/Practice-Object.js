function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName
    }
};

const Pulak = new Person('Pulak', 'Bala', 35);
const Nayem = new Person('Nayem', 'Jannatul', 27);
const Mamun = new Person('Mamun', 'Mia', 23);

Person.prototype.country = 'Bangladesh';

console.log(Nayem);
console.dir(Nayem);

