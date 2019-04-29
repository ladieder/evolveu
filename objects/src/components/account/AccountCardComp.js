import React, { Component } from 'react';

class AccountCardComp extends Component {

	render() {
		return (
			<div className="accountCards">
				<h3>{this.props.accountData.accountName}</h3>
				<h4>Account ID: {this.props.accountData.accountID}</h4>
				<h4>Account Balance: ${this.props.accountData.balance}</h4>
				<button className="btns" type="button" id={"mng"+this.props.accountData.accountID} onClick={this.props.mngBtn}>Manage Account</button>
				<button className="btns" type="button" id={"del"+this.props.accountData.accountID} onClick={this.props.delBtn}>Delete Account</button>
			</div>
		);
	}
}

export default AccountCardComp;