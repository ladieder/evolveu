console.log("in domman.js");

function makeDiv(message) {
	const div = document.createElement("div");
	div.textContent = message;
	div.className = "clPanel";
	// console.log(div);
	return div;
}

console.log("testing makediv:", makeDiv("Make me a div"));

let counter = 0;
function onBodyClicked(e) {
	console.log("in onBodyClicked");
	console.log("event log:", e);
	console.log("event target log", e.target);
	e.target.textContent = "Bang " + ++counter;
}

let counter2 = 0;
function onButtonPushed(e) {
	console.log("in onButtonPushed");
	console.log("event log:", e);
	e.target.appendChild(makeDiv("I fricking did it " + ++counter2));
}

function onRightClick(e) {
	console.log("in onRightClick");
	console.log("event log:", e);
	console.log("event target log:", e.target);
	e.target.style.backgroundColor = "purple";
}

let counter3 = 0;
function onLeftClick() {
	console.log("in onLeftClick");
	document.body.insertBefore(makeDiv("New top div " + ++counter3), document.getElementsByClassName("topDiv")[0]);
}

// ??? can't get this part to work ???

let counter4 = 0;
function onRightClick2(e) {
	console.log("in onRightClick2");
	console.log("event target", e.target);
	const nextNode = e.target.nextSibling;
	console.log("nextNode:", nextNode);
	nextNode.insert(makeDiv("New div below " + ++counter4));
}

let counter5 = 0;
function onDblClick(e) {
	console.log("in onDblClick");
	console.log("event target", e.target);
	e.target.appendChild(makeDiv("New sub div" + ++counter5));
}

// *** comment out for now to do last part of assignment (onLeftClick, onRightClick2, onDblClick)

// document.body.addEventListener("click", onBodyClicked);
// document.body.addEventListener("click", onButtonPushed);

// ??? is this the right event listener for right mouse click???
// ??? is it ok to listen to body or should it specifically be div tags only???
// document.body.addEventListener("contextmenu", onRightClick);

document.body.addEventListener("click", onLeftClick);
document.body.addEventListener("contextmenu", onRightClick2);
document.body.addEventListener("dblclick", onDblClick);
