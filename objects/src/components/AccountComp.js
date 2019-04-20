import React, { Component } from 'react';

import Account from './Account'

class AccountComp extends Component {
	constructor() {
		super();
		this.newAccount = new Account(1, 100, "Test Account", "Test User");
		this.state = {
			balance: this.newAccount.balance
		};
		this.depositClick = this.depositClick.bind(this);
		this.withdrawClick = this.withdrawClick.bind(this);
	};

	depositClick() {
		console.log("in depositClick");
		const depAmount = Number(document.getElementById("depositInput").value);
		this.setState({balance: this.newAccount.deposit(depAmount)});
		console.log(this.state.balance);
	};

	withdrawClick() {
		console.log("in withdrawClick");
		const wdAmount = Number(document.getElementById("withdrawInput").value);
		this.setState({balance: this.newAccount.withdraw(wdAmount)});
		console.log(this.newAccount.balance);
	};

	render() {
		return(
			<div>
				<h1>Your Bank Account</h1>
				<h3>User Name: {this.newAccount.userName}</h3>
				<h3>Account Name: {this.newAccount.accountName}</h3>
				<h3>Current Balance: {this.state.balance}</h3>
				<h4>Add account funds:</h4>
				<input id="depositInput" type="number"/>
				<button id="depositBtn" type="button" onClick={this.depositClick}>Submit</button>
				<h4>Withdraw account funds:</h4>
				<input id="withdrawInput" type="number"/>
				<button id="wdBtn" type="button" onClick={this.withdrawClick}>Submit</button>
				<br /><br />
			</div>
		);
	};
};

export default AccountComp;