import React, { Component } from 'react';

class AccountCardComp extends Component {

	render() {
		return (
			<div className="accountCards">
				<h5>{this.props.accountData.accountName}</h5>
				<h5>Account ID: {this.props.accountData.accountID}</h5>
				<h5>Account Balance: ${this.props.accountData.balance}</h5>
				<button className="btns" type="button" id={"mng"+this.props.accountData.accountID} onClick={this.props.mngBtn}>Manage Account</button>
				<button className="btns" type="button" id={"del"+this.props.accountData.accountID} onClick={this.props.delBtn}>Delete Account</button>
			</div>
		);
	}
}

export default AccountCardComp;