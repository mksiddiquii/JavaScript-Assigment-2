
const addFive = createAdder(5);
function createAdder(numberToAdd) {
  return 
  function (num) {
    return num + numberToAdd;
  }
}





console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25
console.log(addFive(7));  // Output: 12
