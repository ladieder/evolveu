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
			displayIndex: null
		}
		this.addAccountClick = this.addAccountClick.bind(this);
		this.mngAccountClick = this.mngAccountClick.bind(this);
		this.deleteAccountClick = this.deleteAccountClick.bind(this);
		this.closeWindowClick = this.closeWindowClick.bind(this);
		this.updateAccount = this.updateAccount.bind(this);
	};

	deleteAccountClick(e) {
		const idDelete = Number((e.target.id).slice(3, e.target.id.length));
		this.ctrl.deleteAccount(idDelete);
		this.setState({ctrl: this.ctrl});
	}

	mngAccountClick(e) {
		const idMng = Number((e.target.id).slice(3, e.target.id.length));
		const indexMng = this.ctrl.accountList.findIndex(item => item.accountID === idMng)
		this.setState({displayIndex: indexMng});
	}

	addAccountClick() {
		this.ctrl.addAccount(null, "new account", "default user");
		this.setState({ctrl: this.ctrl});
	};

	closeWindowClick() {
		this.setState({displayIndex: null});
	};

	updateAccount() {
		this.setState({ctrl: this.ctrl});
		// this.setState({displayIndex: this.displayIndex});
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
				{/* what is diff b/w this.ctrl and this.state.ctrl???? */}
				<h3>Total of Account Balances: {this.ctrl.totalAccounts()}</h3>
				<h3>Max Account: {this.ctrl.maxAccount()}</h3>
				<h3>Min Account: {this.ctrl.minAccount()}</h3>

				{this.state.displayIndex !== null ? 
					<AccountComp 
						accountData={this.ctrl.accountList[this.state.displayIndex]} 
						displayIndex={this.state.displayIndex}
						updateAccount={this.updateAccount} 
						closeWindowClick={this.closeWindowClick} 
					/> 
				: ""}

				<button className="btns" id="addBtn" type="button" onClick={this.addAccountClick}>Add Account</button>
				<h2 className="accountsHeader">List of All Accounts</h2>
				<ul className="cardList">{accountCard}</ul>
	
				<br /><br />
			</div>
		);
	};
};

export default AccountApp;