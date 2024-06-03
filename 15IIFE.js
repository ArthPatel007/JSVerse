(function () {
  console.log(`this`);
})();

// (function () {
//   console.log(`this`);
// })();

((name) => {
  console.log(`Db is conn${name}`);
})("arth");
