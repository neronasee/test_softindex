import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {reducer, createMiddleware, createLoader} from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import filter from 'redux-storage-decorator-filter';
import {ADD_USER, REMOVE_USER} from './constants';

import rootReducer from './reducers/';
const reducers = reducer(rootReducer);

let engine = createEngine('test-key');
engine = filter(engine, [
  'users'
])

const middleWare = createMiddleware(
  engine,
  [],
  [ADD_USER, REMOVE_USER]
);

let devMiddleware = [];
if (process.env.NODE_ENV === 'development') {
  devMiddleware = [...devMiddleware, logger]
}
;

const load = createLoader(engine);

const store = createStore(
  reducers,
  {},
  applyMiddleware(middleWare, ...devMiddleware)
);

load(store);

export default store;
