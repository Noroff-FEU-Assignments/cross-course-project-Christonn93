export function pageLoader(){
// Setting up the html
const infoContainer = document.querySelector(".info");
const newDiv = document.createElement("div");
infoContainer.append(newDiv);
newDiv.innerHTML = `
<div class="loading">
<svg viewBox="-2000 -1000 4000 2000">
<path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
<use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>
</div>`;
}