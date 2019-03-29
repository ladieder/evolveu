console.log("in domclients.js")

const data = 
	{clients:
		[
			{name:"Jane", balance:10},
			{name:"Liam", balance:1000},
			{name:"Emma", balance:1330},
			{name:"Olivia", balance:310},
			{name:"Noah", balance:503},
			{name:"William", balance:520},
			{name:"Benjamin", balance:150},
		]
	};

function createCards(clientAr) {
	const newDiv = document.createElement("div");
	// console.log(clientAr);
	const newH4 = document.createElement("h4");
	newDiv.className = "cardDivs";
	newH4.textContent = clientAr.name + " " + clientAr.balance;
	newDiv.appendChild(newH4);
	newDiv.appendChild(createDelete());
	return newDiv;
}

function createDelete() {
	console.log("in createDelete");
	const btn = document.createElement("button");
	btn.className = "delBtns";
	btn.textContent = "Delete";
	btn.addEventListener("click", deleteFunc);
	return btn;
}

function deleteFunc(e) {
	console.log("in deleteFunc");
	e.target.parentNode.remove();
}

data.clients.forEach(function(element) {
	document.body.append(createCards(element));
});