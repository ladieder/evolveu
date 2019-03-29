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

// ??? add <h> tags for div text???

function createCard() {
	console.log("in createCard");
	const newDiv = document.createElement("div");
	const newH4 = document.createElement("h4");
	newDiv.className = "card";
	newH4.textContent = "Card " + ++counter;
	newDiv.appendChild(newH4);
	newDiv.appendChild(createBeforeBtn());
	newDiv.appendChild(createAfterBtn());
	newDiv.appendChild(createDeleteBtn());
	return newDiv;
}

function createBeforeBtn() {
	console.log("in createBeforeBtn");
	const btn = document.createElement("button");
	btn.className = "btns";
	btn.textContent = "Add Before";
	btn.addEventListener("click", addBeforeFunc);
	return btn;
}

function createAfterBtn() {
	console.log("in createAfterBtn");
	const btn = document.createElement("button");
	btn.className = "btns";
	btn.textContent = "Add After";
	btn.addEventListener("click", addAfterFunc);
	return btn;
}

function createDeleteBtn() {
	console.log("in createDeleteBtn");
	const btn = document.createElement("button");
	btn.className = "btns";
	btn.textContent = "Delete";
	btn.addEventListener("click", deleteFunc);
	return btn;
}

function addBeforeFunc(e) {
	console.log("in addBeforeFunc");
	console.log("target", e.target);
	console.log("parent", e.target.parentNode);
	e.target.parentNode.parentNode.insertBefore(createCard(), e.target.parentNode);
}


// ??? not working correctly - add to end of node instead of after???

function addAfterFunc(e) {
	console.log("in addAfterFunc");	
	console.log("target", e.target);
	console.log("parent", e.target.parentNode);
	e.target.parentNode.parentNode.insertBefore(createCard(), e.target.parentNode.nextSibling);
}

function deleteFunc(e) {
	console.log("in deleteFunc");
	e.target.parentNode.remove();	
}

// ??? use e.target instead of cards. ???

function onAddClick(e) {
	console.log("in onAddClick");
	// console.log("target", e.target);
	// console.log("parent", e.target.parentNode);
	// console.log("next sibling", e.target.nextSibling);
	cards.append(createCard());

	// alternative method but still requires hardcoding an id (right)
	// e.target.parentNode.insertBefore(createCard(), right);
}

addCardBtn.addEventListener("click", onAddClick);