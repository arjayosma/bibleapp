import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [thunk];

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);
