const cors_host = "https://noroffcors.herokuapp.com/";
const api_key = `f6dd075d81db416fbb289fc9d3726038`;
const api_host = `https://api.rawg.io/api/games?key=${api_key}`;

const api_conn = cors_host + api_host;

export async function apiCall(){
    try {
        const request = await fetch(api_conn);
        const response = await request.json();
        console.log(response)
    } catch (error) {
        error
    }
}