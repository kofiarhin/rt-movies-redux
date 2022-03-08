import { REMOVE_SIDE_NAV, SHOW_SIDE_NAV } from "../constants";
const initialState = {
  showSideNav: false,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_SIDE_NAV:
      return { ...state, showSideNav: false };
    case SHOW_SIDE_NAV:
      return { ...state, showSideNav: true };
    default:
      return state;
  }
};

export default navigationReducer;
