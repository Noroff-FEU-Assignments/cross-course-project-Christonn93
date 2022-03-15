import {  detailsFetch } from "../api/api.js"
import {  getScreenshots } from "../api/api.js"

// Importing components for the page
import { displayMessage } from "./components/messages.js";
displayMessage();

import { createHeader, createFooter } from "./components/pageLayout.js";
createHeader();
createFooter();