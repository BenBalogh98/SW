import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import PlanetsPage from './pages/PlanetsPage.tsx';
import FilmsPage from './pages/FilmsPage.tsx';
import ResidentsPage from './pages/ResidentsPage.tsx';
import Planet from './items/planet.ts';
import Film from './items/film.ts';
import People from './items/resident.ts';

export const AppRoutes: React.FC<{ planets: Planet[], films: Film[], residents: People[], onSearch: (searchTerm: string) => void }> = ({ planets, films, residents, onSearch }) => {
    debugger;
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/SW" replace />} />
            <Route path="/SW" element={<LandingPage />} />
            <Route path="/SW/" element={<LandingPage />} />

            <Route path="/SW/planets" element={<PlanetsPage planets={planets} onSearch={onSearch} />} />
            <Route path="/SW/films" element={<FilmsPage films={films} />} />
            <Route path="/SW/residents" element={<ResidentsPage residents={residents} />} />

            <Route path="/SW/planet/:itemName" element={<PlanetsPage planets={planets} onSearch={onSearch} />} />
            <Route path="/SW/film/:itemName" element={<FilmsPage films={films} />} />
            <Route path="/SW/resident/:itemName" element={<ResidentsPage residents={residents} />} />
        </Routes>
    )
}