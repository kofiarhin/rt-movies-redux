import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_PENDING,
  GET_MOVIES_FAILED,
  SET_PAGE_NUBMER,
  GET_MOVIE_PENDING,
  GET_MOVIE_FAILED,
  GET_MOVIE_SUCCESS,
} from "../constants";
const initialState = {
  isPending: true,
  moviesData: [],
  pageNumber: 1,
  movieData: {},
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_FAILED:
      return { ...state, isPending: false, error: action.payload };
    case GET_MOVIE_SUCCESS:
      return { ...state, isPending: false, movieData: action.payload };
    case GET_MOVIE_PENDING:
      return { ...state, isPending: true };
    case SET_PAGE_NUBMER:
      return { ...state, pageNumber: state.pageNumber + 1 };
    case GET_MOVIES_FAILED:
      return { ...state, error: action.payload, isPending: false };
    case GET_MOVIES_SUCCESS:
      return { ...state, isPending: false, moviesData: action.payload };
    case GET_MOVIES_PENDING:
      return { ...state, isPending: true };
    default:
      return state;
  }
};

export default moviesReducer;
