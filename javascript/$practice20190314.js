/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---

function makeEmailObj(nameObj) {
	const objEmail = nameObj.fname + "." + nameObj.lname + "@evolveu.ca";
	return objEmail;
}

// and before this comment ---

// Write the function after this comment ---

function assertEquals(parm1, parm2) {
	if(parm1 === parm2) {
		console.log("ok ->", parm1);
		return true;
	}
	console.log("*** the two values are not the same");
	console.log("p1-->", parm1);
	console.log("p2-->", parm2);
}

// and before this comment ---

objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

