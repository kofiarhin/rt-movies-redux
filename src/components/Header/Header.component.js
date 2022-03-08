import "./header.styles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNav from "../SideNav/SideNav.component";

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div>
      {showSideNav ? (
        <SideNav showSideNav={showSideNav} onSetShowSideNav={setShowSideNav} />
      ) : (
        ""
      )}

      <header className="main-header">
        <Link to="/">
          <img src="/images/logo.jpg" alt="" />
        </Link>

        <div className="search">
          <input type="text" placeholder="Search Movies" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="menu" onClick={() => setShowSideNav(!showSideNav)}>
          <i className="fa fa-bars"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
