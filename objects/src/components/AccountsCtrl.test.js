import AccountsCtrl from "./AccountsCtrl";

test("test controller", () => {
	const accountCtrl = new AccountsCtrl();
	expect(accountCtrl.accountList.length).toBe(0);

	console.log("test add account");
	accountCtrl.addAccount(0, 25, "checkingAccount", "User1");
	expect(accountCtrl.accountList.length).toBe(1);
	expect(accountCtrl.accountList[0].balance).toBe(25);
	expect(accountCtrl.accountList[0].accountName).toBe("checkingAccount");
	expect(accountCtrl.accountList[0].userName).toBe("User1");

	console.log("test add another account");
	accountCtrl.addAccount(1, 50, "checkingAccount", "User2");
	expect(accountCtrl.accountList.length).toBe(2);
	console.log(accountCtrl.accountList[0]);
	console.log(accountCtrl.accountList[1]);

	console.log("test delete account");
	accountCtrl.deleteAccount(1);
	console.log(accountCtrl.accountList[0]);
	console.log(accountCtrl.accountList[1]);
	// expect(accountCtrl.accountList.length).toBe(1);
});
