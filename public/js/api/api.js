// Importing the error message fot the catch
import { displayMessage } from "../components/messages.js";

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
            
            // Reducing the array
            if (i === 20){
                break;
            }
        }
    } catch (error) {
        console.log(error);
        displayMessage('error');
    }

    
}