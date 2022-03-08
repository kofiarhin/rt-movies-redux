import "./header.styles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNav from "../SideNav/SideNav.component";
import Search from "../Search/Search.component";
import { useDispatch, useSelector } from "react-redux";
import { onSetShowSideNav } from "../../redux/actions/navigation.actions";

const Header = () => {
  const { showSideNav } = useSelector((state) => state.navigationReducer);

  const dispatch = useDispatch();
  return (
    <div>
      {showSideNav ? <SideNav /> : ""}
      <header className="main-header">
        <Link to="/">
          <img src="/images/logo.jpg" alt="" />
        </Link>

        <Search />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div
          className="menu"
          onClick={() => dispatch(onSetShowSideNav(showSideNav))}
        >
          <i className="fa fa-bars"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
