let x = 50;

if(x < 50)
{
    let y = 89;
    console.log();      
}
else if(x < 70)
{
    //some code
}
else
{

}

//Chaining and nesting

//console.log(y);


// switch
let currentTime = new Date();
//console.log(currentTime);
let day = currentTime.getDay();

switch(day)
{
    case 0: console.log("Its sunday"); 
    break;
    case 1: console.log("Its monday, office time..."); 
    break;
    case 2: console.log("Its tuesday"); 
    break;
    case 3: console.log("Its wednesday"); 
    break;
    case 4: console.log("Its thursday"); 
    break;
    case 5: console.log("Its friday"); 
    break;
    case 5: console.log("Its saturday"); 
    break;
    default: console.log("Not valid date");
    break;
}