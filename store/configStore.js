import rootReducer from '../reducer/index';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store=createStore(rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;