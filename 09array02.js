const normal_Car = ["MS", "TATA", "HONDA"];
const Luxury_Car = ["RR", "Land Rover", "Porsche"];

normal_Car.push(Luxury_Car);

// console.log(normal_Car);
// console.log(normal_Car[3][0]);

const all_Car = normal_Car.concat(Luxury_Car);
// console.log(all_Car);

const new_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]];

const real_new_Array = new_Array.flat(Infinity);
console.log(real_new_Array);

console.log(Array.isArray("Arth"));
console.log(Array.from("Arth"));
console.log(Array.from({ name: "Arth" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
