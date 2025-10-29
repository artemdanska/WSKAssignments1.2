function sortArray(array, order) {
  if (order === 'asc') {
    return array.sort((a, b) => a - b);
  } else if (order === 'desc') {
    return array.sort((a, b) => b - a);
  }
}

const numbers = [10, 5, 6, 4, 8, 2, 1, 9, 3, 7];
console.log('Original Array: ', numbers);
document.getElementById('output').innerHTML +=
  'Original Array: ' + numbers.join(', ') + '<br>';

const sortedNumbersAsc = sortArray(numbers, 'asc');
console.log('Sorted Array: ', sortedNumbersAsc);
document.getElementById('output').innerHTML +=
  'Ascending order: ' + sortedNumbersAsc.join(', ') + '<br>';

const sortedNumbersDesc = sortArray(numbers, 'desc');
console.log('Sorted Array: ', sortedNumbersDesc);
document.getElementById('output').innerHTML +=
  'Descending order: ' + sortedNumbersDesc.join(', ') + '<br>';
