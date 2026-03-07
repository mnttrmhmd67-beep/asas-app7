/*
==========================================================================================
  Selectors
==========================================================================================
*/

// global selectors
const html = document.documentElement;

// head selectors
const head = html.querySelector("head");

// body selectors
const body = html.querySelector("body");

const Selectors = { html, head, body };

/*
==========================================================================================
  Exports
==========================================================================================
*/

export { html, head, body };

export default Selectors;
