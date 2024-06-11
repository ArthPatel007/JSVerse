//  for each with array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((number) => {
//   console.log(number);
//   return numbers;
// });

// fliter

// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0
// });

// console.log(evenNumbers);

// create a array with object like title of book ,genre,publish,edition 10 object change  genre: "Fiction",
//  publish: "1925", edition: 10

const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: "2005",
    edition: 10,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "history",
    publish: "2006",
    edition: 5,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: "1920",
    edition: 7,
  },
  {
    title: "Brave New World",
    genre: "history",
    publish: "1932",
    edition: 3,
  },
  {
    title: "Pride and Prejudice",
    genre: "history",
    publish: "1813",
    edition: 5,
  },
  {
    title: "Alice's Adventures in Wonderland",
    genre: "Fiction",
    publish: "1865",
    edition: 5,
  },
  {
    title: "The Lord of the Rings",
    genre: "Fiction",
    publish: "1954",
    edition: 3,
  },
  {
    title: "The Hobbit",
    genre: "Fiction",
    publish: "1937",
    edition: 5,
  },
  {
    title: "The Picture of Dorian Gray",
    genre: "Fiction",
    publish: "1890",
    edition: 5,
  },
  {
    title: "The Lord of the Rings",
    genre: "Fiction",
    publish: "1954",
    edition: 3,
  },
];
let userBooks = books.filter((bk) => bk.genre === "history");

userBooks = books.filter((bk) => {
  return (bk.publish >= 2000) & (bk.genre === "history");
});

// console.log(userBooks);

// number array and add 10 each number with map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers
  .map((number) => number + 10)
  .map((number) => number * 10)
  .filter((number) => number > 40);

// console.log(newNumbers);

// reduce ex

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);
