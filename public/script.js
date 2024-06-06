const date = new Date();
const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
const time = (document.getElementById("time").innerText = "Today: " + today);
const listCountry = document.querySelector(".listCountry");
//get two pages class
const loginPage = document.querySelector(".loginPage");
const createAccount = document.querySelector(".createAccount");
//get two button
const loginBtn = document.querySelector(".login-btn");
const create_account_btn = document.querySelector(".create-account-btn");

const dropdownBtn = document.querySelector("#dropdownBtn");
const dropdown = document.querySelector(".dropdown");

document.cookie.split("=")[1]
  ? (loginBtn.innerHTML = "Logout")
  : (loginBtn.innerHTML = "Login");

dropdownBtn.addEventListener("click", (e) => {
  if (document.cookie.split("=")[1]) {
    dropdown.classList.toggle("hide");
  } else {
    alert("Please Login first");
  }
});

loginBtn.addEventListener("click", () => {
  if (loginBtn.innerHTML === "Login") {
    loginPage.classList.toggle("hide");
  } else {
    document.cookie = "myCookie" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    loginBtn.innerHTML="Login";
  }
});
create_account_btn.addEventListener("click", () => {
  createAccount.classList.toggle("hide");
});
