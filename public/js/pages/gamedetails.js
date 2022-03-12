import {  detailsFetch } from "../api/api.js"
import {  getScreenshots } from "../api/api.js"

// Importing components for the page
import { displayMessage } from "../components/messages.js";
import { createLayout } from "../components/pageLayout.js";
import { banner as banner } from "../json/banner.js"

createLayout();
displayMessage();

// Getting the page HTML
const main = document.querySelector("main");

// Creating new HTML elements
function htmlElements(tagName = "div", classNames = [], children = []) {
    const tag = document.createElement(tagName);
    tag.classList.add(...classNames);
    tag.append(...children);
    return tag;
  }

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const gameId = params.get("id");
  const id = gameId;

  const details = await detailsFetch(id, gameId);
  const screenShots = await getScreenshots(id)
  console.log(details);
  console.log(screenShots);

  const container = document.querySelector(".container");
  const title = document.querySelector(".game-title");
  title.innerText = `${details.name}`
  
  const main_image = document.getElementById("main_image");
  main_image.innerHTML = `<img src="${details.background_image}" alt="Main game image" class="main-image"/>`
  for(let i = 0; i <screenShots.length; i++){
    const image = screenShots[i].image
    const screenShots_img = document.getElementById("screenshots");
  screenShots_img.innerHTML += `<img src="${image}" alt="" class="small-image"/>`
}

const description = document.getElementById("details")
description.innerHTML = `<p>${details.description_raw}</p>`

const dev = document.getElementById("dev-info");
dev.innerHTML = `<ul>
<li>Developed by: ${details.developers[0].name}</li>
<li>Published by: ${details.publishers[0].name}</li>
</ul>`