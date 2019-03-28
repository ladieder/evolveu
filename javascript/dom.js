console.log("in dom.js");

function onDivClick(e) {
	// console.log("e", e);
	console.log("target", e.target);
}

// ??? not working ???
function onShowClick() {
	console.log("in onShowClick");
	let showAr = [];

	for (let i = 1; i < oList.childNodes.length; i++) {
		showAr.push(oList.childNodes[i].textContent);
		console.log("showAr", showAr);
		i++;
	}

	msgDiv.textContent = "children of <ol>: " + showAr;
}

function onStartClick() {
	console.log("in onStartClick");
	let newLI = document.createElement("li");
	newLI.textContent = "new item";
	oList.insertBefore(newLI, oList.childNodes[1]);
}

function onEndClick() {
	console.log("in onEndClick");
	let newLI = document.createElement("li");
	newLI.textContent = "new item";
	oList.appendChild(newLI);
}

function onDeleteClick(e) {
	console.log("in onDeleteClick");
	oList.removeChild(e.target);
}

listDiv.addEventListener("click", onDivClick);
showBtn.addEventListener("click", onShowClick);
startBtn.addEventListener("click", onStartClick);
endBtn.addEventListener("click", onEndClick);
oList.addEventListener("click", onDeleteClick);


// *** Exercise - Working with Cards ***
console.log("in dom.js cards exercise");

function onAddClick0() {
	console.log("in onAddClick0");
}

addBtn0.addEventListener("click", onAddClick0);