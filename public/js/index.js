// Importing base script for api
import { primaryCallToApi } from "./api/api.js";

// Importing base page layout
import { headerLayout } from "./components/layout.js";
import { navigationLayout } from "./components/layout.js";
import { mainLayout } from "./components/layout.js";
import { formLayout } from "./components/layout.js";
import { footerLayout } from "./components/layout.js";

// Importing components for the page
import { displayMessage } from "./components/messages.js";
import { pageLoader } from "./components/loader.js";
import { validatingForm } from "./components/formValidation.js";

primaryCallToApi();
headerLayout();
navigationLayout();
footerLayout();
displayMessage();
