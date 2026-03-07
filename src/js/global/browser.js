/*
==========================================================================================
  Browser
==========================================================================================
*/

// event dispatchers
const dispatch = {};

// events list
const event = {
  blur: "blur",
  click: "click",
  change: "change",
  focus: "focus",
  focusin: "focusin",
  focusout: "focusout",
  input: "input",
  keydown: "keydown",
  keyup: "keyup",
  mousedown: "mousedown",
  mouseup: "mouseup",
  scroll: "scroll",
  submit: "submit",
  touchcancel: "touchcancel",
  touchend: "touchend",
  touchmove: "touchmove",
  touchstart: "touchstart",
  wheel: "wheel",
};

// browser detection
const os = {
  android: !!navigator.userAgent.toLowerCase().match(/android/),
  ios: !!navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod/),
  linux: !!navigator.userAgent.toLowerCase().match(/linux/),
  mac: !!navigator.userAgent.toLowerCase().match(/mac/),
  windows: !!navigator.userAgent.toLowerCase().match(/windows/)
};

const Browser = { dispatch, event, os };

/*
==========================================================================================
  Private
==========================================================================================
*/

Object.keys(event).forEach((e) => {

  dispatch[e] = new Event(e, {
    bubbles: true,
    cancelable: true
  });

});

/*
==========================================================================================
  Exports
==========================================================================================
*/

export { dispatch, event, os };

export default Browser;
