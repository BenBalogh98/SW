import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/componentStyles/navigation.less';

const Navigation: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="navigation">
            <Link
                to="/SW/planets"
                className={`nav-link ${isActive('/SW/planets') ? 'active' : ''}`}
            >
                Planets
            </Link>
            <Link
                to="/SW/films"
                className={`nav-link ${isActive('/SW/films') ? 'active' : ''}`}
            >
                Films
            </Link>
            <Link
                to="/SW/residents"
                className={`nav-link ${isActive('/SW/residents') ? 'active' : ''}`}
            >
                Residents
            </Link>
        </nav>
    );
};

export default Navigation;
