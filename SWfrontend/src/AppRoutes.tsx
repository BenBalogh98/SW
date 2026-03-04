import React from 'react';
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import PlanetsPage from './pages/PlanetsPage.tsx';
import FilmsPage from './pages/FilmsPage.tsx';
import ResidentsPage from './pages/ResidentsPage.tsx';
import Planet from './items/planet.ts';
import Film from './items/film.ts';
import People from './items/resident.ts';
import { homePageBreadcrumb, planetsPageBreadcrumb, filmsPageBreadcrumb, residentsPageBreadcrumb, planetDetailsBreadcrumb, filmDetailsBreadcrumb, residentDetailsBreadcrumb } from './consts/breadcrumbFunctions.ts';

export const AppRoutes: React.FC<{ planets: Planet[], films: Film[], residents: People[], onSearch: (searchTerm: string) => void }> = ({ planets, films, residents, onSearch }) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/SW" replace />} />
            <Route path="/SW" element={<LandingPage />} handle={homePageBreadcrumb} />
            <Route path="/SW/" element={<LandingPage />} handle={homePageBreadcrumb} />

            <Route path="/SW/planets" element={<PlanetsPage planets={planets} onSearch={onSearch} />} handle={planetsPageBreadcrumb} />
            <Route path="/SW/films" element={<FilmsPage films={films} />} handle={filmsPageBreadcrumb} />
            <Route path="/SW/residents" element={<ResidentsPage residents={residents} />} handle={residentsPageBreadcrumb} />

            <Route path="/SW/planet/:itemName" element={<PlanetsPage planets={planets} onSearch={onSearch} />} handle={planetDetailsBreadcrumb} />
            <Route path="/SW/film/:itemName" element={<FilmsPage films={films} />} handle={filmDetailsBreadcrumb} />
            <Route path="/SW/resident/:itemName" element={<ResidentsPage residents={residents} />} handle={residentDetailsBreadcrumb} />
        </Routes>
    )
}