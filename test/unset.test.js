import assert from 'assert';

import { GET_DARK, REDUCER, unset } from '../src/index';

let counter = 0;

describe('setup', () => {
  beforeEach(() => {
    counter = 1;
  });
  it('unset undefined', () => {
    global.window = undefined
    unset();
    assert.equal(1, counter);
  });
  it('unset', () => {
    global.window = {
      removeEventListener: () => counter++ 
    };
    unset();
    assert.equal(2, counter);
  });
});

