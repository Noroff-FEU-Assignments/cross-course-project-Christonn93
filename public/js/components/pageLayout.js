// Importing base script for api
import { apiFetch } from "../api/api.js";

// storage for later 

{/* <li class="nav-li"><a href="/public/pages/list_details.html"  class="cta disabled"><i class="fa-solid fa-gamepad"></i>Our Games</a></li> */}
{/* <li class="nav-top"><a href="/public/pages/userSetup.html"  class="cta disabled"><i class="fa-solid fa-house-user"></i>Sign up</a></li> */}
{/* <li class="nav-top"><a href="/public/pages/login.html"  class="cta disabled"><i class="fa-solid fa-house-user"></i>Log in</a></li> */}


// Page header
export function createHeader() {
 const headerElement = document.querySelector("header");
 headerElement.innerHTML = `
  <nav class="navigation" id="navigation" role="navigation">
  <ul class="logo">
    <li id="logo"><a href="/index.html"><div class="ratio-box"><img src="/public/assets/logo/GameHub_Logo4.png" class="image"/></div></a></li>
    </ul>
    <ul class="menu">
    <li class="nav-li"><a href="/index.html"  class="cta"><i class="fa-solid fa-house"></i>Home</a></li>
    <li class="nav-li"><a href="#"  class="cta disabled"><i class="fa-solid fa-gamepad"></i>Our Games</a></li>
    <li class="nav-top"><a href="#"  class="cta disabled"><i class="fa-solid fa-house-user"></i>Sign up</a></li>
    <li class="nav-top"><a href="#"  class="cta disabled"><i class="fa-solid fa-house-user"></i>Log in</a></li>
    <li class="toggle"><a href="#" class="cta"><i class="fas fa-bars"></i></a></li>
    <li class="nav-li" id="chart"><a href="/public/pages/checkout.html"  class="cta"><i class="fa-solid fa-cart-shopping"></i></a></li>
  </ul>
  </nav>`;
}

// top section Index
export function createIndexInfo() {
 // Top section
 const section_1 = document.querySelector("#section_1");
 section_1.innerHTML = `<div class="text-box">
                             <h1>Welcome to GameHub, The universe of games.</h1>
                                 <p> Here you will find a range of pc games. you want a old or new game? A super good deal or a pre-release game?</p> 
                                 <p>Maybe you want to sell a old game you have dusting in the corner? You came to the right place! Thanks for choosing GameHub for your place to get your games or to clear space in your shelf</p>
                         </div>`;
}

// Page footer
export function createFooter() {
 const footerElement = document.querySelector("footer");

 footerElement.innerHTML += `<div>
                              <ul>
                                <li><a href="/index.html" class="cta">Home</a></li>
                                <li><a href="/public/pages/contact.html" class="cta">Contact</a></li>
                              </ul>                              
                              <label><i class="fa-solid fa-copyright"></i> Copyright Christopher Tønnesland 2022</label>
                            </div>`;
}

// Page banners
export function CreateBanner() {
 const banner1 = document.querySelector("#banner");
 const banner2 = document.querySelector("#banner_2");

 banner1.innerHTML = `<div class="banner-header">
                        <h3>Banner header</h3>
                      </div>
                      <div class="banner-body">
                        <img src="https://free-images.com/tn/8f1a/lake_mirror_reflection_yosemite.jpg" />
                        <p>Banner content</p>
                        <a href="" class="cta">Link</a>
                      </div>`;

 banner2.innerHTML = `<div class="banner-header">
                        <h3>Banner header</h3>
                      </div>
                      <div class="banner-body">
                        <img src="https://free-images.com/tn/8f1a/lake_mirror_reflection_yosemite.jpg" />
                        <p>Banner content</p>
                        <a href="" class="cta">Link</a>
                      </div>`;
}

// Section factory
function contentFactory(tagName = 'div', classNames = [], children = []) {
  const tag = document.createElement(tagName);
  tag.classList.add(...classNames);
  tag.append(...children);
  return tag
}


// QuerySelector Factory
function querySelectorFactory(tagName, genre, title) {
  const container = document.querySelector(tagName);
  const header = document.createElement("h2");
  header.classList.add("genre-title");
  header.innerText = title;
  const viewMore = document.createElement("a");
  viewMore.innerText = `View more games`;
  viewMore.classList.add("cta");
  container.append(header)
  genre.forEach((game) => {
    container.innerHTML += `<div class="card" style="background-image: url(${game.background_image}); background-size: cover; 
    background-repeat: no-repeat;">
    <div class="card-content">
    <h2 class="card-title">${game.name}</h2>
    <p class="card-body">${game.updated}</p>
    <a href="./public/pages/game_details.html?id=${game.id}" class="cta">See more info</a>
    </div>
    </div>`
  });
  const onlyNames = []
genre.forEach((gameGenre) => {
  const genre = gameGenre.genres[0].name
  onlyNames.push(genre);
})
  viewMore.href = `/public/pages/list_details.html?genres=${onlyNames}`
  container.append(viewMore);
  return container
}


// Game Gallery display
export async function createGameGallery() {
 const adventure = await apiFetch("adventure", 5);
 const shooter = await apiFetch("shooter", 1);
 const action = await apiFetch("action", 10);
 const simulation = await apiFetch("simulation", 15);

 // Game mapping Shooter
 querySelectorFactory("#game_section_1", shooter, "Shooter");

 // Game mapping adventure
 querySelectorFactory("#game_section_2", adventure, "Adventure");

 // Game mapping action
 querySelectorFactory("#game_section_3", action, "Action");

  // Game mapping Simulation
 querySelectorFactory("#game_section_", simulation, "Simulation");
}

export function pageLoader() {
 // Setting up the html
 const infoContainer = document.querySelector(".main-container");
 const newDiv = document.createElement("div");
 infoContainer.append(newDiv);
 newDiv.innerHTML = `
  <div class="loading">
  <svg viewBox="-2000 -1000 4000 2000">
  <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
  <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>
  </div>`;
}

// Changing page title when
export function pageTitle() {
 const pageTitle = document.title;
 const attentionMessage = "*Come Back!";
 const blinkEvent = null;

 document.addEventListener("visibilitychange", function (e) {
  const isPageActive = !document.hidden;

  if (!isPageActive) {
   blink();
  } else {
   document.title = pageTitle;
   clearInterval(blinkEvent);
  }
 });

 function blink() {
  blinkEvent = setInterval(function () {
   if (document.title === attentionMessage) {
    document.title = pageTitle;
   } else {
    document.title = attentionMessage;
   }
  }, 100);
 }
}
