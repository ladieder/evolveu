function sum(p1, p2) {

	// ??? parseFLoat() works but number() doesn't???
	
	return parseFloat(p1) + parseFloat(p2);
}

function subtract(p1, p2) {
	return parseFloat(p1) - parseFloat(p2);
}

function multiply(p1, p2) {
	return parseFloat(p1) * parseFloat(p2);
}

function divide(p1, p2) {
	return parseFloat(p1) / parseFloat(p2);
}

export default { sum, subtract, multiply, divide };