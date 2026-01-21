import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/componentStyles/navigation.less';

interface NavigationProps {
    showSearch?: boolean;
    onSearch?: (searchTerm: string) => void;
    searchPlaceholder?: string;
}

const Navigation: React.FC<NavigationProps> = ({
    showSearch = false,
    onSearch,
    searchPlaceholder = "Search..."
}) => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    const isActive = (path: string) => location.pathname === path;

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch?.(value);
    };

    return (
        <nav className="navigation">
            <div className="nav-links">
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
            </div>
            {showSearch && (
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder={searchPlaceholder}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            )}
        </nav>
    );
};

export default Navigation;
