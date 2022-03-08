import "./sideNav.styles.css";
const SideNav = ({ showSideNav, onSetShowSideNav }) => {
  return (
    <div className="sideNav">
      {/* close */}
      <div className="close" onClick={() => onSetShowSideNav(!showSideNav)}>
        <i className="fa fa-close"></i>
      </div>
      <h1 className="title"> CineHouse</h1>

      <div className="search">
        <input type="text" placeholder="Search Movies" />
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default SideNav;
