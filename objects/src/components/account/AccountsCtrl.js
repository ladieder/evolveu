import Account from "./Account";

class AccountsCtrl {
	constructor() {
		this.accountList = [];
		this.counter = 1;
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
		return (this.accountList.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.balance;
		}, 0));	
	};

	maxAccount() {
		if (this.accountList.length > 0) {
			// let maxID = this.accountList[0].accountID;
			let maxBalance = this.accountList[0].balance;
			this.accountList.forEach(item => {
				if (item.balance > maxBalance) {
					maxBalance = item.balance;
					// maxID = item.accountID;
				};
			});
			return maxBalance;
		};
	}; 

	minAccount() {
		if (this.accountList.length > 0) {
			// let minID = this.accountList[0].accountID;
			let minBalance = this.accountList[0].balance;
			this.accountList.forEach(item => {
				if (item.balance < minBalance) {
					minBalance = item.balance;
					// minID = item.accountID;
				};
			});
			return minBalance;
		};
	}; 
};
		
export default AccountsCtrl;