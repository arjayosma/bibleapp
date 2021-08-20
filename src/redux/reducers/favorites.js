import {TOGGLE_FAVORITE_VERSE} from '../types';

const initialState = {
  favorites: [],
};

export default (state = initialState, action) => {
  const {data, type} = action;
  switch (type) {
    case TOGGLE_FAVORITE_VERSE:
      const {favorites} = state;
      favorites.push(data);
      return {...state, favorites: [...favorites]};
    default:
      return {...state};
  }
};
