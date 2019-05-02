class Node {
	constructor(subject, amount) {
		this.prev = null;
		this.next = null;
		this.subject = subject;
		this.amount = amount;
	}

	show() {
		return ("subject: " + this.subject + ", amount: " + this.amount);
	}


}

export default Node;