export function headerLayout(){
    const headerElement = document.querySelector("header");
    const div = document.createElement("div");
    headerElement.append(div);

    div.innerHTML += `<div class="company__logo">
                                <label>Company name</label>
                            </div>`
}

export function navigationLayout(){
    const headerElement = document.querySelector("header");
    const navigation = document.createElement("div");
    headerElement.append(navigation);

    navigation.innerHTML += `<nav class="navigation" role="navigation">
                                <a href="/root/index.html" class="nav__link">Home</a>
                                <a href="/root/public/pages/about.html" class="nav__link">About</a>
                                <a href="/root/public/pages/contact.html" class="nav__link">Contact</a>
                            </nav>`


}

export function mainLayout(page){

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
                </div>`
}

export function formLayout(){
    
}

export function sidebar(){
    
}

export function footerLayout(){
    const footerElement = document.querySelector("footer");
    const footerDiv = document.createElement("div");
    footerElement.append(footerDiv);

    footerDiv.innerHTML += `<div class="footer__layout">
                                <label>Copyright Christopher Tønnesland 2022</label>
                            </div>`
}