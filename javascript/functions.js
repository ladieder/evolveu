
console.log("hello from functions.js v1");

function myFunction() {
	console.log("hello from myFunction v1");
}

myFunction();
myFunction();



// *** Exercise - Parameters and Returns ***

console.log("Hello from functions.js v2");

function myFunction(xx, yy) {
	console.log("Hello from myFunction v2", xx, yy);
	const value_to_return = xx + "-" + yy;
	return value_to_return;
} 

const value1 = myFunction("Rocks","Rings");
const value2 = myFunction("Coding","Fun");

console.log("v1:", value1);
console.log("v2:", value2);

const func = myFunction;

console.log(func("Hello","World"));



// *** Exercise - Logic Exercises ***

// *** #1 Add Numbers ***
function my_add(n1, n2, n3) {
	console.log("numbers to add are:", n1, n2, n3);
	return n1 + n2 + n3;
}

const ans12 = my_add(1,2,3);
console.log("my_add answer 1:", ans12);

console.log("my_add answer 2:", my_add(2,22,222));

// *** #2 Create Email Address ***
function my_email(fName, lName) {
	return fName + "." + lName + "@evolveu.ca"
}

const ans14 = my_email("jane", "smith");
console.log("my_email answer 1:", ans14);

console.log("my_email answer 2:", my_email("bill", "jones"));

// *** #3 Array Sum ***
function arrayTotal(a1) {
	let sum = 0;
	for (let i = 0; i < a1.length; i++) {
		sum += a1[i];
	}
	return sum;
}

const numbers = [5,10,15,20];
console.log(arrayTotal(numbers));
console.log(arrayTotal([0,2,4,6,8,10]));
console.log(arrayTotal([5,"a",5,"a"]));

// *** #4 String Search ***
function look_for_string(s1, s2) {
	let counter = 0;
	for (let i = 0; i < s1.length; i++) {
		if (s1[i].indexOf(s2) !== -1) {
			counter++;
		}
	}
	return counter;
}

const string_array = [
	'this is a string',
	'that is also a string',
	'what about this',
	'what about that',
];

const search1 = "this";
const search2 = "is";

const ans1 = look_for_string(string_array, search1);
const ans2 = look_for_string(string_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
console.log("We found '", search2, "' in", ans2, "lines");


// ????? it is ok to be counting "this" as "is"?????