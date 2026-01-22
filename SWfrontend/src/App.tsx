import './App.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import PlanetsPage from './pages/PlanetsPage.tsx';
import FilmsPage from './pages/FilmsPage.tsx';
import ResidentsPage from './pages/ResidentsPage.tsx';
import Logic from './logic.ts';
import Planet from './items/planet.ts';
import Film from './items/film.ts';
import People from './items/resident.ts';

const App: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [films, setFilms] = useState<Film[]>([]);
  const [residents, setResidents] = useState<People[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const logic = new Logic();

  useEffect(() => {
    logic.getData().then((items) => {
      setPlanets(items.planets);
      setFilms(items.films);
      setResidents(items.people);
      setIsLoading(false);
    });
  }, []);

  const handlePlanetSearch = async (searchTerm: string) => {
    const filteredPlanets = await logic.searchPlanets(searchTerm);
    setPlanets(filteredPlanets);
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', color: 'white', marginTop: '2rem' }}>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/SW" replace />} />
        <Route path="/SW" element={<LandingPage />} />

        {/* List routes */}
        <Route path="/SW/planets" element={<PlanetsPage planets={planets} onSearch={handlePlanetSearch} />} />
        <Route path="/SW/films" element={<FilmsPage films={films} />} />
        <Route path="/SW/residents" element={<ResidentsPage residents={residents} />} />

        {/* Detail routes - same component, different URL structure */}
        <Route path="/SW/planet/:itemName" element={<PlanetsPage planets={planets} onSearch={handlePlanetSearch} />} />
        <Route path="/SW/film/:itemName" element={<FilmsPage films={films} />} />
        <Route path="/SW/resident/:itemName" element={<ResidentsPage residents={residents} />} />
      </Routes>
    </Router>
  );
};

export default App;

