/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

function makeEmailArr(nameArray) {
	const email = nameArray[0] + "." + nameArray[1] + "@evolveu.ca";
	return email;
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

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));