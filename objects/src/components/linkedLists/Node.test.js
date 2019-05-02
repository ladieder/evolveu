import Node from "./Node";

test("test Node class", () => {

	console.log("test Node instantiation");
	let testNode = new Node("testSubject", "testAmount");
	expect(testNode.subject).toBe("testSubject");
	expect(testNode.amount).toBe("testAmount");
	expect(testNode.prev).toBe(null);
	expect(testNode.next).toBe(null);
	console.log("testNode", testNode);

	console.log("test show method");
	console.log(testNode.show());

	}
);
