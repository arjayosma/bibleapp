import {TOGGLE_FAVORITE_VERSE} from '../types';

export const toggleFavoriteVerse = favorites => {
  return async dispatch => {
    return new Promise(resolve => {
      dispatch({data: favorites, type: TOGGLE_FAVORITE_VERSE});
      resolve(true);
    });
  };
};
