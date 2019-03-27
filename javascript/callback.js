console.log("I'm in callback.js");

// *** test what forEach does
// let a = [1,5,8,9];
// function addOne(a) {
// 	console.log(a+1);
// }
// a.forEach(addOne);

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

function myCallBackFunction(a, func) {
	console.log("I'm in myCallBackFunction");
	// console.log("a -->", a);
	// console.log("func -->", func);

	for (let i = 0; i < a.length; i++) {
		// console.log("i -->", i);
		// console.log("a[i] -->", a[i]);
		myWorkerFunction(a[i]);
	}
}

function myWorkerFunction(p) {
	console.log("I'm in myWorkerFunction", p);
}

myCallBackFunction(data.staff, myWorkerFunction);

// *** another test of myCallBackFunction with a different data set
// myCallBackFunction(['abc', 'bcd', 'cde'], myWorkerFunction);

// *** another test of myCallBackFunction with a number array and a different function
// function add5(p) {
// 	console.log("add5 -->", p + 5);
// }

// myCallBackFunction([2,5,8,9], add5);

// *** initial test of myWorkerFunction
// myWorkerFunction("abcd");