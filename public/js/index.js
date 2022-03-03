// Importing base script for api
import { primaryCallToApi } from "./api/api.js";

// Importing base page layout
import { headerLayout } from "./components/layout.js";
import { footerLayout } from "./components/layout.js";

// Importing components for the page
import { displayMessage } from "./components/messages.js";
import { textBox } from "./components/layout.js";

primaryCallToApi();
headerLayout();
textBox();
footerLayout();
displayMessage();

