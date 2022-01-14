// const person = {
//     firstName: 'pualk',
//     lastName: 'bala'
// };
// person.age = 34;
// person.age =354;
// person.secondNmae = 'mamun'
// console.log(person);
// const fruits = new Map([
//     ['apples', 500],
//     ['bannas',300],
//     ['oranges',200]
// ]);
// fruits.mango = ['400']
// fruits.delete('apples');
// console.log(fruits);

const fruits = new Map();

fruits.set("apples", 400);
fruits.set("banana", 200);
fruits.set("oranges", 300);

fruits.has('banana');
fruits.delete('banana');
console.log(fruits);
