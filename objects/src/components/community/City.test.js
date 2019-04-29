import City from "./City";

test("test City class", () => {
	const testCity = new City(1, "Calgary", 51, 114, 1239000);
	expect(testCity.cityID).toBe(1);
	expect(testCity.name).toBe("Calgary");
	expect(testCity.lat).toBe(51);
	expect(testCity.long).toBe(114);
	expect(testCity.pop).toBe(1239000);

	console.log("test show method");
	console.log(testCity.show());

	console.log("test movedIn method");
	testCity.movedIn(100);
	expect(testCity.pop).toBe(1239100);

	console.log("test movedOut method");
	testCity.movedOut(150);
	expect(testCity.pop).toBe(1238950);

	console.log("test howBig method");
	expect(testCity.howBig()).toBe("City");
});

test("test object reference", () => {
	const myCity = new City(99, "Whitefish", 48, 114, 7600);
	const myFav = myCity;
	console.log(myFav.pop, myCity.pop);
	expect(myFav.pop).toBe(myCity.pop);
	myCity.movedIn(1000);
	console.log(myFav.pop, myCity.pop);
	expect(myFav.pop).toBe(myCity.pop);
	myFav.movedOut(2000);
	console.log(myFav.pop, myCity.pop);
	expect(myFav.pop).toBe(myCity.pop);
})