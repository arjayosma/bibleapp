import {FETCH_BIBLE_CHAPTER} from '../types';

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
        selectedChapter: data.selectedChapter,
        verses: data.verses,
      };
    default:
      return {...state};
  }
};
