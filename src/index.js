import { handleChange, REDUCER } from '@indlekofer/media';

export const GET_DARK = '@indlekofer/media_dark/GET_DARK';

export const config = () => {
  if (typeof window == 'object' && window.matchMedia) {
    let match = window.matchMedia('(prefers-color-scheme: dark)');
    if (match.matches) {
      // dark mode
      handleChange(GET_DARK, true);
    } else {
      handleChange(GET_DARK, false);
    }
  } else {
    handleChange(GET_DARK, null);
  }
};

export const setup = () => {
  if (typeof window == 'object' && window.matchMedia) {
    window.addEventListener('change', config);
  }
  config();
};

export const unset = () => {
  if (typeof window == 'object') {
    window.removeEventListener('change', config);
  }
};

setup();

export {
  REDUCER
};

export default GET_DARK;
