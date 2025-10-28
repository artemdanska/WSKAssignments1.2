const numbers = [];

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt("Enter number " + i + ": "));
  numbers.push(num);
}

console.log("Numbers: ", numbers)
document.getElementById("output").innerHTML += "Numbers: " + numbers;

const check = Number(prompt("Enter a number to search: "));
if (numbers.includes(check)) {
  console.log("Number found: ", check);
  document.getElementById("output").innerHTML += "<br>Number " + check + " found in the array.";
} else {
  console.log("Number not found: ", check);
  document.getElementById("output").innerHTML += "<br>Number " + check + " not found in the array.";
}

numbers.pop();
console.log("Updated Numbers: ", numbers);
document.getElementById("output").innerHTML += "<br>Updated Numbers: " + numbers;

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers: ", numbers);
document.getElementById("output").innerHTML += "<br>Sorted Numbers: " + numbers;
