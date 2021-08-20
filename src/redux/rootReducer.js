import {combineReducers} from 'redux';
import {booksReducer, favoritesReducer} from './reducers';

export default combineReducers({booksReducer, favoritesReducer});
