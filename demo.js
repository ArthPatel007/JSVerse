// This is a function that takes an array of numbers and returns the sum of all the numbers in the array.
function sum(numbers) {
  // Initialize the sum to 0.
  let sum = 0;

  // Iterate over the array and add each number to the sum.
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Return the sum.
  return sum;
}

// This is a function that takes an array of numbers and returns the average of all the numbers in the array.
function average(numbers) {
  // Get the sum of all the numbers in the array.
  let sum = sum(numbers);

  // Return the sum divided by the number of numbers in the array.
  return sum / numbers.length;
}

// This is a function that takes an array of numbers and returns the median of all the numbers in the array.
function median(numbers) {
  // Sort the array in ascending order.
  numbers.sort((a, b) => a - b);

  // If the array has an even number of elements, return the average of the two middle elements.
  if (numbers.length % 2 === 0) {
    return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
  }

  // If the array has an odd number of elements, return the middle element.
  else {
    return numbers[numbers.length / 2];
  }
}

// This is a function that takes an array of numbers and returns the mode of all the numbers in the array.
function mode(numbers) {
  // Create an object to store the frequency of each number.
  let frequency = {};

  // Iterate over the array and count the frequency of each number.
  for (let i = 0; i < numbers.length; i++) {
    if (frequency[numbers[i]] === undefined) {
      frequency[numbers[i]] = 0;
    }

    frequency[numbers[i]]++;
  }

  // Find the number with the highest frequency.
  let maxFrequency = 0;
  let modeNumber;

  for (let number in frequency) {
    if (frequency[number] > maxFrequency) {
      maxFrequency = frequency[number];
      modeNumber = number;
    }
  }

  // Return the number with the highest frequency.
  return modeNumber;
}

// This is an example of how to use the sum, average, median, and mode functions.
const numbers = [1, 2, 3, 4, 5];

console.log(sum(numbers)); // 15
console.log(average(numbers)); // 3
console.log(median(numbers)); // 3
console.log(mode(numbers)); // 3
