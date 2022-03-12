export function createLayout(){
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


const footerElement = document.querySelector("footer");

footerElement.innerHTML += `<div class="footer-div-1">
                              <div class="footer-nav">
                              <a href="/index.html" class="cta">Home</a>
                              <a href="/public/pages/contact.html" class="cta">Contact</a>
                              </div>
                              <label>Copyright Christopher Tønnesland 2022</label>
                          </div>`;

}