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

const data2 = [
	{fname:"Jane", lname:"Smith", age:30},
	{fname:"Liam", lname:"Henry", age:32},
	{fname:"Emma", lname:"Jones", age:42},
	{fname:"Olivia", lname:"Notly", age:29},
	{fname:"Noah", lname:"Ho", age:55},
	{fname:"William", lname:"Lee", age:52},
	{fname:"Benjamin", lname:"Amis", age:50},
];

// Write the function after this comment ---

function balanceTotFunc(staffAr) {
	console.log("in balanceTotFunc");
	let total = 0;

	staffAr.forEach(function(element) {
		// console.log(element.balance);
		total += element.balance;
	});

	return total;
}

function ageTotFunc(staffAr) {
	console.log("in ageTotalFunc");
	let total = 0;

	staffAr.forEach(function(element) {
		// console.log(element.age);
		total += element.age;
	});

	return total;
}

function ageAvgFunc(staffAr) {
	console.log("in ageAvgFunc");
	let total = 0;
	let count = 0;

	staffAr.forEach(function(element) {
		// console.log(element.age);
		total += element.age;
		count ++;
	});
	return total / count;
}

// and before this comment ---

console.log('-----staffBalances')
const balanceTotal = balanceTotFunc(data.staff);
assertEquals(3823, balanceTotal);
console.log("The total of balances is:", balanceTotal);

console.log('-----staffAges')
const ageTotal = ageTotFunc(data2);
assertEquals(290, ageTotal);
console.log("The total of ages is:", ageTotal);

console.log('-----staffAges')
const ageAvg = ageAvgFunc(data2);
assertEquals(290/7, ageAvg);
console.log("The average of ages is:", ageAvg.toFixed(1));



function makeEmailObj(nameObj) {
	return nameObj.fname + "." + nameObj.lname + "@evolveu.ca";
}

function assertEquals(parm1, parm2) {
	if(parm1 === parm2) {
		console.log("ok ->", parm1);
		return true;
	}
	console.log("*** the two values are not the same");
	console.log("p1-->", parm1);
	console.log("p2-->", parm2);
}