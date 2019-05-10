// define attributes / variables
console.log("made it to syntax.js")

// number syntax
// numbers can be whole...
let x = 3; 
console.log("x = ", x);
// or decimals
let y = 3.14;
console.log("y = ", y);
//or use exponential notation
let z = 3.14e0;
console.log("z = ", z);

// string
// empty string
let s1 = ""
console.log("s1 = ", s1);
// non-empty string
let s2 = "hi"
console.log("s2 = ", s2);

// booleans
// a positive number is true
let b1 = Boolean(x);
console.log(x, "is", b1);
// a negative number is true
let b2 = Boolean(-15);
console.log(-15, "is", b2);
// 0 is false
let b3 = Boolean(0);
console.log(0, "is", b3); 				// ***how to get rid of ""???
// an empty string is false
let b4 = Boolean(s1);
console.log(s1, "is", b4);
// a non-empty string is true
let b5 = Boolean(s2);
console.log(s2, "is", b5);
// even the string "false" is true
let b6 = Boolean("false");
console.log("the string 'false' is", b6);
// any non-zero expression is true
let b7 = Boolean(x + y);
console.log("x:", x);
console.log("y:", y);
console.log(x+y, "is", b7); 			// ***why is it not 6.14 exactly???

// array
// arrays can be strings
let a1 = ["Acura", "BMW", "Audi"];
console.log("string array", a1);
// or numbers
let a2 = [1,2,3];
console.log("number array", a2);
// or a combination of strings and numbers
let a3 = ["Acura", "2", "Audi"];
console.log("combination array", a3);

// dictionary / objects
let car = {type:"Fiat", model:"500", color:"white"};
console.log("object", car.type, car.model, car.color);

// undefined
// undefined variables are variables that are declared but don't have a value
let u;
console.log("undefined variable", u);
//elements of an array can be undefined
console.log("undefined array element", a3[10]);

// sample if / else
if (x == 3) {
	console.log("true");
} 
else {
	console.log("false");
}

if (x =! 3) {
	console.log("true");
} 
else {
	console.log("false");
}

// functions
// parameters
// returns
function func(p1, p2) {
	console.log(p1, p2);
	console.log(p1 + p2);
	return p1 + p2;
}
func(y, z);

// arrays
// add to the front
a1.unshift("Jeep");
console.log("add element to front of array", a1);
// add to the end
a1.push("Lexus");
console.log("add element to end of array", a1);
// update values
a1[0] = "Porsche";
console.log("change array element", a1);

// loops 
// for
for (i = 0; i < 5; i++) {
	console.log(i);
}
// for/in
let obj = {make:"Acura", model:"MDX", year:"2015"};
console.log("car object", obj);
for (i in obj) {
	console.log("car object", obj[i]);
}
// while
i = 0;
while (i < 5) {
	console.log("i is:", i);
	i++;
}
// do while
i = 0;
do {
	console.log("i is:", i);
	i++;
}
while (i < 5);
// forEach (with array and function)
let sum = 0;
function sumFunc(item) {	
	sum += item;
	console.log(sum);
}
a2.forEach(sumFunc);



// Objects / Dictionaries
// declare object
let obj2 = {make:"Audi", model:"S4", year:2011};
console.log("car object:", obj2);
// lookup key to retrieve value
console.log("car make:", obj2.make);
console.log("car model:", obj2.model);
console.log("car year:", obj2["year"]);										//***what does lookup key mean?