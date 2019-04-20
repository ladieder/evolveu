import React, { Component } from 'react';

import AccountsCtrl from "./AccountsCtrl";
import AccountCardComp from "./AccountCardComp";

class AccountApp extends Component {
	constructor() {
		super();
		this.state = {
			ctrl: new AccountsCtrl()
		// 	// accountList: this.ctrl.accountList,
		// 	// accountList: [
		// 	// 	// {id:-3, balance:100, accountName: "test account 1", userName: "test name 1"},
		// 	// 	// {id:-2, balance:200, accountName: "test account 2", userName: "test name 2"},
		// 	// 	// {id:-1, balance:300, accountName: "test account 3", userName: "test name 3"}
		// 	// ],
			// accountsTotal: this.ctrl.totalAccounts(),
			// accountMax: this.ctrl.maxAccount(),
			// accountMin: this.ctrl.minAccount()
		}
		this.addAccountClick = this.addAccountClick.bind(this);
		// this.editAccountCard = this.editAccountCard.bind(this);
		// this.deleteAccountCard = this.deleteAccountCard.bind(this);
	};

	// deleteAccountCard(e) {
	// 	console.log(Number(e.target.parentNode.id));
	// 	this.ctrl.deleteAccount(Number(e.target.parentNode.id));
	// 	e.target.parentNode.remove();
	// }

	// editAccountCard(e) {

	// }

	addAccountClick() {
		const newList = this.state.ctrl;
		newList.addAccount(100, "new account", "default user");
		this.setState({ctrl: newList});
		// this.createAccountCard(this.state.ctrl.accountList[0]);
		// this.createAccountCard(this.accountID);
	};

	render() {
		// const accountCard = this.state.ctrl.accountList.map(item => 
		// 	<li key={item.id}>{item.accountName}, balance: ${item.balance}</li>
		// );

		const accountCard = this.state.ctrl.accountList.map(item => 
			<li key={item.id}><AccountCardComp accountData={item} /></li>
		);

		return(
			<div>
				<h1>EvolveU Bank</h1>
				<h3>Total of Account Balances: {this.state.ctrl.accountsTotal}</h3>
				<h3>Max Account: {this.state.ctrl.accountMax}</h3>
				<h3>Min Account: {this.state.ctrl.accountMin}</h3>
				<button id="addBtn" type="button" onClick={this.addAccountClick}>Add Account</button>
				<h2>List of All Accounts</h2>
				<div id="accountCards"></div>
				<ul>{accountCard}</ul>
				<br /><br />
			</div>
		);
	};
};

export default AccountApp;