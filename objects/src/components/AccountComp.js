import React, { Component } from 'react';
import './AccountComp.css';

class AccountComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			balance: this.props.accountData.balance
		};
		this.depositClick = this.depositClick.bind(this);
		this.withdrawClick = this.withdrawClick.bind(this);
	};

	depositClick() {
		const depAmount = Number(document.getElementById("depositInput").value);
		this.setState({balance: this.props.accountData.deposit(depAmount)});
		this.props.updateBalance();
	};

	withdrawClick() {
		const wdAmount = Number(document.getElementById("withdrawInput").value);
		this.setState({balance: this.props.accountData.withdraw(wdAmount)});
		this.props.updateBalance();
	};

	render() {
		return(
			<div className="accountComp">
				<h1>Your Bank Account</h1>
				<h3>Account ID: {this.props.accountData.accountID}</h3>
				<h3>User Name: {this.props.accountData.userName}</h3>
				<h3>Account Name: {this.props.accountData.accountName}</h3>
				<h3>Current Balance: {this.state.balance}</h3>
				<h4>Add account funds:</h4>
				<input id="depositInput" type="number"/>
				<button className="btns" id="depositBtn" type="button" onClick={this.depositClick}>Submit</button>
				<h4>Withdraw account funds:</h4>
				<input id="withdrawInput" type="number"/>
				<button className="btns" id="wdBtn" type="button" onClick={this.withdrawClick}>Submit</button>
				<br /><br />
			</div>
		);
	};
};

export default AccountComp;