import {TOGGLE_FAVORITE_VERSE} from '../types';

const initialState = {
  favorites: [],
};

export default (state = initialState, action) => {
  const {data, type} = action;
  switch (type) {
    case TOGGLE_FAVORITE_VERSE:
      let {favorites} = state;
      const {favorite} = data;
      // To do
      return {...state, favorites: [...favorites]};
    default:
      return {...state};
  }
};
