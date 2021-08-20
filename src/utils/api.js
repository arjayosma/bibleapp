import {API_BIBLE_BASE_URL} from './constants';

export const getBibleChapter = async chapter => {
  const urlRequest = `${API_BIBLE_BASE_URL}/${encodeURIComponent(chapter)}`;
  const response = await fetch(urlRequest);
  return response.json();
};
