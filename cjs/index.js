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
exports["default"] = exports.unset = exports.setup = exports.init = exports.config = exports.GET_DARK = void 0;

var _media = require("@indlekofer/media");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var GET_DARK = '@indlekofer/media_dark/GET_DARK';
exports.GET_DARK = GET_DARK;
var __isInitialSetup = true;

var _handleChange = function _handleChange(e) {
  if (typeof e == 'undefined' || typeof e.matches == 'undefined') {
    config(null);
  } else if (e.matches) {
    config(true);
  } else {
    config(false);
  }
};

var config = function config(dark) {
  (0, _media.handleChange)(GET_DARK, dark);
};

exports.config = config;

var init = function init() {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window.matchMedia) {
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    _handleChange(mediaQuery);
  } else {
    config(null);
  }
};

exports.init = init;

var setup = function setup() {
  if (!__isInitialSetup) unset();

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window.matchMedia) {
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (typeof mediaQuery.addEventListener == 'function') {
      mediaQuery.addEventListener('change', _handleChange);
    } else if (typeof mediaQuery.addListener == 'function') {
      mediaQuery.addListener(_handleChange);
    }

    _handleChange(mediaQuery);
  } else {
    config(null);
  }

  __isInitialSetup = false;
};

exports.setup = setup;

var unset = function unset() {
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window.matchMedia) {
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (typeof mediaQuery.removeEventListener == 'function') {
      mediaQuery.removeEventListener('change', _handleChange);
    } else if (typeof mediaQuery.removeListener == 'function') {
      mediaQuery.removeListener(_handleChange);
    }
  }

  __isInitialSetup = true;
};

exports.unset = unset;
setup();
var _default = GET_DARK;
exports["default"] = _default;