import './App.css'
import React from "react";
import CardFrame from './components/CardFrame.tsx';

import AppState from './interfaces/appState.ts';
import SwapiRequests from './ajaxControls/swapiRequests.ts';
import Planet from './items/planet.ts';
import Item from './interfaces/item.ts';

export default class App extends React.Component {

  public state: AppState = {
    planets: []
  };

  componentDidMount(): void {
    const swapi = new SwapiRequests();
    swapi.getSWPlanets().then((planets) => {
      const items: Item[] = [];
      planets.results.forEach((planet) => {
        items.push(new Planet(planet));
      });
      this.setState({
        planets: items
      });
    });
  }
  render() {
    return <>
      {this.state.planets.length ? <CardFrame items={this.state.planets}></CardFrame> : <div>Loading...</div>}
    </>
  }
}

