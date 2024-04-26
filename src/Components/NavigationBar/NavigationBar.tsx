import { Link } from "react-router-dom";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <button className="nav-bar__home">Home</button>
      </Link>
      <h1 className="nav-bar__heading">BEER-necessities</h1>
      <Link to="/cards">
        <button className="nav-bar__cards">All Cards</button>
      </Link>
    </nav>
  );
};

export default NavigationBar;
