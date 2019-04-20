class Account {
	constructor(id, startingBalance, accountName, userName) {
		this.id = id;
		this.balance = startingBalance;
		this.accountName = accountName;
		this.userName = userName;
	};

	deposit(depAmount) {
		this.balance += depAmount;
		return this.balance;
	};

	withdraw(wdAmount) {
		this.balance -= wdAmount;
		return this.balance;
	};

}

export default Account;