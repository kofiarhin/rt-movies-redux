import {
  GET_MOVIES_PENDING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILED,
  SET_PAGE_NUBMER,
  GET_MOVIE_PENDING,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILED,
} from "../constants";

// set page number
export const setPageNumber = () => {
  return {
    type: SET_PAGE_NUBMER,
  };
};

// get movie
export const getMovie = (id) => (dispatch) => {
  dispatch({
    type: GET_MOVIE_PENDING,
  });

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US
  `;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: GET_MOVIE_SUCCESS,
        payload: result,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_MOVIE_FAILED,
        payload: error,
      });
    });
};

// get movies
export const getMovies =
  (pageNumber = 1) =>
  (dispatch) => {
    dispatch({
      type: GET_MOVIES_PENDING,
    });

    const url = `https://api.themoviedb.org/3/tv/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=${pageNumber}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: GET_MOVIES_SUCCESS,
          payload: result.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIES_FAILED,
          payload: error,
        });
      });
  };
