class Account {
	constructor(id, startingBalance, accountName, userName) {
		this.id = id;
		this.balance = startingBalance;
		this.accountName = accountName;
		this.userName = userName;
	};

	deposit(depAmount) {
		this.balance += depAmount;
	};

	withdraw(wdAmount) {
		this.balance -= wdAmount;
	};

}

export default Account;