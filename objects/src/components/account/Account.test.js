import Account from "./Account";

test("test create new account", () => {
	const newAccount = new Account (1, 25, "checkingAccount", "User");
	expect(newAccount.accountID).toBe(1);
	expect(newAccount.balance).toBe(25);
	expect(newAccount.accountName).toBe("checkingAccount");
	expect(newAccount.userName).toBe("User");

	console.log("test deposit $10");
	newAccount.deposit(10);
	expect(newAccount.balance).toBe(35);

	console.log("test withdraw $30");
	newAccount.withdraw(30);
	expect(newAccount.balance).toBe(5);	
});