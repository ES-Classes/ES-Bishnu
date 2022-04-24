
for(let i = 50; i < 60; i++)
{
    console.log("Hello");
}


let calcPower = (number, power) => number ** power;

for(let i = 1; i <= 20; i++)
{
    console.log(calcPower(i, 2));
}

// let c = 'N';
// while(c != 'Y')
// {
//     console.log("Hi there!");
//     console.log("Exit? ");
//     //c = 
// }

let names = ['Hari', 'Ram', 'Kishan', 'dipesh', 'harednra'];

for(let i = 0; i < names.length; i++)
{
    console.log(names[i]);
}

for(let name of names)
{
    console.log(name);
}
