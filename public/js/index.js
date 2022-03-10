// Importing base script for api
import { apiFetch } from "./api/api.js";

// Importing components for the page
import { displayMessage } from "./components/messages.js";

displayMessage();

const platformArray = await apiFetch("shooter", 5);
platformArray.map((games) => {
 const platforms = games.platforms;
 platforms.map((platformName) => {
  const name = platformName.name;
  return;
 });
 return;
});

const headerElement = document.querySelector("header");
const logo = document.querySelector("#logo");
logo.innerHTML = `<a href="/index.html">
<div class="ratio-box">
  <img src="/public/assets/logo/GameHub_Logo4.png" class="image"/>
</div>
</a>`;

const nav = document.querySelector("#navigation");
nav.innerHTML = `<nav class="navigation" role="navigation">
<div class="nav-div-1">
  <a href="" class="nav-link"><i class="fa-solid fa-cart-shopping"></i></a>
</div>
<div class="nav-div-2">
<a href="/index.html" class="nav-link"><i class="fa-solid fa-house"></i>Home</a>
<a href="/public/pages/list_details.html" class="nav-link"><i class="fa-solid fa-gamepad"></i>Our Games</a>
<a href="/public/pages/contact.html" class="nav-link"><i class="fa-solid fa-house-user"></i>Login / Sign up</a>
</div>
</nav>`;

const gameGallery = document.querySelector(".display-games");

// Game mapping Shooter
const shooter = await apiFetch("shooter", 1);
shooter.forEach((game) => {
 const test = document.querySelector("#game_section_1");
 test.innerHTML += `<div class="card" style="background: url(${game.background_image}); background-size: cover; 
 background-repeat: no-repeat;">
<div class="card-content">
 <h2 class="card-title">${game.name}</h2>
 <p class="card-body">${game.updated}</p>
 <a href="" class="cta">See more info</a>
</div>
</div>`;
});
console.log(shooter);

// Game mapping adventure
const adventure = await apiFetch("adventure", 5);
adventure.forEach((game) => {
 const test = document.querySelector("#game_section_2");
 test.innerHTML += `<div class="card" style="background: url(${game.background_image}); background-size: cover; 
 background-repeat: no-repeat;">
 <div class="card-content">
  <h2 class="card-title">${game.name}</h2>
  <p class="card-body">${game.updated}</p>
  <a href="" class="cta">See more info</a>
 </div>
 </div>`;
});

// Game mapping action
const action = await apiFetch("action", 10);
action.forEach((game) => {
 const test = document.querySelector("#game_section_3");
 test.innerHTML += `<div class="card" style="background: url(${game.background_image}); background-size: cover; 
 background-repeat: no-repeat;">
 <div class="card-content">
  <h2 class="card-title">${game.name}</h2>
  <p class="card-body">${game.updated}</p>
  <a href="" class="cta">See more info</a>
 </div>
 </div>`;
});

const footerElement = document.querySelector("footer");

footerElement.innerHTML += `<div class="footer-div-1">
                              <div class="footer-nav">
                              <a href="/index.html" class="cta">Home</a>
                              <a href="/public/pages/contact.html" class="cta">Contact</a>
                              </div>
                              <label>Copyright Christopher Tønnesland 2022</label>
                          </div>`;
