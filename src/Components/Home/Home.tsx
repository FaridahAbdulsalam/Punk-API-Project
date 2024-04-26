import { Beer } from "../../types/types";
import "./Home.scss";
import { Link } from "react-router-dom";

type HomeProps = {
  beers: Beer[];
};

const Home = ({ beers }: HomeProps) => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">BEER-necessities!</h1>
      </header>
      <main className="main">
        <h2 className="main__tagline">
          A cool database that contains Ale you need when it comes to anything
          BEER!
        </h2>
        <p className="main__intro">
          This webpage allows you to search for your favourite beer or maybe
          you're just curious to know what's out there! Find out all the
          important information such as the Alcohol level of each beer, or more
          interesting facts such as which food pairing goes best with it!{" "}
        </p>
        <Link to="/cards" className="main__link">see all beer cards</Link>
      </main>
      <section className="beer-list">
        <h3 className="beer-list__heading">Recognise any of these? Click one to find out more</h3>
        {beers.map((beer) => (
          <Link className="beer-list__link" to={`/cards/${beer.name}`}>
            <p className="beer-list__names">{beer.name}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
