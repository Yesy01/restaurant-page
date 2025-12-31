/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
  --bg0:#0b0f17;
  --bg1:#0f172a;
  --card: rgba(255,255,255,0.06);
  --card2: rgba(255,255,255,0.10);
  --text:#e5e7eb;
  --muted:#a7b0c0;
  --line: rgba(255,255,255,0.12);
  --accent:#ffb703;
  --accent2:#fb7185;
  --shadow: 0 20px 60px rgba(0,0,0,0.35);
  --radius: 18px;
}

*{ box-sizing:border-box; }
html, body{ height:100%; }
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color:var(--text);
  background:
    radial-gradient(1000px 500px at 20% -10%, rgba(251,113,133,0.25), transparent 60%),
    radial-gradient(900px 450px at 80% 0%, rgba(255,183,3,0.22), transparent 55%),
    linear-gradient(180deg, var(--bg0), var(--bg1));
}

a{ color:inherit; }
p{ line-height:1.6; color:var(--muted); }

.site-header{
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 14px 16px;
  backdrop-filter: blur(12px);
  background: rgba(15, 23, 42, 0.55);
  border-bottom: 1px solid var(--line);
}

.nav{
  max-width: 1100px;
  margin: 0 auto;
  display:flex;
  gap:10px;
  align-items:center;
  justify-content:space-between;
}

.brand{
  display:flex;
  align-items:center;
  gap:10px;
  user-select:none;
}

.brand__logo{
  width:34px;
  height:34px;
  border-radius: 12px;
  background:
    radial-gradient(circle at 30% 30%, #ffd166, #ffb703 55%, #fb7185);
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
}

.brand__name{
  font-weight: 700;
  letter-spacing: 0.2px;
}

.tabs{
  display:flex;
  gap:10px;
  padding: 6px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
  border-radius: 999px;
}

.nav__btn{
  border: 0;
  background: transparent;
  color: var(--text);
  padding: 10px 14px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  opacity: 0.8;
  transition: transform .12s ease, background .18s ease, opacity .18s ease;
}

.nav__btn:hover{
  opacity: 1;
  background: rgba(255,255,255,0.06);
  transform: translateY(-1px);
}

.nav__btn.active{
  opacity: 1;
  background: linear-gradient(135deg, rgba(255,183,3,0.25), rgba(251,113,133,0.22));
  border: 1px solid rgba(255,255,255,0.14);
}

#content{
  max-width: 1100px;
  margin: 0 auto;
  padding: 28px 16px 70px;
}

.hero{
  display:grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
  align-items: stretch;
}

@media (max-width: 860px){
  .hero{ grid-template-columns: 1fr; }
  .tabs{ gap:6px; }
  .nav__btn{ padding: 9px 12px; }
}

.panel{
  border: 1px solid var(--line);
  background: linear-gradient(180deg, var(--card), rgba(255,255,255,0.03));
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow:hidden;
}

.panel__inner{ padding: 18px; }

.kicker{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding: 6px 10px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  color: var(--muted);
  font-size: 12px;
}

h1{
  margin: 12px 0 10px;
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.08;
  letter-spacing: -0.5px;
}

h2{
  margin: 0 0 10px;
  font-size: 18px;
}

.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

@media (max-width: 900px){
  .grid{ grid-template-columns: 1fr; }
}

.card{
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.04);
  border-radius: 16px;
  padding: 16px;
  transition: transform .12s ease, background .18s ease;
}

.card:hover{
  transform: translateY(-2px);
  background: rgba(255,255,255,0.06);
}

.badge{
  display:inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 650;
  color: rgba(255,255,255,0.9);
  background: rgba(255,183,3,0.18);
  border: 1px solid rgba(255,183,3,0.25);
}

.price{
  font-weight: 800;
  color: var(--text);
}

.btn{
  display:inline-flex;
  gap:10px;
  align-items:center;
  justify-content:center;
  padding: 11px 14px;
  border-radius: 14px;
  cursor:pointer;
  border: 1px solid rgba(255,255,255,0.14);
  background: linear-gradient(135deg, rgba(255,183,3,0.22), rgba(251,113,133,0.18));
  color: var(--text);
  font-weight: 700;
  text-decoration:none;
  transition: transform .12s ease, filter .18s ease;
}

.btn:hover{ transform: translateY(-1px); filter: brightness(1.06); }

.small{ font-size: 13px; color: var(--muted); }
.sep{ height:1px; background: var(--line); margin: 14px 0; }
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n  --bg0:#0b0f17;\n  --bg1:#0f172a;\n  --card: rgba(255,255,255,0.06);\n  --card2: rgba(255,255,255,0.10);\n  --text:#e5e7eb;\n  --muted:#a7b0c0;\n  --line: rgba(255,255,255,0.12);\n  --accent:#ffb703;\n  --accent2:#fb7185;\n  --shadow: 0 20px 60px rgba(0,0,0,0.35);\n  --radius: 18px;\n}\n\n*{ box-sizing:border-box; }\nhtml, body{ height:100%; }\nbody{\n  margin:0;\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;\n  color:var(--text);\n  background:\n    radial-gradient(1000px 500px at 20% -10%, rgba(251,113,133,0.25), transparent 60%),\n    radial-gradient(900px 450px at 80% 0%, rgba(255,183,3,0.22), transparent 55%),\n    linear-gradient(180deg, var(--bg0), var(--bg1));\n}\n\na{ color:inherit; }\np{ line-height:1.6; color:var(--muted); }\n\n.site-header{\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  padding: 14px 16px;\n  backdrop-filter: blur(12px);\n  background: rgba(15, 23, 42, 0.55);\n  border-bottom: 1px solid var(--line);\n}\n\n.nav{\n  max-width: 1100px;\n  margin: 0 auto;\n  display:flex;\n  gap:10px;\n  align-items:center;\n  justify-content:space-between;\n}\n\n.brand{\n  display:flex;\n  align-items:center;\n  gap:10px;\n  user-select:none;\n}\n\n.brand__logo{\n  width:34px;\n  height:34px;\n  border-radius: 12px;\n  background:\n    radial-gradient(circle at 30% 30%, #ffd166, #ffb703 55%, #fb7185);\n  box-shadow: 0 10px 30px rgba(0,0,0,0.35);\n}\n\n.brand__name{\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n\n.tabs{\n  display:flex;\n  gap:10px;\n  padding: 6px;\n  border: 1px solid var(--line);\n  background: rgba(255,255,255,0.03);\n  border-radius: 999px;\n}\n\n.nav__btn{\n  border: 0;\n  background: transparent;\n  color: var(--text);\n  padding: 10px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n  font-weight: 600;\n  opacity: 0.8;\n  transition: transform .12s ease, background .18s ease, opacity .18s ease;\n}\n\n.nav__btn:hover{\n  opacity: 1;\n  background: rgba(255,255,255,0.06);\n  transform: translateY(-1px);\n}\n\n.nav__btn.active{\n  opacity: 1;\n  background: linear-gradient(135deg, rgba(255,183,3,0.25), rgba(251,113,133,0.22));\n  border: 1px solid rgba(255,255,255,0.14);\n}\n\n#content{\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 28px 16px 70px;\n}\n\n.hero{\n  display:grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 18px;\n  align-items: stretch;\n}\n\n@media (max-width: 860px){\n  .hero{ grid-template-columns: 1fr; }\n  .tabs{ gap:6px; }\n  .nav__btn{ padding: 9px 12px; }\n}\n\n.panel{\n  border: 1px solid var(--line);\n  background: linear-gradient(180deg, var(--card), rgba(255,255,255,0.03));\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  overflow:hidden;\n}\n\n.panel__inner{ padding: 18px; }\n\n.kicker{\n  display:inline-flex;\n  align-items:center;\n  gap:8px;\n  padding: 6px 10px;\n  border: 1px solid rgba(255,255,255,0.14);\n  border-radius: 999px;\n  background: rgba(255,255,255,0.04);\n  color: var(--muted);\n  font-size: 12px;\n}\n\nh1{\n  margin: 12px 0 10px;\n  font-size: clamp(28px, 3.2vw, 44px);\n  line-height: 1.08;\n  letter-spacing: -0.5px;\n}\n\nh2{\n  margin: 0 0 10px;\n  font-size: 18px;\n}\n\n.grid{\n  display:grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n}\n\n@media (max-width: 900px){\n  .grid{ grid-template-columns: 1fr; }\n}\n\n.card{\n  border: 1px solid var(--line);\n  background: rgba(255,255,255,0.04);\n  border-radius: 16px;\n  padding: 16px;\n  transition: transform .12s ease, background .18s ease;\n}\n\n.card:hover{\n  transform: translateY(-2px);\n  background: rgba(255,255,255,0.06);\n}\n\n.badge{\n  display:inline-block;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 650;\n  color: rgba(255,255,255,0.9);\n  background: rgba(255,183,3,0.18);\n  border: 1px solid rgba(255,183,3,0.25);\n}\n\n.price{\n  font-weight: 800;\n  color: var(--text);\n}\n\n.btn{\n  display:inline-flex;\n  gap:10px;\n  align-items:center;\n  justify-content:center;\n  padding: 11px 14px;\n  border-radius: 14px;\n  cursor:pointer;\n  border: 1px solid rgba(255,255,255,0.14);\n  background: linear-gradient(135deg, rgba(255,183,3,0.22), rgba(251,113,133,0.18));\n  color: var(--text);\n  font-weight: 700;\n  text-decoration:none;\n  transition: transform .12s ease, filter .18s ease;\n}\n\n.btn:hover{ transform: translateY(-1px); filter: brightness(1.06); }\n\n.small{ font-size: 13px; color: var(--muted); }\n.sep{ height:1px; background: var(--line); margin: 14px 0; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./src/tabs/contact.js"
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactTab)
/* harmony export */ });
function contactTab() {
  const wrap = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact";

  const layout = document.createElement("div");
  layout.className = "grid";
  layout.style.gridTemplateColumns = "repeat(2, 1fr)";
  layout.style.gap = "14px";

  const info = document.createElement("div");
  info.className = "panel";
  info.innerHTML = `
    <div class="panel__inner">
      <h2>Get in touch</h2>
      <div class="sep"></div>
      <p><strong>Phone:</strong> <span class="small">+44 0000 000000</span></p>
      <p><strong>Email:</strong> <span class="small">hello@bearysbreakfast.fake</span></p>
      <p><strong>Address:</strong> <span class="small">1 Honeycomb Lane, Breakfast City</span></p>
    </div>
  `;

  const hours = document.createElement("div");
  hours.className = "panel";
  hours.innerHTML = `
    <div class="panel__inner">
      <h2>Hours</h2>
      <div class="sep"></div>
      <p class="small" style="margin:0;">Mon–Fri: 7:00am – 2:00pm</p>
      <p class="small" style="margin:8px 0 0;">Sat–Sun: 8:00am – 3:00pm</p>
      <div class="sep"></div>
      <a class="btn" href="#" data-cta="reserve">Reserve a table</a>
    </div>
  `;

  layout.append(info, hours);

  // Responsive: 1 column on small screens
  layout.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";

  wrap.append(h1, layout);
  return wrap;
}


/***/ },

/***/ "./src/tabs/home.js"
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeTab)
/* harmony export */ });
function homeTab() {
  const wrap = document.createElement("div");

  const hero = document.createElement("section");
  hero.className = "hero";

  const left = document.createElement("div");
  left.className = "panel";
  left.innerHTML = `
    <div class="panel__inner">
      <div class="kicker">🍯 Breakfast, but make it legendary</div>
      <h1>Breakfast all day. Coffee always. Regrets never.</h1>
      <p>
        Beary’s is a tiny breakfast bar with big “main character energy”.
        Warm plates, cold juice, and pancakes that will absolutely ruin other pancakes for you.
      </p>
      <div class="sep"></div>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a class="btn" href="#" data-cta="menu">View Menu</a>
        <span class="small">Open daily • 7:00am–2:00pm</span>
      </div>
    </div>
  `;

  const right = document.createElement("div");
  right.className = "panel";
  right.innerHTML = `
    <div class="panel__inner">
      <h2>Today’s Special</h2>
      <div class="card">
        <span class="badge">Limited</span>
        <h3 style="margin:10px 0 6px;">Honey-drizzled Pancakes</h3>
        <p class="small" style="margin:0 0 10px;">Fluffy stacks, whipped cream, and a dangerously good drizzle.</p>
        <div class="price">£6.50</div>
      </div>
      <div class="sep"></div>
      <p class="small">Tip: click Menu for the full list.</p>
    </div>
  `;

  hero.append(left, right);

  const below = document.createElement("section");
  below.className = "grid";
  below.style.marginTop = "18px";
  below.innerHTML = `
    <div class="card">
      <h3 style="margin:0 0 6px;">Fast & Friendly</h3>
      <p class="small" style="margin:0;">No 45-minute “artisan wait time”. You eat, you smile, you leave.</p>
    </div>
    <div class="card">
      <h3 style="margin:0 0 6px;">Simple Ingredients</h3>
      <p class="small" style="margin:0;">Good butter, fresh fruit, and coffee that has an actual plan.</p>
    </div>
    <div class="card">
      <h3 style="margin:0 0 6px;">Cozy Vibes</h3>
      <p class="small" style="margin:0;">Soft lighting, warm plates, and no loud motivational quotes.</p>
    </div>
  `;

  wrap.append(hero, below);
  return wrap;
}


/***/ },

/***/ "./src/tabs/menu.js"
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuTab)
/* harmony export */ });
function menuTab() {
  const wrap = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  const p = document.createElement("p");
  p.textContent = "Just good breakfast.";

  const sections = [
    {
      title: "Plates",
      items: [
        { name: "Honey Pancakes", desc: "Fluffy stacks, whipped cream, honey drizzle.", price: "£6.50", tag: "Popular" },
        { name: "Eggs & Toast", desc: "Two eggs any style, sourdough toast, butter.", price: "£5.00", tag: "Classic" },
        { name: "Granola Bowl", desc: "Yogurt, granola, berries, and just enough smugness.", price: "£4.75", tag: "Fresh" },
      ],
    },
    {
      title: "Drinks",
      items: [
        { name: "House Coffee", desc: "Strong enough to reboot your personality.", price: "£2.20", tag: "Hot" },
        { name: "Iced Latte", desc: "Cold, smooth, and dangerously drinkable.", price: "£3.20", tag: "Cold" },
        { name: "Bear-y Smoothie", desc: "Berries, yogurt, honey.", price: "£3.80", tag: "Fruit" },
      ],
    },
  ];

  wrap.append(h1, p);

  sections.forEach((sec) => {
    const panel = document.createElement("div");
    panel.className = "panel";
    panel.style.marginTop = "14px";

    const inner = document.createElement("div");
    inner.className = "panel__inner";

    const title = document.createElement("h2");
    title.textContent = sec.title;

    const grid = document.createElement("div");
    grid.className = "grid";
    grid.style.marginTop = "12px";

    sec.items.forEach((it) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <span class="badge">${it.tag}</span>
        <h3 style="margin:10px 0 6px;">${it.name}</h3>
        <p class="small" style="margin:0 0 10px;">${it.desc}</p>
        <div class="price">${it.price}</div>
      `;
      grid.appendChild(card);
    });

    inner.append(title, grid);
    panel.appendChild(inner);
    wrap.appendChild(panel);
  });

  return wrap;
}


/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/home */ "./src/tabs/home.js");
/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/menu */ "./src/tabs/menu.js");
/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/contact */ "./src/tabs/contact.js");






const content = document.getElementById("content");
const buttons = Array.from(document.querySelectorAll(".nav__btn"));

const routes = {
  home: _tabs_home__WEBPACK_IMPORTED_MODULE_1__["default"],
  menu: _tabs_menu__WEBPACK_IMPORTED_MODULE_2__["default"],
  contact: _tabs_contact__WEBPACK_IMPORTED_MODULE_3__["default"],
};

function setActive(tab) {
  buttons.forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
}

function render(tab) {
  content.textContent = "";               // wipe existing DOM
  const node = routes[tab]();             // create DOM for tab
  content.appendChild(node);              // mount it
  content.querySelectorAll("[data-cta='menu']").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      render("menu");
    });
  });
  setActive(tab);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => render(btn.dataset.tab));
});

// initial load
render("home");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgLS1iZzA6IzBiMGYxNztcbiAgLS1iZzE6IzBmMTcyYTtcbiAgLS1jYXJkOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICAtLWNhcmQyOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTApO1xuICAtLXRleHQ6I2U1ZTdlYjtcbiAgLS1tdXRlZDojYTdiMGMwO1xuICAtLWxpbmU6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gIC0tYWNjZW50OiNmZmI3MDM7XG4gIC0tYWNjZW50MjojZmI3MTg1O1xuICAtLXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLDAsMCwwLjM1KTtcbiAgLS1yYWRpdXM6IDE4cHg7XG59XG5cbip7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgfVxuaHRtbCwgYm9keXsgaGVpZ2h0OjEwMCU7IH1cbmJvZHl7XG4gIG1hcmdpbjowO1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6dmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KDEwMDBweCA1MDBweCBhdCAyMCUgLTEwJSwgcmdiYSgyNTEsMTEzLDEzMywwLjI1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoOTAwcHggNDUwcHggYXQgODAlIDAlLCByZ2JhKDI1NSwxODMsMywwLjIyKSwgdHJhbnNwYXJlbnQgNTUlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZzApLCB2YXIoLS1iZzEpKTtcbn1cblxuYXsgY29sb3I6aW5oZXJpdDsgfVxucHsgbGluZS1oZWlnaHQ6MS42OyBjb2xvcjp2YXIoLS1tdXRlZCk7IH1cblxuLnNpdGUtaGVhZGVye1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjU1KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xufVxuXG4ubmF2e1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6ZmxleDtcbiAgZ2FwOjEwcHg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG59XG5cbi5icmFuZHtcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGdhcDoxMHB4O1xuICB1c2VyLXNlbGVjdDpub25lO1xufVxuXG4uYnJhbmRfX2xvZ297XG4gIHdpZHRoOjM0cHg7XG4gIGhlaWdodDozNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDMwJSwgI2ZmZDE2NiwgI2ZmYjcwMyA1NSUsICNmYjcxODUpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMzUpO1xufVxuXG4uYnJhbmRfX25hbWV7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuLnRhYnN7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZ2FwOjEwcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xufVxuXG4ubmF2X19idG57XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTJzIGVhc2UsIGJhY2tncm91bmQgLjE4cyBlYXNlLCBvcGFjaXR5IC4xOHMgZWFzZTtcbn1cblxuLm5hdl9fYnRuOmhvdmVye1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5uYXZfX2J0bi5hY3RpdmV7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LDE4MywzLDAuMjUpLCByZ2JhKDI1MSwxMTMsMTMzLDAuMjIpKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE0KTtcbn1cblxuI2NvbnRlbnR7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjhweCAxNnB4IDcwcHg7XG59XG5cbi5oZXJve1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMC44ZnI7XG4gIGdhcDogMThweDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCl7XG4gIC5oZXJveyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAudGFic3sgZ2FwOjZweDsgfVxuICAubmF2X19idG57IHBhZGRpbmc6IDlweCAxMnB4OyB9XG59XG5cbi5wYW5lbHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWNhcmQpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuXG4ucGFuZWxfX2lubmVyeyBwYWRkaW5nOiAxOHB4OyB9XG5cbi5raWNrZXJ7XG4gIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgZ2FwOjhweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNCk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmgxe1xuICBtYXJnaW46IDEycHggMCAxMHB4O1xuICBmb250LXNpemU6IGNsYW1wKDI4cHgsIDMuMnZ3LCA0NHB4KTtcbiAgbGluZS1oZWlnaHQ6IDEuMDg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG59XG5cbmgye1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ncmlke1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMTRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcbiAgLmdyaWR7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG59XG5cbi5jYXJke1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xMnMgZWFzZSwgYmFja2dyb3VuZCAuMThzIGVhc2U7XG59XG5cbi5jYXJkOmhvdmVye1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG59XG5cbi5iYWRnZXtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjUwO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwxODMsMywwLjE4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMTgzLDMsMC4yNSk7XG59XG5cbi5wcmljZXtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4uYnRue1xuICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICBnYXA6MTBweDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwxODMsMywwLjIyKSwgcmdiYSgyNTEsMTEzLDEzMywwLjE4KSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTJzIGVhc2UsIGZpbHRlciAuMThzIGVhc2U7XG59XG5cbi5idG46aG92ZXJ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDYpOyB9XG5cbi5zbWFsbHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4uc2VweyBoZWlnaHQ6MXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1saW5lKTsgbWFyZ2luOiAxNHB4IDA7IH1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCOztBQUVBLEdBQUcscUJBQXFCLEVBQUU7QUFDMUIsWUFBWSxXQUFXLEVBQUU7QUFDekI7RUFDRSxRQUFRO0VBQ1IseUZBQXlGO0VBQ3pGLGlCQUFpQjtFQUNqQjs7O21EQUdpRDtBQUNuRDs7QUFFQSxHQUFHLGFBQWEsRUFBRTtBQUNsQixHQUFHLGVBQWUsRUFBRSxrQkFBa0IsRUFBRTs7QUFFeEM7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CO3FFQUNtRTtFQUNuRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlGQUFpRjtFQUNqRix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLE9BQU8sMEJBQTBCLEVBQUU7RUFDbkMsT0FBTyxPQUFPLEVBQUU7RUFDaEIsV0FBVyxpQkFBaUIsRUFBRTtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix3RUFBd0U7RUFDeEUsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBLGVBQWUsYUFBYSxFQUFFOztBQUU5QjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPLDBCQUEwQixFQUFFO0FBQ3JDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMsaUZBQWlGO0VBQ2pGLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlEQUFpRDtBQUNuRDs7QUFFQSxZQUFZLDJCQUEyQixFQUFFLHdCQUF3QixFQUFFOztBQUVuRSxRQUFRLGVBQWUsRUFBRSxtQkFBbUIsRUFBRTtBQUM5QyxNQUFNLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxjQUFjLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAtLWJnMDojMGIwZjE3O1xcbiAgLS1iZzE6IzBmMTcyYTtcXG4gIC0tY2FyZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcXG4gIC0tY2FyZDI6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMCk7XFxuICAtLXRleHQ6I2U1ZTdlYjtcXG4gIC0tbXV0ZWQ6I2E3YjBjMDtcXG4gIC0tbGluZTogcmdiYSgyNTUsMjU1LDI1NSwwLjEyKTtcXG4gIC0tYWNjZW50OiNmZmI3MDM7XFxuICAtLWFjY2VudDI6I2ZiNzE4NTtcXG4gIC0tc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsMCwwLDAuMzUpO1xcbiAgLS1yYWRpdXM6IDE4cHg7XFxufVxcblxcbip7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgfVxcbmh0bWwsIGJvZHl7IGhlaWdodDoxMDAlOyB9XFxuYm9keXtcXG4gIG1hcmdpbjowO1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjp2YXIoLS10ZXh0KTtcXG4gIGJhY2tncm91bmQ6XFxuICAgIHJhZGlhbC1ncmFkaWVudCgxMDAwcHggNTAwcHggYXQgMjAlIC0xMCUsIHJnYmEoMjUxLDExMywxMzMsMC4yNSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCg5MDBweCA0NTBweCBhdCA4MCUgMCUsIHJnYmEoMjU1LDE4MywzLDAuMjIpLCB0cmFuc3BhcmVudCA1NSUpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZzApLCB2YXIoLS1iZzEpKTtcXG59XFxuXFxuYXsgY29sb3I6aW5oZXJpdDsgfVxcbnB7IGxpbmUtaGVpZ2h0OjEuNjsgY29sb3I6dmFyKC0tbXV0ZWQpOyB9XFxuXFxuLnNpdGUtaGVhZGVye1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjU1KTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcXG59XFxuXFxuLm5hdntcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OmZsZXg7XFxuICBnYXA6MTBweDtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnJhbmR7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICBnYXA6MTBweDtcXG4gIHVzZXItc2VsZWN0Om5vbmU7XFxufVxcblxcbi5icmFuZF9fbG9nb3tcXG4gIHdpZHRoOjM0cHg7XFxuICBoZWlnaHQ6MzRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAzMCUsICNmZmQxNjYsICNmZmI3MDMgNTUlLCAjZmI3MTg1KTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4zNSk7XFxufVxcblxcbi5icmFuZF9fbmFtZXtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XFxufVxcblxcbi50YWJze1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZ2FwOjEwcHg7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7XFxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG59XFxuXFxuLm5hdl9fYnRue1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjEycyBlYXNlLCBiYWNrZ3JvdW5kIC4xOHMgZWFzZSwgb3BhY2l0eSAuMThzIGVhc2U7XFxufVxcblxcbi5uYXZfX2J0bjpob3ZlcntcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4ubmF2X19idG4uYWN0aXZle1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LDE4MywzLDAuMjUpLCByZ2JhKDI1MSwxMTMsMTMzLDAuMjIpKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNCk7XFxufVxcblxcbiNjb250ZW50e1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDI4cHggMTZweCA3MHB4O1xcbn1cXG5cXG4uaGVyb3tcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMC44ZnI7XFxuICBnYXA6IDE4cHg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KXtcXG4gIC5oZXJveyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxcbiAgLnRhYnN7IGdhcDo2cHg7IH1cXG4gIC5uYXZfX2J0bnsgcGFkZGluZzogOXB4IDEycHg7IH1cXG59XFxuXFxuLnBhbmVse1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1jYXJkKSwgcmdiYSgyNTUsMjU1LDI1NSwwLjAzKSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuLnBhbmVsX19pbm5lcnsgcGFkZGluZzogMThweDsgfVxcblxcbi5raWNrZXJ7XFxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgZ2FwOjhweDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjE0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbmgxe1xcbiAgbWFyZ2luOiAxMnB4IDAgMTBweDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMjhweCwgMy4ydncsIDQ0cHgpO1xcbiAgbGluZS1oZWlnaHQ6IDEuMDg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbn1cXG5cXG5oMntcXG4gIG1hcmdpbjogMCAwIDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5ncmlke1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMTRweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcXG4gIC5ncmlkeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxcbn1cXG5cXG4uY2FyZHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xMnMgZWFzZSwgYmFja2dyb3VuZCAuMThzIGVhc2U7XFxufVxcblxcbi5jYXJkOmhvdmVye1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcXG59XFxuXFxuLmJhZGdle1xcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDY1MDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwxODMsMywwLjE4KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDE4MywzLDAuMjUpO1xcbn1cXG5cXG4ucHJpY2V7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4uYnRue1xcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcXG4gIGdhcDoxMHB4O1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gIHBhZGRpbmc6IDExcHggMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwxODMsMywwLjIyKSwgcmdiYSgyNTEsMTEzLDEzMywwLjE4KSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjEycyBlYXNlLCBmaWx0ZXIgLjE4cyBlYXNlO1xcbn1cXG5cXG4uYnRuOmhvdmVyeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IGZpbHRlcjogYnJpZ2h0bmVzcygxLjA2KTsgfVxcblxcbi5zbWFsbHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XFxuLnNlcHsgaGVpZ2h0OjFweDsgYmFja2dyb3VuZDogdmFyKC0tbGluZSk7IG1hcmdpbjogMTRweCAwOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0VGFiKCkge1xuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBjb25zdCBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsYXlvdXQuY2xhc3NOYW1lID0gXCJncmlkXCI7XG4gIGxheW91dC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoMiwgMWZyKVwiO1xuICBsYXlvdXQuc3R5bGUuZ2FwID0gXCIxNHB4XCI7XG5cbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NOYW1lID0gXCJwYW5lbFwiO1xuICBpbmZvLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWxfX2lubmVyXCI+XG4gICAgICA8aDI+R2V0IGluIHRvdWNoPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXBcIj48L2Rpdj5cbiAgICAgIDxwPjxzdHJvbmc+UGhvbmU6PC9zdHJvbmc+IDxzcGFuIGNsYXNzPVwic21hbGxcIj4rNDQgMDAwMCAwMDAwMDA8L3NwYW4+PC9wPlxuICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XCJzbWFsbFwiPmhlbGxvQGJlYXJ5c2JyZWFrZmFzdC5mYWtlPC9zcGFuPjwvcD5cbiAgICAgIDxwPjxzdHJvbmc+QWRkcmVzczo8L3N0cm9uZz4gPHNwYW4gY2xhc3M9XCJzbWFsbFwiPjEgSG9uZXljb21iIExhbmUsIEJyZWFrZmFzdCBDaXR5PC9zcGFuPjwvcD5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJzLmNsYXNzTmFtZSA9IFwicGFuZWxcIjtcbiAgaG91cnMuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbF9faW5uZXJcIj5cbiAgICAgIDxoMj5Ib3VyczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VwXCI+PC9kaXY+XG4gICAgICA8cCBjbGFzcz1cInNtYWxsXCIgc3R5bGU9XCJtYXJnaW46MDtcIj5Nb27igJNGcmk6IDc6MDBhbSDigJMgMjowMHBtPC9wPlxuICAgICAgPHAgY2xhc3M9XCJzbWFsbFwiIHN0eWxlPVwibWFyZ2luOjhweCAwIDA7XCI+U2F04oCTU3VuOiA4OjAwYW0g4oCTIDM6MDBwbTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXBcIj48L2Rpdj5cbiAgICAgIDxhIGNsYXNzPVwiYnRuXCIgaHJlZj1cIiNcIiBkYXRhLWN0YT1cInJlc2VydmVcIj5SZXNlcnZlIGEgdGFibGU8L2E+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgbGF5b3V0LmFwcGVuZChpbmZvLCBob3Vycyk7XG5cbiAgLy8gUmVzcG9uc2l2ZTogMSBjb2x1bW4gb24gc21hbGwgc2NyZWVuc1xuICBsYXlvdXQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpXCI7XG5cbiAgd3JhcC5hcHBlbmQoaDEsIGxheW91dCk7XG4gIHJldHVybiB3cmFwO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVRhYigpIHtcbiAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBoZXJvLmNsYXNzTmFtZSA9IFwiaGVyb1wiO1xuXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0LmNsYXNzTmFtZSA9IFwicGFuZWxcIjtcbiAgbGVmdC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsX19pbm5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImtpY2tlclwiPvCfja8gQnJlYWtmYXN0LCBidXQgbWFrZSBpdCBsZWdlbmRhcnk8L2Rpdj5cbiAgICAgIDxoMT5CcmVha2Zhc3QgYWxsIGRheS4gQ29mZmVlIGFsd2F5cy4gUmVncmV0cyBuZXZlci48L2gxPlxuICAgICAgPHA+XG4gICAgICAgIEJlYXJ54oCZcyBpcyBhIHRpbnkgYnJlYWtmYXN0IGJhciB3aXRoIGJpZyDigJxtYWluIGNoYXJhY3RlciBlbmVyZ3nigJ0uXG4gICAgICAgIFdhcm0gcGxhdGVzLCBjb2xkIGp1aWNlLCBhbmQgcGFuY2FrZXMgdGhhdCB3aWxsIGFic29sdXRlbHkgcnVpbiBvdGhlciBwYW5jYWtlcyBmb3IgeW91LlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInNlcFwiPjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDsgZ2FwOjEycHg7IGZsZXgtd3JhcDp3cmFwO1wiPlxuICAgICAgICA8YSBjbGFzcz1cImJ0blwiIGhyZWY9XCIjXCIgZGF0YS1jdGE9XCJtZW51XCI+VmlldyBNZW51PC9hPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsXCI+T3BlbiBkYWlseSDigKIgNzowMGFt4oCTMjowMHBtPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByaWdodC5jbGFzc05hbWUgPSBcInBhbmVsXCI7XG4gIHJpZ2h0LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWxfX2lubmVyXCI+XG4gICAgICA8aDI+VG9kYXnigJlzIFNwZWNpYWw8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPkxpbWl0ZWQ8L3NwYW4+XG4gICAgICAgIDxoMyBzdHlsZT1cIm1hcmdpbjoxMHB4IDAgNnB4O1wiPkhvbmV5LWRyaXp6bGVkIFBhbmNha2VzPC9oMz5cbiAgICAgICAgPHAgY2xhc3M9XCJzbWFsbFwiIHN0eWxlPVwibWFyZ2luOjAgMCAxMHB4O1wiPkZsdWZmeSBzdGFja3MsIHdoaXBwZWQgY3JlYW0sIGFuZCBhIGRhbmdlcm91c2x5IGdvb2QgZHJpenpsZS48L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZVwiPsKjNi41MDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VwXCI+PC9kaXY+XG4gICAgICA8cCBjbGFzcz1cInNtYWxsXCI+VGlwOiBjbGljayBNZW51IGZvciB0aGUgZnVsbCBsaXN0LjwvcD5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBoZXJvLmFwcGVuZChsZWZ0LCByaWdodCk7XG5cbiAgY29uc3QgYmVsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgYmVsb3cuY2xhc3NOYW1lID0gXCJncmlkXCI7XG4gIGJlbG93LnN0eWxlLm1hcmdpblRvcCA9IFwiMThweFwiO1xuICBiZWxvdy5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxoMyBzdHlsZT1cIm1hcmdpbjowIDAgNnB4O1wiPkZhc3QgJiBGcmllbmRseTwvaDM+XG4gICAgICA8cCBjbGFzcz1cInNtYWxsXCIgc3R5bGU9XCJtYXJnaW46MDtcIj5ObyA0NS1taW51dGUg4oCcYXJ0aXNhbiB3YWl0IHRpbWXigJ0uIFlvdSBlYXQsIHlvdSBzbWlsZSwgeW91IGxlYXZlLjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGgzIHN0eWxlPVwibWFyZ2luOjAgMCA2cHg7XCI+U2ltcGxlIEluZ3JlZGllbnRzPC9oMz5cbiAgICAgIDxwIGNsYXNzPVwic21hbGxcIiBzdHlsZT1cIm1hcmdpbjowO1wiPkdvb2QgYnV0dGVyLCBmcmVzaCBmcnVpdCwgYW5kIGNvZmZlZSB0aGF0IGhhcyBhbiBhY3R1YWwgcGxhbi48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxoMyBzdHlsZT1cIm1hcmdpbjowIDAgNnB4O1wiPkNvenkgVmliZXM8L2gzPlxuICAgICAgPHAgY2xhc3M9XCJzbWFsbFwiIHN0eWxlPVwibWFyZ2luOjA7XCI+U29mdCBsaWdodGluZywgd2FybSBwbGF0ZXMsIGFuZCBubyBsb3VkIG1vdGl2YXRpb25hbCBxdW90ZXMuPC9wPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHdyYXAuYXBwZW5kKGhlcm8sIGJlbG93KTtcbiAgcmV0dXJuIHdyYXA7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51VGFiKCkge1xuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSBcIkp1c3QgZ29vZCBicmVha2Zhc3QuXCI7XG5cbiAgY29uc3Qgc2VjdGlvbnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiUGxhdGVzXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IG5hbWU6IFwiSG9uZXkgUGFuY2FrZXNcIiwgZGVzYzogXCJGbHVmZnkgc3RhY2tzLCB3aGlwcGVkIGNyZWFtLCBob25leSBkcml6emxlLlwiLCBwcmljZTogXCLCozYuNTBcIiwgdGFnOiBcIlBvcHVsYXJcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRWdncyAmIFRvYXN0XCIsIGRlc2M6IFwiVHdvIGVnZ3MgYW55IHN0eWxlLCBzb3VyZG91Z2ggdG9hc3QsIGJ1dHRlci5cIiwgcHJpY2U6IFwiwqM1LjAwXCIsIHRhZzogXCJDbGFzc2ljXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkdyYW5vbGEgQm93bFwiLCBkZXNjOiBcIllvZ3VydCwgZ3Jhbm9sYSwgYmVycmllcywgYW5kIGp1c3QgZW5vdWdoIHNtdWduZXNzLlwiLCBwcmljZTogXCLCozQuNzVcIiwgdGFnOiBcIkZyZXNoXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJEcmlua3NcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbmFtZTogXCJIb3VzZSBDb2ZmZWVcIiwgZGVzYzogXCJTdHJvbmcgZW5vdWdoIHRvIHJlYm9vdCB5b3VyIHBlcnNvbmFsaXR5LlwiLCBwcmljZTogXCLCozIuMjBcIiwgdGFnOiBcIkhvdFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJJY2VkIExhdHRlXCIsIGRlc2M6IFwiQ29sZCwgc21vb3RoLCBhbmQgZGFuZ2Vyb3VzbHkgZHJpbmthYmxlLlwiLCBwcmljZTogXCLCozMuMjBcIiwgdGFnOiBcIkNvbGRcIiB9LFxuICAgICAgICB7IG5hbWU6IFwiQmVhci15IFNtb290aGllXCIsIGRlc2M6IFwiQmVycmllcywgeW9ndXJ0LCBob25leS5cIiwgcHJpY2U6IFwiwqMzLjgwXCIsIHRhZzogXCJGcnVpdFwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgd3JhcC5hcHBlbmQoaDEsIHApO1xuXG4gIHNlY3Rpb25zLmZvckVhY2goKHNlYykgPT4ge1xuICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYW5lbC5jbGFzc05hbWUgPSBcInBhbmVsXCI7XG4gICAgcGFuZWwuc3R5bGUubWFyZ2luVG9wID0gXCIxNHB4XCI7XG5cbiAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5uZXIuY2xhc3NOYW1lID0gXCJwYW5lbF9faW5uZXJcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gc2VjLnRpdGxlO1xuXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSBcImdyaWRcIjtcbiAgICBncmlkLnN0eWxlLm1hcmdpblRvcCA9IFwiMTJweFwiO1xuXG4gICAgc2VjLml0ZW1zLmZvckVhY2goKGl0KSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhcmQuY2xhc3NOYW1lID0gXCJjYXJkXCI7XG4gICAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPiR7aXQudGFnfTwvc3Bhbj5cbiAgICAgICAgPGgzIHN0eWxlPVwibWFyZ2luOjEwcHggMCA2cHg7XCI+JHtpdC5uYW1lfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzPVwic21hbGxcIiBzdHlsZT1cIm1hcmdpbjowIDAgMTBweDtcIj4ke2l0LmRlc2N9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2VcIj4ke2l0LnByaWNlfTwvZGl2PlxuICAgICAgYDtcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSk7XG5cbiAgICBpbm5lci5hcHBlbmQodGl0bGUsIGdyaWQpO1xuICAgIHBhbmVsLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICB3cmFwLmFwcGVuZENoaWxkKHBhbmVsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdyYXA7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBob21lVGFiIGZyb20gXCIuL3RhYnMvaG9tZVwiO1xuaW1wb3J0IG1lbnVUYWIgZnJvbSBcIi4vdGFicy9tZW51XCI7XG5pbXBvcnQgY29udGFjdFRhYiBmcm9tIFwiLi90YWJzL2NvbnRhY3RcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19idG5cIikpO1xuXG5jb25zdCByb3V0ZXMgPSB7XG4gIGhvbWU6IGhvbWVUYWIsXG4gIG1lbnU6IG1lbnVUYWIsXG4gIGNvbnRhY3Q6IGNvbnRhY3RUYWIsXG59O1xuXG5mdW5jdGlvbiBzZXRBY3RpdmUodGFiKSB7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsIGIuZGF0YXNldC50YWIgPT09IHRhYikpO1xufVxuXG5mdW5jdGlvbiByZW5kZXIodGFiKSB7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiOyAgICAgICAgICAgICAgIC8vIHdpcGUgZXhpc3RpbmcgRE9NXG4gIGNvbnN0IG5vZGUgPSByb3V0ZXNbdGFiXSgpOyAgICAgICAgICAgICAvLyBjcmVhdGUgRE9NIGZvciB0YWJcbiAgY29udGVudC5hcHBlbmRDaGlsZChub2RlKTsgICAgICAgICAgICAgIC8vIG1vdW50IGl0XG4gIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWN0YT0nbWVudSddXCIpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZW5kZXIoXCJtZW51XCIpO1xuICAgIH0pO1xuICB9KTtcbiAgc2V0QWN0aXZlKHRhYik7XG59XG5cbmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyKGJ0bi5kYXRhc2V0LnRhYikpO1xufSk7XG5cbi8vIGluaXRpYWwgbG9hZFxucmVuZGVyKFwiaG9tZVwiKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=