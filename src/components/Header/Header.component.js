import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="main-header">
        <Link to="/">
          <img src="/images/logo.jpg" alt="" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
