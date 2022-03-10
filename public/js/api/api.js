export async function apiFetch(genre, page) {
  // Api info
  const corsHost = "https://noroffcors.herokuapp.com/";
  const apiKey = `f6dd075d81db416fbb289fc9d3726038`;
  const page_size = 5;
  const order = "released"
  const apiHost = `https://api.rawg.io/api/games?key=${apiKey}&page_size=${page_size}&genres=${genre}&page=${page}&ordering=${order}`;

  // The fetch
  const apiConn = corsHost + apiHost;
  const response = await fetch(apiConn);
  const json = await response.json();
  const data = json.results;

  if (response.ok) {
    return data;
  } else {
    // Request succeeded but you didn't get your data
    throw new Error(response.statusText);
  }
}
