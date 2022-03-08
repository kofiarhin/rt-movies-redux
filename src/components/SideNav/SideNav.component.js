import "./sideNav.styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  onSetShowSideNav,
  removeSideNav,
} from "../../redux/actions/navigation.actions";
import Search from "../Search/Search.component";

const SideNav = () => {
  const { showSideNav } = useSelector((state) => state.navigationReducer);

  const dispatch = useDispatch();

  return (
    <div className="sideNav">
      {/* close */}
      <div className="close" onClick={() => dispatch(removeSideNav())}>
        <i className="fa fa-close"></i>
      </div>
      <h1 className="title"> CineHouse</h1>

      <Search />

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default SideNav;
