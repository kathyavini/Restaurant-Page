/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mysore-pak.jpg */ "./src/img/mysore-pak.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ladoos.jpg */ "./src/img/ladoos.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gujiya.jpg */ "./src/img/gujiya.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Baloo+Paaji+2&family=Langar&family=Montez&family=Noto+Sans&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    /* border: 1px #9a13fd solid; */\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    place-items: center;\n    font-family: \"Noto Sans\", sans-serif;\n    background-color: #dbc18f;\n    color: hsl(223, 54%, 15%);\n    /* color: hsl(0, 0%, 100%); */\n    overflow: hidden;\n    backface-visibility: hidden;\n    position: relative;\n}\n\n\n#content {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    place-items: center;\n}\n\n.background {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    /* width: min(95%, 1920px);\n    height: min(95%, 1080px); */\n    /* aspect-ratio: 1.5; */\n    /* background-image: url('./img/landing-page.svg'); */\n    background-image:\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: #121e3d;\n    /* transform: translate3d(0,0,0) scale(1.3); */\n    transform: translate(50px, 50px) scale(1.25);\n}\n\n.background.second-image {\n    background-image: \n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: scale(1.25);\n}\n\n.background.third-image {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: translate(50px, -300px) scale(1.25);\n}\n\n\n@media (prefers-reduced-motion: no-preference) {\n    .transformed {\n        transform: scale(1);\n        transition: transform 6.5s ease-in-out;\n    }\n\n    .second-image.transformed {\n        transition: transform 4.5s ease-in-out;\n    }\n}\n\nnav {\n    grid-area: 1 / 1 / 1 / 4;\n    align-self: start;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n    margin-top: 50px;\n    padding-inline: 4rem;\n    padding-block: 1rem;\n    z-index: 100;\n    font-size: 2rem;\n    text-transform: uppercase;\n    /* background-color: hsl(39, 51%, 71%, .5); */\n    mix-blend-mode: multiply;\n}\n\n.tab {\n    transition: all 300ms;\n}\n\n.tab:hover {\n    transform: scale(1.2);\n}\n\n.tab.active {\n    border-bottom: 2px #eff9fa solid;\n    border-top: 3px transparent solid;\n    padding: 3px;\n}\n\n.small-image {\n    position: absolute;\n    width: 300px;\n    height: auto;\n    inset-block: 300px;\n    inset-inline: 200px;\n    opacity: 0;\n    z-index: 999;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    transition: opacity 1s;\n}\n\ndiv.small-image.visible {\n    opacity: 1;\n    transition: opacity 1s;\n}\n\n\nvideo {\n    opacity: 0;\n\n    /* position: absolute;\n    inset-block: 30vh;\n    inset-inline: 20vw; */\n    width: 100%;\n    grid-area: 1 / 1 / 4 / 4;\n    place-self: center;\n    z-index: 999;\n    /* place-self: initial; */\n    animation: fadeOut 2s forwards;\n}\n\nvideo.visible {\n    opacity: .8;\n    transition: opacity 3s 5s;\n    animation: fadeIn 10s forwards;\n}\n\nbutton {\n    z-index: 100;\n    grid-area: 2 / 2 / 3 / 3;\n    background-color: hsl(39, 51%, 71%, .5);\n    mix-blend-mode: overlay;\n    place-self: center;\n    font-size: 2rem;\n    padding-inline: 50px;\n    padding-block: 10px;\n    border: 1px solid white;\n    transition: opacity 3s;\n    border-radius: 5px;\n}\n\n/* h1 {\n    position: absolute;\n    inset-block: 40vh;\n    inset-inline: 10vw; */\n    /* grid-area: 2 / 1 / 3 / 4;\n    justify-self: center; */\n    /* display: grid;\n    place-items: center;\n    mix-blend-mode: overlay;\n    font-size: 6rem;\n    padding: 1rem;\n    z-index: 1000;\n    opacity: 0;\n    transition: opacity 0s;\n    pointer-events: none;\n} */\n\n.punjabi,\n.english {\n    color: white;\n    mix-blend-mode: overlay;\n    /* inset-inline: 10%; */\n    line-height: 10rem;\n    z-index: 1002;\n    pointer-events: none;\n}\n\n.punjabi {\n    font-size: 10rem;\n    grid-area: 2 / 2 / 3 / 3;\n    /* position: absolute;\n    inset-block: 20vh;\n    inset-inline: 30vw; */\n    opacity: 0;\n    font-family: 'Langar', sans-serif;\n\n    /* visibility: hidden; */\n}\n\n.punjabi.visible {\n    opacity: 1;\n    transition: opacity 2s 5s;\n}\n\n.punjabi span {\n    font-size: 4rem;\n}\n\n.english {\n    mix-blend-mode: overlay;\n    opacity: 0;\n    grid-area: 2 / 1 / 2 / 4;\n    /* display: flex;\n    flex-flow: column wrap; */\n}\n\n.english h1{\n    text-transform: uppercase;\n    font-size: 7rem;\n}\n\n.english p{\n    font-family: 'Montez', sans-serif;\n    font-size: 5rem;\n    text-align: left;\n}\n\n.punjabi.transitioned {\n    opacity: 0;\n    transition: opacity 1s 3s;\n}\n\n.english.transitioned {\n    opacity: 1;\n    transition: opacity 1s 3s;\n}\n\n\n\n@keyframes fadeIn{\n    0%      { opacity: 0; }\n    100%    { opacity: 1; }\n}\n\n@keyframes fadeOut{\n    0%      { opacity: 1; }\n    100%    { opacity: 0; }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,+BAA+B;IAC/B,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,yBAAyB;IACzB,yBAAyB;IACzB,6BAA6B;IAC7B,gBAAgB;IAChB,2BAA2B;IAC3B,kBAAkB;AACtB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb;+BAC2B;IAC3B,uBAAuB;IACvB,qDAAqD;IACrD;;+CAE2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,yBAAyB;IACzB,8CAA8C;IAC9C,4CAA4C;AAChD;;AAEA;IACI;+CAC2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,yDAAyC;IACzC,sBAAsB;IACtB,4BAA4B;IAC5B,8CAA8C;AAClD;;;AAGA;IACI;QACI,mBAAmB;QACnB,sCAAsC;IAC1C;;IAEA;QACI,sCAAsC;IAC1C;AACJ;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,6CAA6C;IAC7C,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;IAChC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,yDAAyC;IACzC,sBAAsB;IACtB,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,sBAAsB;AAC1B;;;AAGA;IACI,UAAU;;IAEV;;yBAEqB;IACrB,WAAW;IACX,wBAAwB;IACxB,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,uCAAuC;IACvC,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;;yBAGyB;IACrB;2BACuB;IACvB;;;;;;;;;GASD;;AAEH;;IAEI,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB;;yBAEqB;IACrB,UAAU;IACV,iCAAiC;;IAEjC,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,UAAU;IACV,wBAAwB;IACxB;6BACyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;;;AAIA;IACI,UAAU,UAAU,EAAE;IACtB,UAAU,UAAU,EAAE;AAC1B;;AAEA;IACI,UAAU,UAAU,EAAE;IACtB,UAAU,UAAU,EAAE;AAC1B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2&family=Langar&family=Montez&family=Noto+Sans&display=swap');\n\n* {\n    /* border: 1px #9a13fd solid; */\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    place-items: center;\n    font-family: \"Noto Sans\", sans-serif;\n    background-color: #dbc18f;\n    color: hsl(223, 54%, 15%);\n    /* color: hsl(0, 0%, 100%); */\n    overflow: hidden;\n    backface-visibility: hidden;\n    position: relative;\n}\n\n\n#content {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    place-items: center;\n}\n\n.background {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    /* width: min(95%, 1920px);\n    height: min(95%, 1080px); */\n    /* aspect-ratio: 1.5; */\n    /* background-image: url('./img/landing-page.svg'); */\n    background-image:\n        url('./img/mysore-pak.jpg'),\n        url('./img/ladoos.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: #121e3d;\n    /* transform: translate3d(0,0,0) scale(1.3); */\n    transform: translate(50px, 50px) scale(1.25);\n}\n\n.background.second-image {\n    background-image: \n        url('./img/ladoos.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: scale(1.25);\n}\n\n.background.third-image {\n    background-image: url('./img/gujiya.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    transform: translate(50px, -300px) scale(1.25);\n}\n\n\n@media (prefers-reduced-motion: no-preference) {\n    .transformed {\n        transform: scale(1);\n        transition: transform 6.5s ease-in-out;\n    }\n\n    .second-image.transformed {\n        transition: transform 4.5s ease-in-out;\n    }\n}\n\nnav {\n    grid-area: 1 / 1 / 1 / 4;\n    align-self: start;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n    margin-top: 50px;\n    padding-inline: 4rem;\n    padding-block: 1rem;\n    z-index: 100;\n    font-size: 2rem;\n    text-transform: uppercase;\n    /* background-color: hsl(39, 51%, 71%, .5); */\n    mix-blend-mode: multiply;\n}\n\n.tab {\n    transition: all 300ms;\n}\n\n.tab:hover {\n    transform: scale(1.2);\n}\n\n.tab.active {\n    border-bottom: 2px #eff9fa solid;\n    border-top: 3px transparent solid;\n    padding: 3px;\n}\n\n.small-image {\n    position: absolute;\n    width: 300px;\n    height: auto;\n    inset-block: 300px;\n    inset-inline: 200px;\n    opacity: 0;\n    z-index: 999;\n    background-image: url('./img/gujiya.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    transition: opacity 1s;\n}\n\ndiv.small-image.visible {\n    opacity: 1;\n    transition: opacity 1s;\n}\n\n\nvideo {\n    opacity: 0;\n\n    /* position: absolute;\n    inset-block: 30vh;\n    inset-inline: 20vw; */\n    width: 100%;\n    grid-area: 1 / 1 / 4 / 4;\n    place-self: center;\n    z-index: 999;\n    /* place-self: initial; */\n    animation: fadeOut 2s forwards;\n}\n\nvideo.visible {\n    opacity: .8;\n    transition: opacity 3s 5s;\n    animation: fadeIn 10s forwards;\n}\n\nbutton {\n    z-index: 100;\n    grid-area: 2 / 2 / 3 / 3;\n    background-color: hsl(39, 51%, 71%, .5);\n    mix-blend-mode: overlay;\n    place-self: center;\n    font-size: 2rem;\n    padding-inline: 50px;\n    padding-block: 10px;\n    border: 1px solid white;\n    transition: opacity 3s;\n    border-radius: 5px;\n}\n\n/* h1 {\n    position: absolute;\n    inset-block: 40vh;\n    inset-inline: 10vw; */\n    /* grid-area: 2 / 1 / 3 / 4;\n    justify-self: center; */\n    /* display: grid;\n    place-items: center;\n    mix-blend-mode: overlay;\n    font-size: 6rem;\n    padding: 1rem;\n    z-index: 1000;\n    opacity: 0;\n    transition: opacity 0s;\n    pointer-events: none;\n} */\n\n.punjabi,\n.english {\n    color: white;\n    mix-blend-mode: overlay;\n    /* inset-inline: 10%; */\n    line-height: 10rem;\n    z-index: 1002;\n    pointer-events: none;\n}\n\n.punjabi {\n    font-size: 10rem;\n    grid-area: 2 / 2 / 3 / 3;\n    /* position: absolute;\n    inset-block: 20vh;\n    inset-inline: 30vw; */\n    opacity: 0;\n    font-family: 'Langar', sans-serif;\n\n    /* visibility: hidden; */\n}\n\n.punjabi.visible {\n    opacity: 1;\n    transition: opacity 2s 5s;\n}\n\n.punjabi span {\n    font-size: 4rem;\n}\n\n.english {\n    mix-blend-mode: overlay;\n    opacity: 0;\n    grid-area: 2 / 1 / 2 / 4;\n    /* display: flex;\n    flex-flow: column wrap; */\n}\n\n.english h1{\n    text-transform: uppercase;\n    font-size: 7rem;\n}\n\n.english p{\n    font-family: 'Montez', sans-serif;\n    font-size: 5rem;\n    text-align: left;\n}\n\n.punjabi.transitioned {\n    opacity: 0;\n    transition: opacity 1s 3s;\n}\n\n.english.transitioned {\n    opacity: 1;\n    transition: opacity 1s 3s;\n}\n\n\n\n@keyframes fadeIn{\n    0%      { opacity: 0; }\n    100%    { opacity: 1; }\n}\n\n@keyframes fadeOut{\n    0%      { opacity: 1; }\n    100%    { opacity: 0; }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/gujiya.jpg":
/*!****************************!*\
  !*** ./src/img/gujiya.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c6c68fc647391f95491.jpg";

/***/ }),

/***/ "./src/img/ladoos.jpg":
/*!****************************!*\
  !*** ./src/img/ladoos.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72941effc425a0a47057.jpg";

/***/ }),

/***/ "./src/img/mysore-pak.jpg":
/*!********************************!*\
  !*** ./src/img/mysore-pak.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01af50d00fdebfaff49f.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

// import pageLoad from './initialPageLoad';

// pageLoad();

let container = document.querySelector('#content');
let background = document.querySelector('.background');
let startButton = document.querySelector('button');
let punjabi = document.querySelector('.punjabi');
let english = document.querySelectorAll('.english');

startButton.addEventListener('click', () => {
    background.classList.add('transformed');
    background.addEventListener('transitionend', changeImage);
    startButton.style.opacity = '0';
})

// let smallImage = document.createElement("div");

function changeImage() {
    background.classList.remove('transformed');
    background.classList.add('second-image');
    background.classList.add('transformed');


    // punjabi.style.opacity = '1';

    // smallImage.classList.add('small-image');    
    // container.appendChild(smallImage);
    // smallImage.classList.add('visible');

    background.removeEventListener('transitionend', changeImage);
    setTimeout(startVideo, 2000);
    // background.addEventListener('transitionstart', startVideo);
}

function startVideo() {
    let video = document.createElement("video");
    video.setAttribute('src', "../src/img/chai.mp4#t=2")
    video.setAttribute('autoplay', "true");
    video.setAttribute('muted', "true");
    container.appendChild(video);
    video.classList.add('visible');
    punjabi.classList.add('visible');

    video.addEventListener('ended', () => {
        video.classList.remove('visible');
        punjabi.classList.add('transitioned');
        english.forEach(element =>
            element.classList.add('transitioned')
        )
    })
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9teXNvcmUtcGFrLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2xhZG9vcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9ndWppeWEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytQYWFqaSsyJmZhbWlseT1MYW5nYXImZmFtaWx5PU1vbnRleiZmYW1pbHk9Tm90bytTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICAvKiBib3JkZXI6IDFweCAjOWExM2ZkIHNvbGlkOyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiYzE4ZjtcXG4gICAgY29sb3I6IGhzbCgyMjMsIDU0JSwgMTUlKTtcXG4gICAgLyogY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogd2lkdGg6IG1pbig5NSUsIDE5MjBweCk7XFxuICAgIGhlaWdodDogbWluKDk1JSwgMTA4MHB4KTsgKi9cXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxLjU7ICovXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbGFuZGluZy1wYWdlLnN2ZycpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFlM2Q7XFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEuMyk7ICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsIDUwcHgpIHNjYWxlKDEuMjUpO1xcbn1cXG5cXG4uYmFja2dyb3VuZC5zZWNvbmQtaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxufVxcblxcbi5iYWNrZ3JvdW5kLnRoaXJkLWltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCwgLTMwMHB4KSBzY2FsZSgxLjI1KTtcXG59XFxuXFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XFxuICAgIC50cmFuc2Zvcm1lZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDYuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgLnNlY29uZC1pbWFnZS50cmFuc2Zvcm1lZCB7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNC41cyBlYXNlLWluLW91dDtcXG4gICAgfVxcbn1cXG5cXG5uYXYge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIDQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4dnc7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHBhZGRpbmctaW5saW5lOiA0cmVtO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogaHNsKDM5LCA1MSUsIDcxJSwgLjUpOyAqL1xcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxufVxcblxcbi50YWIge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50YWIuYWN0aXZlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICNlZmY5ZmEgc29saWQ7XFxuICAgIGJvcmRlci10b3A6IDNweCB0cmFuc3BhcmVudCBzb2xpZDtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uc21hbGwtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBpbnNldC1ibG9jazogMzAwcHg7XFxuICAgIGluc2V0LWlubGluZTogMjAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuXFxuZGl2LnNtYWxsLWltYWdlLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG5cXG5cXG52aWRlbyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQtYmxvY2s6IDMwdmg7XFxuICAgIGluc2V0LWlubGluZTogMjB2dzsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA0IC8gNDtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIC8qIHBsYWNlLXNlbGY6IGluaXRpYWw7ICovXFxuICAgIGFuaW1hdGlvbjogZmFkZU91dCAycyBmb3J3YXJkcztcXG59XFxuXFxudmlkZW8udmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IC44O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzIDVzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxMHMgZm9yd2FyZHM7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzksIDUxJSwgNzElLCAuNSk7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDUwcHg7XFxuICAgIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIGgxIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldC1ibG9jazogNDB2aDtcXG4gICAgaW5zZXQtaW5saW5lOiAxMHZ3OyAqL1xcbiAgICAvKiBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyAqL1xcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogb3ZlcmxheTtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDBzO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59ICovXFxuXFxuLnB1bmphYmksXFxuLmVuZ2xpc2gge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcbiAgICAvKiBpbnNldC1pbmxpbmU6IDEwJTsgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEwcmVtO1xcbiAgICB6LWluZGV4OiAxMDAyO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnB1bmphYmkge1xcbiAgICBmb250LXNpemU6IDEwcmVtO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQtYmxvY2s6IDIwdmg7XFxuICAgIGluc2V0LWlubGluZTogMzB2dzsgKi9cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdMYW5nYXInLCBzYW5zLXNlcmlmO1xcblxcbiAgICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxufVxcblxcbi5wdW5qYWJpLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIDVzO1xcbn1cXG5cXG4ucHVuamFiaSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uZW5nbGlzaCB7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDQ7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7ICovXFxufVxcblxcbi5lbmdsaXNoIGgxe1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDdyZW07XFxufVxcblxcbi5lbmdsaXNoIHB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udGV6Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucHVuamFiaS50cmFuc2l0aW9uZWQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIDNzO1xcbn1cXG5cXG4uZW5nbGlzaC50cmFuc2l0aW9uZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIDNzO1xcbn1cXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbntcXG4gICAgMCUgICAgICB7IG9wYWNpdHk6IDA7IH1cXG4gICAgMTAwJSAgICB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0e1xcbiAgICAwJSAgICAgIHsgb3BhY2l0eTogMTsgfVxcbiAgICAxMDAlICAgIHsgb3BhY2l0eTogMDsgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiOytCQUMyQjtJQUMzQix1QkFBdUI7SUFDdkIscURBQXFEO0lBQ3JEOzsrQ0FFMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJOytDQUMyQjtJQUMzQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlEQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDhDQUE4QztBQUNsRDs7O0FBR0E7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSxzQ0FBc0M7SUFDMUM7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDZDQUE2QztJQUM3Qyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1oseURBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxVQUFVOztJQUVWOzt5QkFFcUI7SUFDckIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7Ozt5QkFHeUI7SUFDckI7MkJBQ3VCO0lBQ3ZCOzs7Ozs7Ozs7R0FTRDs7QUFFSDs7SUFFSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEI7O3lCQUVxQjtJQUNyQixVQUFVO0lBQ1YsaUNBQWlDOztJQUVqQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCOzZCQUN5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7OztBQUlBO0lBQ0ksVUFBVSxVQUFVLEVBQUU7SUFDdEIsVUFBVSxVQUFVLEVBQUU7QUFDMUI7O0FBRUE7SUFDSSxVQUFVLFVBQVUsRUFBRTtJQUN0QixVQUFVLFVBQVUsRUFBRTtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytQYWFqaSsyJmZhbWlseT1MYW5nYXImZmFtaWx5PU1vbnRleiZmYW1pbHk9Tm90bytTYW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICAvKiBib3JkZXI6IDFweCAjOWExM2ZkIHNvbGlkOyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiYzE4ZjtcXG4gICAgY29sb3I6IGhzbCgyMjMsIDU0JSwgMTUlKTtcXG4gICAgLyogY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogd2lkdGg6IG1pbig5NSUsIDE5MjBweCk7XFxuICAgIGhlaWdodDogbWluKDk1JSwgMTA4MHB4KTsgKi9cXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxLjU7ICovXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbGFuZGluZy1wYWdlLnN2ZycpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgICAgdXJsKCcuL2ltZy9teXNvcmUtcGFrLmpwZycpLFxcbiAgICAgICAgdXJsKCcuL2ltZy9sYWRvb3MuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjFlM2Q7XFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEuMyk7ICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsIDUwcHgpIHNjYWxlKDEuMjUpO1xcbn1cXG5cXG4uYmFja2dyb3VuZC5zZWNvbmQtaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBcXG4gICAgICAgIHVybCgnLi9pbWcvbGFkb29zLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbn1cXG5cXG4uYmFja2dyb3VuZC50aGlyZC1pbWFnZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZ3VqaXlhLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAtMzAwcHgpIHNjYWxlKDEuMjUpO1xcbn1cXG5cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXG4gICAgLnRyYW5zZm9ybWVkIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNi41cyBlYXNlLWluLW91dDtcXG4gICAgfVxcblxcbiAgICAuc2Vjb25kLWltYWdlLnRyYW5zZm9ybWVkIHtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0LjVzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxufVxcblxcbm5hdiB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gNDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDh2dztcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDRyZW07XFxuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzksIDUxJSwgNzElLCAuNSk7ICovXFxuICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG59XFxuXFxuLnRhYiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXG59XFxuXFxuLnRhYjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRhYi5hY3RpdmUge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggI2VmZjlmYSBzb2xpZDtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHRyYW5zcGFyZW50IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5zbWFsbC1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGluc2V0LWJsb2NrOiAzMDBweDtcXG4gICAgaW5zZXQtaW5saW5lOiAyMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2d1aml5YS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuXFxuZGl2LnNtYWxsLWltYWdlLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG5cXG5cXG52aWRlbyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuXFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQtYmxvY2s6IDMwdmg7XFxuICAgIGluc2V0LWlubGluZTogMjB2dzsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA0IC8gNDtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIC8qIHBsYWNlLXNlbGY6IGluaXRpYWw7ICovXFxuICAgIGFuaW1hdGlvbjogZmFkZU91dCAycyBmb3J3YXJkcztcXG59XFxuXFxudmlkZW8udmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IC44O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzIDVzO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxMHMgZm9yd2FyZHM7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzksIDUxJSwgNzElLCAuNSk7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDUwcHg7XFxuICAgIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIGgxIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldC1ibG9jazogNDB2aDtcXG4gICAgaW5zZXQtaW5saW5lOiAxMHZ3OyAqL1xcbiAgICAvKiBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyAqL1xcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogb3ZlcmxheTtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDBzO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59ICovXFxuXFxuLnB1bmphYmksXFxuLmVuZ2xpc2gge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcbiAgICAvKiBpbnNldC1pbmxpbmU6IDEwJTsgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEwcmVtO1xcbiAgICB6LWluZGV4OiAxMDAyO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnB1bmphYmkge1xcbiAgICBmb250LXNpemU6IDEwcmVtO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQtYmxvY2s6IDIwdmg7XFxuICAgIGluc2V0LWlubGluZTogMzB2dzsgKi9cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdMYW5nYXInLCBzYW5zLXNlcmlmO1xcblxcbiAgICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxufVxcblxcbi5wdW5qYWJpLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIDVzO1xcbn1cXG5cXG4ucHVuamFiaSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uZW5nbGlzaCB7XFxuICAgIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMiAvIDQ7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7ICovXFxufVxcblxcbi5lbmdsaXNoIGgxe1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDdyZW07XFxufVxcblxcbi5lbmdsaXNoIHB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udGV6Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucHVuamFiaS50cmFuc2l0aW9uZWQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIDNzO1xcbn1cXG5cXG4uZW5nbGlzaC50cmFuc2l0aW9uZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIDNzO1xcbn1cXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbntcXG4gICAgMCUgICAgICB7IG9wYWNpdHk6IDA7IH1cXG4gICAgMTAwJSAgICB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0e1xcbiAgICAwJSAgICAgIHsgb3BhY2l0eTogMTsgfVxcbiAgICAxMDAlICAgIHsgb3BhY2l0eTogMDsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCBwYWdlTG9hZCBmcm9tICcuL2luaXRpYWxQYWdlTG9hZCc7XG5cbi8vIHBhZ2VMb2FkKCk7XG5cbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xubGV0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZCcpO1xubGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5sZXQgcHVuamFiaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wdW5qYWJpJyk7XG5sZXQgZW5nbGlzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmdsaXNoJyk7XG5cbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgndHJhbnNmb3JtZWQnKTtcbiAgICBiYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjaGFuZ2VJbWFnZSk7XG4gICAgc3RhcnRCdXR0b24uc3R5bGUub3BhY2l0eSA9ICcwJztcbn0pXG5cbi8vIGxldCBzbWFsbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuZnVuY3Rpb24gY2hhbmdlSW1hZ2UoKSB7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm1lZCcpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWltYWdlJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm1lZCcpO1xuXG5cbiAgICAvLyBwdW5qYWJpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAvLyBzbWFsbEltYWdlLmNsYXNzTGlzdC5hZGQoJ3NtYWxsLWltYWdlJyk7ICAgIFxuICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbWFsbEltYWdlKTtcbiAgICAvLyBzbWFsbEltYWdlLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIGJhY2tncm91bmQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNoYW5nZUltYWdlKTtcbiAgICBzZXRUaW1lb3V0KHN0YXJ0VmlkZW8sIDIwMDApO1xuICAgIC8vIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0Jywgc3RhcnRWaWRlbyk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VmlkZW8oKSB7XG4gICAgbGV0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgXCIuLi9zcmMvaW1nL2NoYWkubXA0I3Q9MlwiKVxuICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCBcInRydWVcIik7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsIFwidHJ1ZVwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBwdW5qYWJpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIHB1bmphYmkuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbmVkJyk7XG4gICAgICAgIGVuZ2xpc2guZm9yRWFjaChlbGVtZW50ID0+XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb25lZCcpXG4gICAgICAgIClcbiAgICB9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==