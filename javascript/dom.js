console.log("in dom.js");

function onDivClick(e) {
	// console.log("e", e);
	console.log("target", e.target);
}

// ??? not working ???
function onShowClick() {
	console.log("in onShowClick");
	let showAr = [];

// ??? i+2 blew it up so had to do i++ twice ???

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

let counter = 0;

function createCard() {
	console.log("in createCard");
	const div = document.createElement("div");
	div.textContent = "Card " + ++counter;
	div.className = "card"
	return div;
}

function createBtn(btnName, btnClass) {
	console.log("in createBtn");
	const btn = document.createElement("button");
	btn.textContent = btnName;
	btn.className = btnClass;
	return btn;
}

function addBeforeFunc() {

}

function addAfterFunc() {
	
}

function deleteFunc() {
	
}

function onAddClick() {
	console.log("in onAddClick");
	const newDiv = createCard();
	cards.append(newDiv);
	newDiv.appendChild(createBtn("Add Before", "beforeBtn"));
	newDiv.appendChild(createBtn("Add After", "afterBtn"));
	newDiv.appendChild(createBtn("Delete", "deleteBtn"));	
}

addCardBtn.addEventListener("click", onAddClick);