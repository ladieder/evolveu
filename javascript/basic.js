// *** Exercise - Working with HTML Input ***

// console.log("Hello World from basic.js");

// function onButtonClicked () {
// 	console.log("button clicked");
// 	document.getElementById("myButton");
// 	console.log("got element id", document.getElementById("myButton"));
// 	document.getElementById("myInput");
// 	console.log("got input id", document.getElementById("myInput"));
// 	document.getElementById("myInput").value;
// 	console.log("got input value", document.getElementById("myInput").value);
// 	console.log("test + 1:", Number(document.getElementById("myInput").value) + 1);
// }

// document.addEventListener("click", onButtonClicked);



// *** Exercise - Calculator ***

const addButton = document.getElementById("add");
const subButton = document.getElementById("subtract");
const multButton = document.getElementById("multiply");
const divButton = document.getElementById("divide");
const ansDisplay = document.getElementsByTagName("div")[0];
const clearButton = document.getElementById("clear");

function addFunc () {
	let ans = 0;
	const value1 = Number(document.getElementById("input1").value);
	const value2 = Number(document.getElementById("input2").value);
	ans = value1 + value2;
	ansDisplay.textContent = value1 + " + " + value2 + " = " + ans;
}	

function subFunc () {
	let ans = 0;
	const value1 = Number(document.getElementById("input1").value);
	const value2 = Number(document.getElementById("input2").value);
	ans = value1 - value2;
	ansDisplay.textContent = value1 + " - " + value2 + " = " + ans;
}	

function multFunc () {
	let ans = 0;
	const value1 = Number(document.getElementById("input1").value);
	const value2 = Number(document.getElementById("input2").value);
	ans = value1 * value2;
	ansDisplay.textContent = value1 + " * " + value2 + " = " + ans;
}	

function divFunc () {
	let ans = 0;
	const value1 = Number(document.getElementById("input1").value);
	const value2 = Number(document.getElementById("input2").value);
	ans = value1 / value2;
	ansDisplay.textContent = value1 + " / " + value2 + " = " + ans;
}	

function clearFunc() {
	document.getElementById("input1").value = "";
	document.getElementById("input2").value = "";
	ansDisplay.textContent = "";
}

addButton.addEventListener("click", addFunc);
subButton.addEventListener("click", subFunc);
multButton.addEventListener("click", multFunc);
divButton.addEventListener("click", divFunc);
clearButton.addEventListener("click", clearFunc);



// *** Exercise - Canadian Taxes ***

function taxCalc(income) {
	if (income <= 47630) {
		return 0.15 * income;
	} else if (income <= 95259) {
		return 7144.50 + 0.205 * (income - 47630);
	} else if (income <= 147667) {
		return 16908.45 + 0.26 * (income - 95259);
	} else if (income <= 210371) {
		return 30534.53 + 0.29 * (income - 147667);
	} else {
		return 48718.69 + 0.33 * (income - 210371);
	}
}

console.log("Taxes owed:", taxCalc(47620));
console.log(47620 - taxCalc(47620));



//  *** Exercise - Working with Arrays ***

const arrAddButton = document.getElementById("arrAdd");
const arrShowButton = document.getElementById("arrShow");
const arrTotalButton = document.getElementById("arrTotal");
const arrClearButton = document.getElementById("arrClear");
const arrMsg = document.getElementById("arrMsg");
let arr = [];

function arrAddFunc () {
	const arrValue = Number(document.getElementById("arrInput").value);
	if (isNaN(document.getElementById("arrInput").value)) {
		arrMsg.textContent = "input is not a valid number";
	} else {
		arr.push(Number(document.getElementById("arrInput").value));
		arrMsg.textContent = "number has been added to array";
	}
}	

function arrShowFunc() {
	arrMsg.textContent = "array contains: " + arr;
}

function arrTotalFunc() {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		console.log("i ", i);
		console.log(arr[i]);
		console.log(sum);
	}
	arrMsg.textContent = "sum of array elements: " + sum;
}

function arrClearFunc() {
	arr = [];
	document.getElementById("arrInput").value = "";
	arrMsg.textContent = "array has been cleared";
}

arrAddButton.addEventListener("click", arrAddFunc);
arrShowButton.addEventListener("click", arrShowFunc);
arrTotalButton.addEventListener("click", arrTotalFunc);
arrClearButton.addEventListener("click", arrClearFunc);



// *** Exercise - Dictionaries ***

// better to have dictionary inside or outside of function??? Depend on situation???
const provDict = {ab:"Alberta", sk:"Saskatchewan", bc:"British Columbia", mb:"Manitoba", 
		on:"Ontario", qc:"Quebec", nl:"Newfoundland", ns:"Nova Scotia", 
		nb:"New Brunswick", pei:"Prince Edward Island", yk:"Yukon",
		nwt:"Northwest Territories", nv:"Nunavut"};

function dictLookup() {
	const provCode = document.getElementById("dictInput").value;
	console.log(provDict.provCode); 						// *** why doesn't this work?????
	document.getElementById("dictMsg").textContent = "The province is: " + provDict[provCode];
	document.getElementById("dictInput").value = "";
}

document.getElementById("dictButton").addEventListener("click", dictLookup);