const baseURL = "http://localhost:5005/digimons";

const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")[0];

window.addEventListener("load", dayNightMode);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") loadImg();
});

function loadImg() {
  removeImg();

  const url = `${baseURL}/` + input.value;

  fetch(url).then((response) => {
    console.log(url);
    // if (response.ok) return response.json();
    // else alert(response.status);
  });

  // .then((data) => {
  //   const imageNodes = [];
  //   for (let i = 0; i < data.results.length; i++) {
  //     imageNodes[i] = document.createElement("div");
  //     imageNodes[i].className = "img";
  //     imageNodes[i].style.backgroundImage = "url";
  //     imageNodes[i].addEventListener("dblclick", function () {
  //       window.open(data.results[i].links.download, "_blankk");
  //     });

  //     grid.appendChild(imageNodes[i]);
  //   }
  // });
}

function removeImg() {
  grid.innerHTML = "";
}

function dayNightMode() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 7 && hour <= 19) {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}
