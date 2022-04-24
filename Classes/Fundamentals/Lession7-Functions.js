

printHello = function (name)
{
    console.log(`Hello! ${name}`);
}

function formatName(firstName, lastName)
{
    return `Hello! ${lastName}, ${firstName}`;
}

// Arrow funtions
let x = (name) => `Hello! ${name}`;
formatName = (firstName, lastName) => `Hello! ${lastName}, ${firstName}`;


printHello('Bishnu');
let fullName = formatName('Bishnu', 'Rawal');
console.log(fullName);




function factorial(n) 
{ 
    if(n < 2)
        return 1;
    
    return n * factorial(n-1);
}

let fact = (n) => n < 2 ? 1 : n * fact(n-1);

console.log(fact(5));












