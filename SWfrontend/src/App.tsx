import './App.css'
import React from "react";
import CardFrame from './components/CardFrame.tsx';

import AppState from './interfaces/appState.ts';
import Logic from './logic.ts';

export default class App extends React.Component {

  public state: AppState = {
    planets: [],
    films: [],
    residents: []
  };

  componentDidMount(): void {
    new Logic().loadAllData().then((items) => {
      this.setState({
        planets: items.planets,
        films: items.films,
        residents: items.people
      });
    });
  }

  render() {
    const response = this.state.planets.length ? <CardFrame items={this.state.planets}></CardFrame> : <div>Loading...</div>;
    return <>
      {response}
    </>
  }
}

