import './App.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Logic from './logic.ts';
import Planet from './items/planet.ts';
import Film from './items/film.ts';
import People from './items/resident.ts';
import { AppRoutes } from './AppRoutes.tsx';

interface AppProps {
  Router?: React.ComponentType<{ children: React.ReactNode }>;
}

const App: React.FC<AppProps> = ({ Router: RouterComponent = Router }) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [films, setFilms] = useState<Film[]>([]);
  const [residents, setResidents] = useState<People[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [logic] = useState(() => new Logic());

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
    <RouterComponent>
      <AppRoutes
        planets={planets}
        films={films}
        residents={residents}
        onSearch={handlePlanetSearch}
      />
    </RouterComponent>
  );
};

export default App;

