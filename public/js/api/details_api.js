// Importing the error message fot the catch
import { displayMessage } from "../components/messages.js";
import { gameDisplay } from "../components/layout.js";

// Creating a function to call the APi
export async function primaryCallToApi(){
    // API and cors URL
    let cors_host = "https://noroffcors.herokuapp.com/";
    let api_host = `https://www.mmobomb.com/api1/games`;

    // Combining cors and api URL
    const conn_api = cors_host + api_host;
    
    try {
        // Making the call to the API
        const request = await fetch(conn_api);
        const response = await request.json();
        const api_array = response;

        // console logging the API call
        console.log(api_array);

        // Looping over the array
        for (let i = 0; i < api_array.length; i++){
            
            const game_id = api_array[i].id;
            const game_title = api_array[i].title;
            const game_image = api_array[i].thumbnail;
            const game_platform = api_array[i].platform;
            const short_description = api_array[i].short_description
            const game_genre = api_array[i].genre;

            // Reducing the array
            if (i === 20){
                const container = document.querySelector(".main-container");
                const gridContainer = document.querySelector(".grid-container");
                container.append(gridContainer);
                
                gridContainer.innerHTML += `
                   <div class="card">
                    <div class="ratio-box">
                        <img src="${game_image}" class="image" />
                    </div>
                    <div class="card-header">
                        <h2>${game_title}</h2>
                        <p>${game_platform}</p>
                    </div>
                    <div class="card-content">
                    
                    </div>
                    <div class="card-footer">
                        <a href="/public/pages/game_details.html?game-id=${game_id}" class="cta">View more<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                `;
            }

            const bannerContainer = document.createElement("div");
            bannerContainer.innerHTML += `<div><h3>Banner</h3></div>`;
            gridContainer.append(bannerContainer);

   
        }
    } catch (error) {
        console.log(error);
        displayMessage('error');
    }

    
}