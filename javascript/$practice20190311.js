function assertEquals(parm1, parm2) {
	if(parm1 === parm2) {
		console.log("ok ->", parm1);
		return true;
	}
	console.log("*** the two values are not the same");
	console.log("p1-->", parm1);
	console.log("p2-->", parm2);
}

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");