import "../src/scss/main.scss";

const container = document.querySelector(".form-container")
const loginLink = document.querySelector("#login")
const signUpLink = document.querySelector("#signup")
const btnLoginPopup = document.querySelector(".btnLogin-popup")
const closeLogin = document.querySelector(".form-close")
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

//=============MENU HAMBURGER==================
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  links.classList.toggle("active");
});

loginLink.addEventListener("click" , ()=>{
  container.classList.remove("active")
})

signUpLink.addEventListener("click" , ()=>{
  container.classList.add("active")
})

btnLoginPopup.addEventListener("click" , ()=>{
  container.classList.add("active-popup")
})

closeLogin.addEventListener("click" , ()=>{
  container.classList.remove("active-popup")
})