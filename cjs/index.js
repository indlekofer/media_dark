"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "REDUCER", {
  enumerable: true,
  get: function get() {
    return _media.REDUCER;
  }
});
exports["default"] = exports.unset = exports.setup = exports.config = exports.GET_DARK = void 0;

var _media = require("@indlekofer/media");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var GET_DARK = '@indlekofer/media_dark/GET_DARK';
exports.GET_DARK = GET_DARK;

var config = function config() {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window.matchMedia) {
    var match = window.matchMedia('(prefers-color-scheme: dark)');

    if (match.matches) {
      // dark mode
      (0, _media.handleChange)(GET_DARK, true);
    } else {
      (0, _media.handleChange)(GET_DARK, false);
    }
  } else {
    (0, _media.handleChange)(GET_DARK, null);
  }
};

exports.config = config;

var setup = function setup() {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window.matchMedia) {
    window.addEventListener('change', config);
  }

  config();
};

exports.setup = setup;

var unset = function unset() {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object') {
    window.removeEventListener('change', config);
  }
};

exports.unset = unset;
setup();
var _default = GET_DARK;
exports["default"] = _default;