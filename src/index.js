import { handleChange, REDUCER } from '@indlekofer/media';

export const GET_DARK = '@indlekofer/media_dark/GET_DARK';

let __isInitialSetup = true;

const _handleChange = (e) => {
  if (typeof e == 'undefined' || typeof e.matches == 'undefined') {
    config(null);
  } else if (e.matches) {
    config(true);
  } else {
    config(false);
  }
};

export const config = (dark) => {
  handleChange(GET_DARK, dark);
};

export const init = () => {
  if (typeof window == 'object' && window.matchMedia) {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    _handleChange(mediaQuery);
  } else {
    config(null);
  }
};

export const setup = () => {
  if (!__isInitialSetup) unset();
  if (typeof window == 'object' && window.matchMedia) {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
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

export const unset = () => {
  if (typeof window == 'object' && window.matchMedia) {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (typeof mediaQuery.removeEventListener == 'function') {
      mediaQuery.removeEventListener('change', _handleChange);
    } else if (typeof mediaQuery.removeListener == 'function') {
      mediaQuery.removeListener(_handleChange);
    }
  }
  __isInitialSetup = true;
};

setup();

export {
  REDUCER
};

export default GET_DARK;
