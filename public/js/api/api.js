// Importing the error message fot the catch
import { displayMessage } from "../components/messages.js";
import { gameDisplay } from "../components/layout.js";

// Creating a function to call the APi
export async function primaryCallToApi() {
  // API and cors URL
  let cors_host = "https://noroffcors.herokuapp.com/";
  let api_key = `f6dd075d81db416fbb289fc9d3726038`;
  let api_host = `https://api.rawg.io/api/games?key=${api_key}`;

  // Combining cors and api URL
  const conn_api = cors_host + api_host;

  try {
    // Making the call to the API
    const request = await fetch(conn_api);
    const response = await request.json();
    const api_object = response;
    const api_array = api_object.results;

    // console logging the API call
    console.log(api_array);

    api_array.forEach((game) => {
      const container = document.querySelector(".main-container");
      const gridContainer = document.querySelector(".grid-container");
      container.append(gridContainer);

      const game_id = game.id;
      const game_title = game.name;
      const game_image = game.background_image;

      const genre = game.genres.map((genre) =>{
        return genre.name;
      })
      
      const game_genre = genre.join(" - ");

      const game_rating = game.esrb_rating.name;


      gridContainer.innerHTML += `
              <div class="card">
               <div class="ratio-box">
                   <img src="${game_image}" class="image" />
               </div>
               <div class="card-header">
                   <h2>${game_title}</h2>
               </div>
               <div class="card-content">
               <p>Rating: ${game_rating}</p>
               <p>Genre: ${game_genre}</p>
               </div>
               <div class="card-footer">
              
               
                   <a href="/public/pages/game_details.html?game-id=${game_id}" class="cta">View more<i class="fa-solid fa-arrow-right-long"></i></a>
               </div>
           </div>
           `;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error");
  }
}
