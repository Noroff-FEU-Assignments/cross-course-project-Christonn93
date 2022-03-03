// Setting up the html
const infoContainer = document.querySelector(".info");
const newDiv = document.createElement("div");
infoContainer.append(newDiv);

// Setting the innerHTML of the message
const error = "Oh no. Something really bad went wrong here.... Try again later";
const success = "Oh yes. everything went well!";
const alert = "THIS IS AN ALERT FROM THE CREATOR";
const warning = "THIS IS A WARNING";

export function displayMessage(type){
    switch(type){
      case 'error':      
      infoContainer.classList.add("error");
      infoContainer.innerHTML += `<p>${error}</p>`;
        break;
   
      case 'success':
        infoContainer.style.display = "flex";
        infoContainer.classList.add("success");
        infoContainer.innerHTML += `<p>${success}</p>`;
        break;
  
      case 'alert':
        infoContainer.style.display = "flex";
        infoContainer.classList.add("alert");
        infoContainer.innerHTML += `<p>${alert}</p>`;
  
      case 'warning':
        infoContainer.style.display = "flex";
        infoContainer.classList.add("warning");
        infoContainer.innerHTML += `<p>${warning}</p>`;
        break;
    }
  }
