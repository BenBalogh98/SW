import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PlanetsPage from './pages/PlanetsPage.tsx';
import FilmsPage from './pages/FilmsPage.tsx';
import ResidentsPage from './pages/ResidentsPage.tsx';

import AppState from './interfaces/appState.ts';
import Logic from './logic.ts';

export default class App extends React.Component {

  public state: AppState = {
    planets: [],
    films: [],
    residents: []
  };

  componentDidMount(): void {
    new Logic().getData().then((items) => {
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
        <Routes>
          {/* Default route - will be a landing page later on */}
          <Route path="/" element={<Navigate to="/SW" replace />} />
          <Route path="/SW" element={<Navigate to="/SW" replace />} />

          {/* List routes */}
          <Route path="/SW/planets" element={<PlanetsPage planets={this.state.planets} />} />
          <Route path="/SW/films" element={<FilmsPage films={this.state.films} />} />
          <Route path="/SW/residents" element={<ResidentsPage residents={this.state.residents} />} />

          {/* Detail routes - same component, different URL structure */}
          <Route path="/SW/planet/:itemName" element={<PlanetsPage planets={this.state.planets} />} />
          <Route path="/SW/film/:itemName" element={<FilmsPage films={this.state.films} />} />
          <Route path="/SW/resident/:itemName" element={<ResidentsPage residents={this.state.residents} />} />
        </Routes>
      </Router>
    );
  }
}

