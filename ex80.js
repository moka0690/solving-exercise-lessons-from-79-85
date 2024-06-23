// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";
// Method Two
// Create Your Object Here
console.log(objMethodTwo.property); // "Method Two"

function ObjMethodThree() {
  this.property = "Method Three";
}
let objMethodThree = new ObjMethodThree();
// Method Three
// Create Your Object Here
console.log(objMethodThree.property); // "Method Three"

let MethodFour = {
  property: "Method Four",
};
let objMethodFour = Object.create(MethodFour);

// Method Four
// Create Your Object Here
console.log(objMethodFour.property); // "Method Four"
