const date = new Date();
const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
const time = (document.getElementById("time").innerText = "Today: " + today);
const listCountry = document.querySelector(".listCountry");

const dropdownBtn = document.querySelector("#dropdownBtn");
const dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click", (e) => {
  dropdown.classList.toggle("hide");
});
function clickFun(e) {
  // const queryString = e.id; /*new URLSearchParams(e.id).toString();*/
  // const endPoint = `http://localhost:5000/countryCode?country=${queryString}`;
  // fetch(endPoint, {
  //   method: "GET",
  // })
  //   .then()
  //   .then((data) => {})
  //   .catch((err) => {
  //     console.log("Error occure during send data to backend", err);
  //   });
  window.location.replace(`/country?query=${e.id}`);
  dropdown.classList.toggle("hide");
}
