import React from "react";
import "./Main.scss";
import { Beer } from "../../types/types";
import CardList from "../CardList/CardList";

type MainProps = {
  beers: Beer[];
};

const Main = ({ beers }: MainProps) => {
  return (
    <div className="main">
      <h1>Main Page</h1>
      <section>
        <CardList beers={beers} />
      </section>
    </div>
  );
};

export default Main;
