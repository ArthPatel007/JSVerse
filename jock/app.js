// const url = "https://api.chucknorris.io/jokes/random";

// handle this end point with XMLHttpRequest

// const displayJoke = document.getElementById("display-joke");

// const getJoke = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       displayJoke.innerHTML = response.value;
//     }
//   };

//   xhr.send();
// };

// document.getElementById("getJoke").addEventListener("click", getJoke);

// getJoke();

// handle this end point with promises

// const displayJoke = document.getElementById("display-joke");

// const getJoke = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       displayJoke.innerHTML = data.value;
//     });
// };

// document.getElementById("getJoke").addEventListener("click", getJoke);

// handle the case of race condition

const displayJoke = document.getElementById("display-joke");

const getJoke = async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayJoke.innerHTML = data.value;
};

document.getElementById("getJoke").addEventListener("click", getJoke);


const url = 'https://api.thecatapi.com/v1/images/search';

// get Get Random Cat when btn clike

const getCat = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const img = document.createElement('img');
      img.src = data[0].url;
      displayJoke.appendChild(img);
    });
};

document.getElementById('getCat').addEventListener('click', getCat);

