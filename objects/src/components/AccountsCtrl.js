import Account from "./Account";

class AccountsCtrl {
	constructor() {
		this.accountList = [];
		this.counter = 0;
	};

	addAccount(id, startingBalance, accountName, userName) {
		const newAccount = new Account (id, startingBalance, accountName, userName);
		this.accountList.push(newAccount);
		this.counter ++;
	};

	deleteAccount(id) {
		let result = [];
		console.log("account list", this.accountList);
		result = this.accountList.filter(item => {
			item.id !== id
		})
		console.log(result);
	};

};

export default AccountsCtrl;