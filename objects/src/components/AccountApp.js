import React, { Component } from 'react';

import AccountsCtrl from "./AccountsCtrl";
import AccountCardComp from "./AccountCardComp";
import AccountComp from "./AccountComp";

import './AccountApp.css';

class AccountApp extends Component {
	constructor() {
		super();
		this.ctrl = new AccountsCtrl();
		this.state = {
			ctrl: this.ctrl,
			displayID: null
		}
		this.addAccountClick = this.addAccountClick.bind(this);
		this.mngAccountClick = this.mngAccountClick.bind(this);
		this.deleteAccountClick = this.deleteAccountClick.bind(this);
		this.updateBalance = this.updateBalance.bind(this);
	};

	deleteAccountClick(e) {
		const idDelete = Number((e.target.id).slice(3, e.target.id.length));
		const indexDelete = this.ctrl.accountList.findIndex(item => item.accountID === idDelete)
		this.ctrl.deleteAccount(indexDelete);
		this.setState({ctrl: this.ctrl});
	}

	mngAccountClick(e) {
		const idMng = Number((e.target.id).slice(3, e.target.id.length));
		const indexMng = this.ctrl.accountList.findIndex(item => item.accountID === idMng)
		this.setState({displayID: indexMng});
	}

	addAccountClick() {
		this.ctrl.addAccount(null, "new account", "default user");
		this.setState({ctrl: this.ctrl});
	};

	updateBalance() {
		this.setState({ctrl: this.ctrl});
	}

	render() {
		const accountCard = this.state.ctrl.accountList.map(item => {
			return (
				<li className="accountCard" key={item.accountID}>
					<AccountCardComp 
						accountData={item} 
						mngBtn={this.mngAccountClick} 
						delBtn={this.deleteAccountClick}
					/>
				</li>
			);
		});

		return(
			<div>
				<h1>EvolveU Bank</h1>
				<h3>Total of Account Balances: {this.state.ctrl.total}</h3>
				<h3>Max Account: {this.state.ctrl.max.balance}</h3>
				<h3>Min Account: {this.state.ctrl.min.balance}</h3>

				{this.state.displayID !== null ? 
					<AccountComp 
						accountData={this.ctrl.accountList[this.state.displayID]} 
						accountID={this.state.displayID}
						updateBalance={this.updateBalance} 
					/> 
				: ""}

				<button id="addBtn" type="button" onClick={this.addAccountClick}>Add Account</button>
				<h2 className="accountsHeader">List of All Accounts</h2>
				<ul className="cardList">{accountCard}</ul>
	
				<br /><br />
			</div>
		);
	};
};

export default AccountApp;