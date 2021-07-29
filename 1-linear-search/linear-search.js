const array = [1,2,3,4,5,6,7,8,9,10,11];
let count = 0;

function linearSearch(array, item) {
  for (i=0; i < array.length; i++) {
    count++; 
    if (array[i] === item) {
      return i;
    }
  }
}

console.log(linearSearch(array, 3))
console.log(`Iterations count: ${count}`)