import assert from 'assert';
import store from '@indlekofer/redux-store';

import { GET_DARK, REDUCER, config } from '../src/index';

function handleChangeTest(done, dark) {
  const state = store.getState()[REDUCER].get(GET_DARK)
  assert.equal(dark, state);
  done();
}

describe('config', () => {
  let unsubscribe;
  beforeEach(() => {
    store.dispatch({type: '@indlekofer/media/TYPE_CHANGE', payload: {key: GET_DARK, value: null}});
  });
  afterEach(() => {
    unsubscribe();
  });
  it('check null', (done) => {
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, null));
    config(null);
  });
  it('check false', (done) => {
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, false));
    config(false);
  });
  it('check true', (done) => {
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, true));
    config(true);
  });
});

