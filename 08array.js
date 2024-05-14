// const marvelHeroes = ["thor", "Ironman", "spiderman"];
// const dcHeroes = ["superman", "flash", "batman"];

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const realAnotherArray = [].concat(...anotherArray);
// console.log(realAnotherArray);

// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.from("Hitesh").join(""));
// console.log(Object.values({ name: "hitesh" }));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// const scores = [score1, score2, score3];
// console.log(scores);

// function convertToJSON(value) {
//     return JSON.stringify(value);
//   }
  
//   // Example usage:
//   const obj = { name: "John", age: 30, city: "New York" };
//   const jsonString = convertToJSON(obj);
//   console.log(jsonString);
  
// function deepCopyWithCircular(obj, originalObjects = new WeakMap(), copies = new WeakMap()) {
//     // Handle primitives and non-object types
//     if (obj === null || typeof obj !== 'object') {
//       return obj;
//     }
  
//     // Check if obj has been visited before
//     if (originalObjects.has(obj)) {
//       return copies.get(obj);
//     }
  
//     // Create a new object or array to hold the copied values
//     let copy = Array.isArray(obj) ? [] : {};
  
//     // Remember the original object and its copy to handle circular references
//     originalObjects.set(obj, true);
//     copies.set(obj, copy);
  
//     // Copy each property recursively
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         copy[key] = deepCopyWithCircular(obj[key], originalObjects, copies);
//       }
//     }
  
//     return copy;
//   }
  
//   // Example usage:
//   const obj1 = { name: "John", age: 30 };
//   obj1.self = obj1; // Circular reference
//   const obj2 = deepCopyWithCircular(obj1);
//   console.log(obj2);
  