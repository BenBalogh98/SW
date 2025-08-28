import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardFrame from './components/CardFrame.tsx';
import DetailView from './components/DetailView.tsx';
import Navigation from './components/Navigation.tsx';

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
    if (!this.state.planets.length) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/SW/planets" element={<CardFrame items={this.state.planets} />} />
          <Route path="/SW/films" element={<CardFrame items={this.state.films} />} />
          <Route path="/SW/residents" element={<CardFrame items={this.state.residents} />} />
          <Route path="/SW/planet/:itemName" element={<DetailView items={this.state.planets} />} />
          <Route path="/SW/film/:itemName" element={<DetailView items={this.state.films} />} />
          <Route path="/SW/resident/:itemName" element={<DetailView items={this.state.residents} />} />
        </Routes>
      </Router>
    );
  }
}

