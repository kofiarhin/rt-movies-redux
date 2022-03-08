import { Action } from "history";
import {
  SET_SEARCH_FIELD,
  SEARCH_MOVIE_PENDING,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILED,
} from "../constants";

export const setSearchField = (text) => {
  return {
    type: SET_SEARCH_FIELD,
    payload: text,
  };
};

export const searchMovie =
  (search, pageNumber = 1) =>
  (dispatch) => {
    dispatch({
      type: SEARCH_MOVIE_PENDING,
    });

    console.log({
      search,
      pageNumber,
    });

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=${pageNumber}&include_adult=false`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: SEARCH_MOVIE_SUCCESS,
          payload: result.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: SEARCH_MOVIE_FAILED,
          payload: error,
        });
      });
  };
