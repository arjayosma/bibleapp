import {FETCH_BIBLE_CHAPTER, SET_SELECTED_CHAPTER} from '../types';
import {getBibleChapter} from '../../utils/api';

export const fetchBibleChapter = selection => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      const response = await getBibleChapter(selection);

      if (!response.error) {
        dispatch({
          data: {
            verses: response.verses,
          },
          type: FETCH_BIBLE_CHAPTER,
        });
      } else {
        reject(response.error);
      }

      resolve(true);
    });
  };
};

export const setSelectedChapter = selection => {
  return async dispatch => {
    return new Promise(resolve => {
      dispatch({
        data: {
          selectedChapter: selection,
        },
        type: SET_SELECTED_CHAPTER,
      });
      resolve(true);
    });
  };
};
