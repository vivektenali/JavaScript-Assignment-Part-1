//35. Write a functions which checks if all items are unique in the array.

let arr = ["1", "1"];

function areDistinct(arr) {
  let n = arr.length;
  let s = new Set();
  for (let i = 0; i < n; i++) {
    s.add(arr[i]);
  }
  return s.size == arr.length;
}

if (areDistinct(arr)) {
  console.log("All Elements are Distinct");
} else {
  console.log("Not all Elements are Distinct");
}
