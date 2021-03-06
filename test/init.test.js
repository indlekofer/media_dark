import assert from 'assert';
import store from '@indlekofer/redux-store';
import { GET_DARK, REDUCER, init } from '../src/index';

function handleChangeTest(done, dark) {
  const state = store.getState()[REDUCER].get(GET_DARK)
  assert.equal(dark, state);
  done();
}

describe('init', () => {
  let unsubscribe;
  beforeEach(() => {
    store.dispatch({type: '@indlekofer/media/TYPE_CHANGE', payload: {key: GET_DARK, value: false}});
  });
  afterEach(() => {
    unsubscribe();
  });
  it('without window', (done) => {
    global.window = undefined;
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, null));
    init();
  });
  it('empty window', (done) => {
    global.window = {};
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, null));
    init();
  });
  it('empty matches', (done) => {
    global.window = {
      matchMedia: () => {}
    };
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, null));
    init();
  });
});

