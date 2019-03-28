console.log("Hello world from basicdom.js");
console.log("DOM", document);

function onButtonPushed() {
	// console.log("in onButtonPushed");
	if (idH1.textContent === "Hello World") {
		idH1.textContent = "Hello Universe";
	} else {
		idH1.textContent = "Hello World";
	}
}

function onH1Pushed() {
	// console.log("in onH1Pushed");
	if (idH1.textContent === "Hello World") {
		idH1.textContent = "Hello Universe";
	} else {
		idH1.textContent = "Hello World";
	}
}

function onH2Pushed() {
// 	console.log("in onH2Pushed");
	if (idH2.textContent === "Hello Canada") {
		idH2.textContent = "Your computer is going to blow up";
	} else {
		idH2.textContent = "Hello Canada";
	}
}

function onH3Pushed() {
	// console.log("in onH3Pushed");
	if (idH3.textContent === "Hello Alberta") {
		idH3.textContent = "Hello Saskatchewan";
	} else {
		idH3.textContent = "Hello Alberta";
	}
}

function onH4Pushed() {
	// console.log("in onH4Pushed");
	if (idH4.textContent === "Hello Calgary") {
		idH4.textContent = "Hello Saskatoon";
	} else {
		idH4.textContent = "Hello Calgary";
	}
}

let counter = 0;

function addH1() {
	let newH1 = document.createElement("h1");
	newH1.textContent = "another H1";
	document.body.appendChild(newH1);
	counter++;
	// console.log("counter:", counter);
}

function addBtnToDiv() {
	let newBtn = document.createElement("button");
	newBtn.textContent = "new div button";
	document.getElementsByTagName("div")[0].appendChild(newBtn);
}

function addListToDiv() {
	let newList = document.createElement("ul");
	newList.textContent = "new list";
	document.getElementsByTagName("div")[0].appendChild(newList);
}

function onBodyClicked(e) {
	console.log("in onBodyClicked");
	console.log("e:", e);
	console.log("target:", e.target);
	console.log(idH2.getAttribute("place"));
}

idBtnPush.addEventListener("click", onButtonPushed);
idBtnPush.addEventListener("click", addH1);
idH1.addEventListener("click", onH1Pushed);
idH2.addEventListener("mouseenter", onH2Pushed);
idH3.addEventListener("mouseover", onH3Pushed);
idH4.addEventListener("mouseleave", onH4Pushed);
document.getElementsByTagName("div")[0].addEventListener("click", addBtnToDiv);
document.getElementsByTagName("div")[0].addEventListener("click", addListToDiv);
document.body.addEventListener("click", onBodyClicked);
