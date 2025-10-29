const numbers = [];
let done = false;

while (!done) {
  const input = prompt("Enter a number (or type 'done' to finish): ");
  if (input.toLowerCase() === 'done') {
    done = true;
  } else {
    const num = Number(input);
    numbers.push(num);
  }
}

document.getElementById('output').innerHTML +=
  'Numbers: ' + numbers.join(', ') + '<br>';

const evenNumbers = [];
for (let num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

if (evenNumbers.length === 0) {
  document.getElementById('output').innerHTML += 'No even numbers found.<br>';
} else {
  document.getElementById('output').innerHTML +=
    'Even Numbers: ' + evenNumbers.join(', ') + '<br>';
}

// const evenNumbers = numbers.filter(num => num % 2 === 0);
