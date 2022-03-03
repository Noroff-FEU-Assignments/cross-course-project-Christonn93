export function headerLayout() {
  const headerElement = document.querySelector("header");

  headerElement.innerHTML += `<div class="ratio-box">
    <img src="/public/assets/logo/GameHub_Logo4.png" class="image"/>
    </div>
  <nav class="navigation" role="navigation">
    <div class="nav-div-1">
      <a href="" class="nav-link"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
    <div class="nav-div-2">
    <a href="/index.html" class="nav-link"><i class="fa-solid fa-house"></i>Home</a>
    <a href="/public/pages/list_details.html" class="nav-link"><i class="fa-solid fa-gamepad"></i>Our Games</a>
    <a href="/public/pages/contact.html" class="nav-link"><i class="fa-solid fa-house-user"></i>Login / Sign up</a>
  </div>
</nav>`;
}

export function mainLayout(page) {
  const image = "https://via.placeholder.com/500x500?text=Image+not+found";

  const mainElement = document.querySelector("main");
  const innerDiv = document.createElement("div");
  mainElement.append(innerDiv);

  innerDiv.innerHTML += `<div class="container">
                                <h2>Buttons</h2>
                                <div class="display__container">
                                <button class="btn btn__primary">Primary</button>
                                <button class="btn btn__warning">Warning</button>
                                <button class="btn btn__info">Info</button>
                                </div>
                            </div>
                        
                        <div class="container">
                          <h2>Cards</h2>
                          <div class="display__container">
                            <div class="card__standard">
                              <div class="card__header">
                                <h3>Card header</h3>
                              </div>
                              <div class="ratio-box">
                                <img src="${image}" class="image" />
                              </div>
                              <div class="card__textarea">
                                <p>Card information</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="container">
                        <h2>List</h2>
                        <div class="display__container">
                          <div class="list unordered__list">
                            <h4>List header - Unordered list</h4>
                            <ul>
                              <li>Item 1</li>
                              <li>Item 2</li>
                              <li>Item 3</li>
                              <li>Item 4</li>
                            </ul>
                          </div>
              
                          <div class="list ordered__list">
                            <h4>List header - Ordered list</h4>
                            <ol>
                              <li>Item 1</li>
                              <li>Item 2</li>
                              <li>Item 3</li>
                              <li>Item 4</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                        
                      <div class="container">
                      <h2>Article</h2>
                      <div class="display__container">
                      <article>
                      <p>This is an article</p>
                      </article> 
                  </div>
                </div>`;
}

export function formLayout() {}

export function sidebar() {}

export function gameDisplay() {}

export function textBox() {
  const textBox = document.querySelector(".text-box");
  textBox.innerHTML = `<div class="text-box">
  <div class="header">
    <h1>Welcome to GameHub, The universe of games.</h1>
  </div>
  <div>
    <p>
      Here you will find a range of pc games.
      you want a old or new game? A super good deal or a pre-release game?
      Maybe you want to sell a old game you have dusting in the corner? You came to the right place!</p>
      <p>
        Thanks for choosing GameHub for your place to get your games or to clear space in your shelf
      </p>
    </div>
</div>`;
}

export function footerLayout() {
  const footerElement = document.querySelector("footer");

  footerElement.innerHTML += `<div class="footer-div-1">
                                <div class="footer-nav">
                                <a href="/index.html" class="cta">Home</a>
                                <a href="/public/pages/contact.html" class="cta">Contact</a>
                                </div>
                                <label>Copyright Christopher Tønnesland 2022</label>
                            </div>`;
}
