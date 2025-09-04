import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CardFrame from './components/CardFrame.tsx';
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
          {/* Default route - redirect to planets */}
          <Route path="/" element={<Navigate to="/SW/planets" replace />} />
          <Route path="/SW" element={<Navigate to="/SW/planets" replace />} />

          {/* List routes */}
          <Route path="/SW/planets" element={<CardFrame items={this.state.planets} />} />
          <Route path="/SW/films" element={<CardFrame items={this.state.films} />} />
          <Route path="/SW/residents" element={<CardFrame items={this.state.residents} />} />

          {/* Detail routes - same component, different URL structure */}
          <Route path="/SW/planet/:itemName" element={<CardFrame items={this.state.planets} />} />
          <Route path="/SW/film/:itemName" element={<CardFrame items={this.state.films} />} />
          <Route path="/SW/resident/:itemName" element={<CardFrame items={this.state.residents} />} />
        </Routes>
      </Router>
    );
  }
}

