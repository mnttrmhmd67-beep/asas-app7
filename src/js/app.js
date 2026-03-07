/*
==========================================================================================
  Dependencies
==========================================================================================
*/

// global objects
import Browser from "./global/browser.js";
import Constants from "./global/constants.js";
import Endpoints from "./global/endpoints.js";
import Models from "./global/models.js";
import Selectors from "./global/selectors.js";

// global modules
import Helpers from "./module/helpers.js";
import Utilities from "./module/utilities.js";

/*
==========================================================================================
  Public
==========================================================================================
*/

const App = {

  initialize() {

    Selectors.global.html.classList.remove("no-js");

  }

};

/*
==========================================================================================
  Private
==========================================================================================
*/



/*
==========================================================================================
  Exports
==========================================================================================
*/

export default App;
