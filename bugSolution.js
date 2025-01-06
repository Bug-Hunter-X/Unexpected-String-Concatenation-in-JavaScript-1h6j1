function foo(a, b) {
  return Number(a) + Number(b);
}
console.log(foo(1, "2")); // Output: 3

function foo2(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(foo2(1, "2")); //Output:3