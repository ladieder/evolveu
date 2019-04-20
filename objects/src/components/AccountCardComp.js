import React from 'react';

function AccountCardComp(props) {
	// constructor() {
	// 	super();
	// 	// this.addAccountClick = this.addAccountClick.bind(this);
	// 	// this.createAccountCard = this.createAccountCard.bind(this);
	// 	// this.createEditBtn = this.createEditBtn.bind(this);
	// 	// this.createDeleteBtn = this.createDeleteBtn.bind(this);
	// // 	// this.editAccountCard = this.editAccountCard.bind(this);
	// // 	// this.deleteAccountCard = this.deleteAccountCard.bind(this);
	// };

	// createAccountCard() {
	// 	// Create new account card (div)
	// 	const newDiv = document.createElement("div");
	// 	const newH4 = document.createElement("h4");
	// 	newDiv.className = "accountCards";
	// 	newDiv.id = this.props.item.id;
	// 	// newH4.textContent = account.accountName;
	// 	// newH4.textContent = "new account";
	// 	newH4.textContent = this.props.item.accountName;
	// 	newDiv.appendChild(newH4);
	// 	newDiv.appendChild(this.createEditBtn());
	// 	newDiv.appendChild(this.createDeleteBtn());
	// 	// //Append new account card (div) to React "accountCards" div
	// 	// document.getElementById("accountCards").append(newDiv);
	// 	return newDiv;
	//  }

	// createEditBtn() {
	// 	// Create and append edit button to account card
	// 	const editBtn = document.createElement("button");
	// 	editBtn.className = "btns";
	// 	editBtn.textContent = "Edit";
	// 	editBtn.addEventListener("click", this.editAccountCard);
	//  	return editBtn;
	//  }

	// createDeleteBtn() {
	// 	// Create and append delete button to account card
	// 	const delBtn = document.createElement("button");
	// 	delBtn.className = "btns";
	// 	delBtn.textContent = "Delete";
	// 	delBtn.addEventListener("click", this.deleteAccountCard);
	// 	return delBtn;
	// }

	return (
		<div className="accountCards">
			<h4>{props.accountData.accountName}</h4>
			<h4>Account Balance: ${props.accountData.balance}</h4>
			<button className="btns" type="button">Manage Account</button>
			<button className="btns" type="button">Delete Account</button>
		</div>
	);
}

export default AccountCardComp;