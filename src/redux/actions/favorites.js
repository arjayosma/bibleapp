import {TOGGLE_FAVORITE_VERSE} from '../types';

export const toggleFavoriteVerse = verseDetails => {
  return async dispatch => {
    return new Promise(resolve => {
      dispatch({data: verseDetails, type: TOGGLE_FAVORITE_VERSE});
      resolve(true);
    });
  };
};
