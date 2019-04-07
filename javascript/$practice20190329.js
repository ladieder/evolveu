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

// function totBalance(accumulator, currentValue) {
// 	return accumulator + currentValue.balance;
// }

let tot = data.staff.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue.balance;
}, 0);
console.log(tot);
assertEquals(tot, 3823);



function assertEquals(parm1, parm2) {
	if(parm1 === parm2) {
		console.log("ok ->", parm1);
		return true;
	}
	console.log("*** the two values are not the same");
	console.log("p1-->", parm1);
	console.log("p2-->", parm2);
}