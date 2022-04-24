let x = 90;
let y = 90;
let x1 = x++;
let y1 = ++y;
console.log(x, y, x1, y1);

//Unary operators: ++, --, !

let z = !x;

// Find if numbr is even or odd
let isEven = x % 2 == 0; // 13 % 2 = 1
isEven = x & 1 == 0;

let p = x << 1;
let q = y >> 1;
let r = ~isEven;

// Comparision
let s = x === '90';
let ss = x !== '90';
s = x <= '90';

// Logical
let t = s && ss;
t = false && anything;
t = s || ss;
t = true || ss;

const u = x ?? "bishnu"; //Nullish (null or undefined) coalescing operator

let v = x === 90 ? 45 : 89;

let w = x++ + 45 >> 2 <= 34 ^ 4 & 9;

/*
negation/increment	    ! ~ - + ++ -- typeof void delete
multiply/divide	        * / %
addition/subtraction	+ -
bitwise shift	        << >> >>>
relational	            < <= > >= in instanceof
equality	            == != === !==
bitwise-and	            &
bitwise-xor	            ^
bitwise-or	            |
logical-and	            &&
logical-or	            ||
conditional	            ?:
assignment	            = += -= *= /= %= <<= >>= >>>= &= ^= |= &&= ||= ??=
comma	                ,
*/






