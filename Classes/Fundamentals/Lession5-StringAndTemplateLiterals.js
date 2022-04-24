const a = "Vedas";
const b = 'Vedas';
const c = `Vedas`;
const d = new String('Vedas');

console.log(a.length);
console.log(a.charAt(1));
console.log(a[1]);

let cc = 'क';
let ccc = 'क';
let dd = 'ख';
console.log(cc.localeCompare(ccc));

let para = "sdfsfsfsfs \
sdfsfsfsfsf";

para = `sdfsfsfsfs
sdfsfsfsfsf`;

//string interpolation
console.log(`My college is ${a + b + c}`);
