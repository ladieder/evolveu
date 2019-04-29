// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

function checkDriverAge() {

	let age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}

}

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

let checkDriverAge2 = function () {

	let age2 = prompt("What is your age?");

	if (Number(age2) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age2) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age2) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}

}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge3(92);
// it returns "Powering On. Enjoy the ride!"

let age3;

function checkDriverAge3(age3) {

	if (Number(age3) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age3) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age3) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}

}