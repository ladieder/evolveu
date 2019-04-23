import Account from "./Account";

class AccountsCtrl {
	constructor() {
		this.accountList = [];
		this.counter = 1;
		this.total = null;
		this.max = {accountID: null, balance: null, accountName: "", userName: ""}
		this.min = {accountID: null, balance: null, accountName: "", userName: ""}
	};

	addAccount(startingBalance, accountName, userName) {
		const newAccount = new Account (this.counter, startingBalance, accountName, userName);
		this.accountList.push(newAccount);
		this.counter ++;
	};

	//could change to splice, would be cleaner
	deleteAccount(idDelete) {
		const result = this.accountList.filter(item => {
			return item.accountID !== idDelete;
		});
		this.accountList = result;
	};
	
	//need to have return for test to work --- fix!!!
	totalAccounts() {
		this.total = (this.accountList.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.balance;
		}, 0));	
	};

	maxAccount() {
		if (this.accountList.length > 0) {
			let maxID = this.accountList[0].accountID;
			let maxBalance = this.accountList[0].balance;
			this.accountList.forEach(item => {
				if (item.balance > maxBalance) {
					maxBalance = item.balance;
					maxID = item.accountID;
				};
			});
			this.max.accountID = maxID;
			this.max.balance = maxBalance;
			console.log("max", this.max.accountID);
		};
	}; 

	minAccount() {
		if (this.accountList.length > 0) {
			let minID = this.accountList[0].accountID;
			let minBalance = this.accountList[0].balance;
			this.accountList.forEach(item => {
				if (item.balance < minBalance) {
					minBalance = item.balance;
					minID = item.accountID;
				};
			});
			this.min.accountID = minID;
			this.min.balance = minBalance;
		};
	}; 
};
		
export default AccountsCtrl;