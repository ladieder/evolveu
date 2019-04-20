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
		// console.log(newAccount.id);
		// return newAccount.id;
	};

	//could change to splice, would be cleaner
	deleteAccount(idDelete) {
		const result = this.accountList.filter(item => {
			return item.id !== idDelete;
		});
		this.accountList = result;
	};
		
	totalAccounts() {
		return (this.accountList.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.balance;
		}, 0));	
	};

	maxAccount() {
		if (this.accountList.length > 0) {
			let maxID = this.accountList[0].id;
			let maxBalance = this.accountList[0].balance;
			this.accountList.forEach(item => {
				if (item.balance > maxBalance) {
					maxBalance = item.balance;
					maxID = item.id;
				};
			});
			return maxID;
		};
	}; 

	minAccount() {
		if (this.accountList.length > 0) {
			let minID = this.accountList[0].id;
			let minBalance = this.accountList[0].balance;
			this.accountList.forEach(item => {
				if (item.balance < minBalance) {
					minBalance = item.balance;
					minID = item.id;
				};
			});
			return minID;
		};
	}; 
};
		
export default AccountsCtrl;