const date = new Date();
const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
const time = (document.getElementById("time").innerText = "Today: " + today);
const listCountry = document.querySelector(".listCountry");

const dropdownBtn = document.querySelector("#dropdownBtn");
const dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click", (e) => {
  dropdown.classList.toggle("hide");
});

