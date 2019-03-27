console.log("I'm in test");
let a = [1,3,5,7,8,3];
console.log("a -->", a);
function arTest(p1,p2,p3) {
	console.log(p1,p2,p3);
}
arTest(a);

console.log(a.forEach(arTest()));
