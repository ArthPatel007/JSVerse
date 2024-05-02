const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = [].concat(...anotherArray);
console.log(realAnotherArray);

console.log(Array.isArray([1, 2, 3]));
console.log(Array.from("Hitesh").join(""));
console.log(Object.values({ name: "hitesh" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

const scores = [score1, score2, score3];
console.log(scores);