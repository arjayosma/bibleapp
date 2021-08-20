import {FETCH_BIBLE_CHAPTER, SET_SELECTED_CHAPTER} from '../types';

const initialState = {
  selectedChapter: null,
  verses: [],
};

export default (state = initialState, action) => {
  const {data, type} = action;
  switch (type) {
    case FETCH_BIBLE_CHAPTER:
      return {
        ...state,
        verses: data.verses,
      };
    case SET_SELECTED_CHAPTER:
      return {
        ...state,
        selectedChapter: data.selectedChapter,
      };
    default:
      return {...state};
  }
};
