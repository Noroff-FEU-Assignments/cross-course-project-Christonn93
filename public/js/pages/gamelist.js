import {  gameGenreFetch } from "../api/api.js"

// Importing components for the page
import { displayMessage } from "../components/messages.js";
displayMessage();

import { createHeader, createFooter } from "../components/pageLayout.js";
createHeader();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const paramsGenre = params.get("genres");
const genre = paramsGenre.toLowerCase();

const games = await gameGenreFetch(genre)


function populateHtml(tagName, title) {

    const container = document.querySelector(tagName);
    const header = document.createElement("h2");
    header.classList.add("genre-title");
    header.innerText = title;
    container.append(header)
    games.forEach((game) => {
      container.innerHTML += `<div class="card" style="background-image: url(${game.background_image}); background-size: cover; 
      background-repeat: no-repeat;">
      <div class="card-content">
      <h2 class="card-title">${game.name}</h2>
      <p class="card-body">${game.updated}</p>
      <a href="../pages/game_details.html?id=${game.id}" class="cta">See more info</a>
      </div>
      </div>`
    });
  }

  populateHtml("#game_section", "Similar games")

createFooter();