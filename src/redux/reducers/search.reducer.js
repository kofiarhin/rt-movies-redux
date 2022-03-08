import { SEARCH_MOVIE_PENDING, SET_SEARCH_FIELD } from "../constants";

const initialState = {
  searchField: "",
  searchMovies: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_PENDING:
      return { ...state, isPending: true };
    case SET_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
