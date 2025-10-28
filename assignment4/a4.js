function sortArray(array) {
  return array.sort((a, b) => a - b);
}

const numbers = [10, 5, 6, 4, 8, 2, 1, 9, 3, 7];
console.log("Original Array: ", numbers);
document.getElementById("output").innerHTML += "Original Array: " + numbers.join(", ") + "<br>";

const sortedNumbers = sortArray(numbers);
console.log("Sorted Array: ", sortedNumbers);
document.getElementById("output").innerHTML += "Sorted Array: " + sortedNumbers.join(", ") + "<br>";
