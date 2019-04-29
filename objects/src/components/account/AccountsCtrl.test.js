import AccountsCtrl from "./AccountsCtrl";

test("test controller", () => {
	const accountCtrl = new AccountsCtrl();
	expect(accountCtrl.accountList.length).toBe(0);

	console.log("test add account");
	accountCtrl.addAccount(25, "checkingAccount", "User1");
	expect(accountCtrl.accountList.length).toBe(1);
	expect(accountCtrl.accountList[0].accountID).toBe(1);
	expect(accountCtrl.accountList[0].balance).toBe(25);
	expect(accountCtrl.accountList[0].accountName).toBe("checkingAccount");
	expect(accountCtrl.accountList[0].userName).toBe("User1");

	console.log("test add another account");
	accountCtrl.addAccount(50, "checkingAccount", "User2");
	expect(accountCtrl.accountList.length).toBe(2);

	console.log("test delete account");
	accountCtrl.deleteAccount(2);
	expect(accountCtrl.accountList.length).toBe(1);

	console.log("test total accounts");
	console.log("add another account with $100");
	accountCtrl.addAccount(100, "savingAccount", "User2");
	expect(accountCtrl.totalAccounts()).toBe(125);

	console.log("test max account balance");
	expect(accountCtrl.maxAccount()).toBe(100);

	console.log("test min account balance");
	accountCtrl.minAccount();
	expect(accountCtrl.minAccount()).toBe(25);
});
