import { Link } from "react-router-dom";
import "./NavigationBar.scss";
import Home from "../../assets/images/house-door-fill .png"
import Cards from "../../assets/images/front.png"

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={Home} className="nav-bar__home"/>
      </Link>
      <h1 className="nav-bar__heading">BEER-necessities</h1>
      <Link to="/cards">
      <img src={Cards} className="nav-bar__cards"/>
      </Link>
    </nav>
  );
};

export default NavigationBar;
