import Node from "./Node";

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.current = null;
		this.size = 0;
	}

	firstNode() {
		if (this.size > 0) {
			this.current = this.head;
		}
	}

	lastNode() {
		if (this.size > 0) {
			this.current = this.tail;
		}
	}

	nextNode() {
		if (this.size > 0 && this.current.next != null) {
			this.current = this.current.next;
		}
	}

	previousNode() {
		if (this.size > 0 && this.current.prev != null) {
			this.current = this.current.prev;
		}
	}

	insertNode(subject, amount) {
		const node = new Node(subject, amount);

		// evaluates to TRUE if head is null (linked list is empty)
		// head, tail and current are all equal to the new node
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} 
		// else linked list not empty
		// append new node after current node
		// current is new node
		  else {
		  	node.prev = this.current;

		  	if (this.current.next === null) {
				// node.next is null by default so don't need to assign
				this.current.next = node;
				this.tail = node;
			} else {
				node.next = this.current.next;
				this.current.next.prev = node;
				this.current.next = node;
			} 
		}

		this.current = node;
		this.size ++;
	}

	deleteNode() {
		if (this.head != null) {
			// if delete one and only node reset everything to null
			if (this.size === 1) {
				this.head = null;
				this.tail = null;
				this.current = null;
			} else {
				// if delete tail node
				if (this.current.next === null) {
					this.current.prev.next = null;
					this.tail = this.current.prev;
					this.current = this.current.prev;
				// else if delete head node
				} else if (this.current.prev === null) {
					this.current = this.current.next;
					this.current.prev = null;
					this.head = this.current;
				// else delete a node between two nodes
				} else {
					this.current.prev.next = this.current.next;
					this.current.next.prev = this.current.prev;
					this.current = this.current.next;
				}
			}

			this.size --;
		}
	}

	totalNodes() {
		if (this.head != null) {
			let counter = 0;
			let total = 0;
			let traverser = this.head;

			for (counter = 0 ; counter < this.size ; counter++) {
				total += traverser.amount;
				traverser = traverser.next;
			}
			return total;
		} else {
			return "error - linked list is empty"
		}
	}
}

export default LinkedList;