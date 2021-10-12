import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Styles from "./App.module.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Pokemon } from "./components/Pokemon/Pokemon";
import { pokemons } from "./pokemon";

export const App = () => {
  return (
    <div className={Styles.app}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/pokemon/:id" exact>
            {pokemons.map((pokemon, i) => {
              return (
                <Route key={i} path={`/pokemon/${pokemon.name}`}>
                  <Pokemon pokemon={pokemon} />
                </Route>
              );
            })}
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};
