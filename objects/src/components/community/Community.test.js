import Community from "./Community";

test("test CommunityApp methods", () => {
	console.log("instantiate testCommunity from Community class");
	const testCommunity = new Community;

	console.log("test createCity method");
	testCommunity.createCity("Calgary", 51, 114, 1239000);
	expect(testCommunity.cityList.length).toBe(1);
	expect(testCommunity.cityList[0].name).toBe("Calgary");

	console.log("test deleteCity method");
	testCommunity.deleteCity("Calgary");
	expect(testCommunity.cityList.length).toBe(0);

	console.log("test whichSphere method");
	testCommunity.createCity("Calgary", 51, 114, 1239000);
	expect(testCommunity.whichSphere(testCommunity.cityList[0].lat)).toBe("northern");

	console.log("test getMostNorthern method");
	testCommunity.createCity("Edmonton", 53, 113, 93200);
	expect(testCommunity.getMostNorthern()).toBe("Edmonton");

	console.log("test getMostSouthern method");
	expect(testCommunity.getMostSouthern()).toBe("Calgary");

	console.log("test getPopulation method");
	expect(testCommunity.getPopulation()).toBe(1332200);
});