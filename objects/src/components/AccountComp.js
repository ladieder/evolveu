import React, { Component } from 'react';
import './AccountComp.css';

class AccountComp extends Component {
	constructor(props) {
		super(props);
		this.depositClick = this.depositClick.bind(this);
		this.withdrawClick = this.withdrawClick.bind(this);
		this.chgNameClick = this.chgNameClick.bind(this);
	};

	depositClick() {
		const depAmount = Number(document.getElementById("depositInput").value);
		this.props.accountData.deposit(depAmount);
		this.props.updateAccount();
		document.getElementById("depositInput").value = ""
	};

	withdrawClick() {
		const wdAmount = Number(document.getElementById("withdrawInput").value);
		this.props.accountData.withdraw(wdAmount);
		this.props.updateAccount();
		document.getElementById("withdrawInput").value = ""
	};

	chgNameClick() {
		const newName = document.getElementById("chgNameInput").value;
		this.props.accountData.accountName = newName;
		this.props.updateAccount();
		document.getElementById("chgNameInput").value = ""
	};

	render() {
		return(
			<div className="accountComp">
				<h4>{this.props.accountData.accountName}</h4>
				<h4>Account ID: {this.props.accountData.accountID}</h4>
				<h4>Account Balance: {this.props.accountData.balance}</h4>
				<h5>Add account funds:</h5>
				<input id="depositInput" type="number"/>
				<button className="btns" id="depositBtn" type="button" onClick={this.depositClick}>Submit</button>
				<h5>Withdraw account funds:</h5>
				<input id="withdrawInput" type="number"/>
				<button className="btns" id="wdBtn" type="button" onClick={this.withdrawClick}>Submit</button>
				<h5>Change account name to:</h5>
				<input id="chgNameInput" type="text"/>
				<button className="btns" id="chgNameBtn" type="button" onClick={this.chgNameClick}>Submit</button>
				<br />
				<button className="btns" id="closeBtn" type="button" onClick={this.props.closeWindowClick}>Close Window</button>

				<br /><br />
			</div>
		);
	};
};

export default AccountComp;