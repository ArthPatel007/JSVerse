// promises

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is completed");
  }, 1000);
  resolve();
});

myPromise.then(function () {
  console.log("Success");
});

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

  