let fruits = ['Apple', 'Mango'];
let itemCount = fruits.length;

fruits.push('orange');
fruits.unshift('Jackfruit');

let names = 'ram,hari,harendra';
let nameArray = names.split(',');

const nameString = nameArray.join(', '); //'ram, hari, harendra'

const index = fruits.indexOf('Mango');
const isMangoThere = fruits.includes('Mango');

fruits.splice(-2, 2, 'Berry', 'Grapes');

for (let fruit of fruits) {
    console.log(fruit);
}

let x = [[1, 2, 3], [4, 5, 6]];

let t = x[1][1];