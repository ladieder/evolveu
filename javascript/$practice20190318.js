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

// Write the function after this comment ---

function loopStaff(a) {
	console.log("in loopStaff");
	console.log(a);
	let b = [];
	// let i;      ***why don't have to declare i???

	for (i = 0; i < a.length; i++) {
		console.log("i = ", i);
		console.log("current element:", a[i]);
		b.push(makeEmailObj(a[i]));
	}
	console.log(b);
	return b;
}

// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
// console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);






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