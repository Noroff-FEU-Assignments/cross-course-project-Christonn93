// Importing the error message fot the catch
import { displayMessage } from "../components/messages.js";

// Creating a function to call the APi
export async function primaryCallToApi_test() {
  // API and cors URL
  let cors_host = "https://noroffcors.herokuapp.com/";
  let api_key = `f6dd075d81db416fbb289fc9d3726038`;
  let api_host_page1 = `https://api.rawg.io/api/games?key=${api_key}`;
  let api_host_page2 = `https://api.rawg.io/api/games?key=${api_key}&page=2`;
  let api_host_page3 = `https://api.rawg.io/api/games?key=${api_key}&page=3`;

  // Combining cors and api URL
  const conn_api_1 = cors_host + api_host_page1;
  const conn_api_2 = cors_host + api_host_page2;
  const conn_api_3 = cors_host + api_host_page3;

  try {
    // Making the call to the API
    const request_1 = await fetch(conn_api_1);
    const request_2 = await fetch(conn_api_2);
    const request_3 = await fetch(conn_api_3);
    const response_1 = await request_1.json();
    const response_2 = await request_2.json();
    const response_3 = await request_3.json();
    
    const api_object_1 = response_1;
    const api_object_2 = response_2;
    const api_object_3 = response_3;

    console.log(api_object_1);
    console.log(api_object_2);
    console.log(api_object_3);

    const api_array_1 = api_object_1.results;
    const api_array_3 = api_object_2.results;
    const api_array_2 = api_object_3.results;

    // console logging the API call
    console.log(api_array_1);
    console.log(api_array_2);
    console.log(api_array_3);
    // console logging the API call

    const container_1 = document.querySelector("#container_1");

    const games_1 = api_array_1.map((game) => {
      return {
        id: game.id,
        title: game.name,
        image: game.background_image,
        genre: game.genres.map((genre) => {
          return genre.name;
        }),
        rating: game.esrb_rating.name,
        platform: game.platforms.map((elm) => {
         return elm.name;
        }),
        tag: game.tags.map((tag) => {
          return tag.name;
        }),
        release: game.released,
        screenshots: game.short_screenshots.map((img) => {
          return img.image;
        }),
      };
    });

    games_1.forEach((games) => {
        console.log("Id: " + games.id);
        console.log("Title: " + games.title);
        console.log("Genre: " + games.genre);
        console.log("Platform: " + games.platform);
        console.log("Tags: " + games.tag);
        console.log("Released: " + games.release);
      });

    const games_2 = api_array_2.map((game) => {
        return {
          id: game.id,
          title: game.name,
          image: game.background_image,
          genre: game.genres.map((genre) => {
            return genre.name;
          }),
          rating: game.esrb_rating.name,
          platform: game.platforms.map((elm) => {
           return elm.name;
          }),
          tag: game.tags.map((tag) => {
            return tag.name;
          }),
          release: game.released,
          screenshots: game.short_screenshots.map((img) => {
            return img.image;
          }),
        };
      });

      games_2.forEach((games) => {
        console.log("Id: " + games.id);
        console.log("Title: " + games.title);
        console.log("Genre: " + games.genre);
        console.log("Platform: " + games.platform);
        console.log("Tags: " + games.tag);
        console.log("Released: " + games.release);
      });

      const games_3 = api_array_3.map((game) => {
        return {
          id: game.id,
          title: game.name,
          image: game.background_image,
          genre: game.genres.map((genre) => {
            return genre.name;
          }),
          rating: game.esrb_rating.name,
          platform: game.platforms.map((elm) => {
           return elm.name;
          }),
          tag: game.tags.map((tag) => {
            return tag.name;
          }),
          release: game.released,
          screenshots: game.short_screenshots.map((img) => {
            return img.image;
          }),
        };
      });

    games_3.forEach((games) => {
      console.log("Id: " + games.id);
      console.log("Title: " + games.title);
      console.log("Genre: " + games.genre);
      console.log("Platform: " + games.platform);
      console.log("Tags: " + games.tag);
      console.log("Released: " + games.release);
    });

    games_1.forEach((element) => {
      container_1.innerHTML += `
    <div class="card">
     <div class="ratio-box">
         <img src="${element.image}" class="image" />
     </div>
     <div class="card-header">
         <h2>${element.title}</h2>
     </div>
     <div class="card-content">
     <p>Rating: ${element.rating}</p>
     <p>Genre: ${element.genre}</p>
     </div>
     <div class="card-footer">
         <a href="/public/pages/game_details.html?game-id=${element.id}" class="cta">View more<i class="fa-solid fa-arrow-right-long"></i></a>
     </div>
 </div>
 `;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error");
  }
}
