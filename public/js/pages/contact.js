
// Importing base script for api
import { apiFetch } from "./api/api.js";

// Importing components for the page
import { displayMessage } from "./components/messages.js";
displayMessage();

import { createHeader, createFooter } from "./components/pageLayout.js";
createHeader();
createFooter();