import { SHOW_SIDE_NAV } from "../constants";
import { REMOVE_SIDE_NAV } from "../constants";
export const onSetShowSideNav = () => {
  return {
    type: SHOW_SIDE_NAV,
  };
};

export const removeSideNav = () => {
  return {
    type: REMOVE_SIDE_NAV,
  };
};
