import assert from 'assert';
import store from '@indlekofer/redux-store';

import { GET_DARK, REDUCER, setup } from '../src/index';

function handleChangeTest(done, dark) {
  const state = store.getState()[REDUCER].get(GET_DARK)
  assert.equal(dark, state);
  done();
}

const matchMediaTrue = {
  matchMedia: () => { return { matches: true } },
  addEventListener: () => {}
};

const matchMediaFalse = {
  matchMedia: () => { return { matches: false } },
  addEventListener: () => {}
};


describe('setup', () => {
  let unsubscribe;
  afterEach(() => {
    unsubscribe();
  });
  it('initial without window', (done) => {
    global.window = undefined;
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, null));
    setup();
  });
  it('check light', (done) => {
    global.window = matchMediaFalse;
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, false));
    setup();
  });
  it('fine dark', (done) => {
    global.window = matchMediaTrue;
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, true));
    setup();
  });
});

