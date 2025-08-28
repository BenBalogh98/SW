import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();

    const navStyle = {
        padding: '20px',
        backgroundColor: '#1a1a1a',
        marginBottom: '20px'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '10px 20px',
        margin: '0 10px',
        borderRadius: '5px',
        backgroundColor: '#333',
        transition: 'background-color 0.2s'
    };

    const activeLinkStyle = {
        ...linkStyle,
        backgroundColor: '#007bff'
    };

    return (
        <nav style={navStyle}>
            <Link
                to="/SW/planets"
                style={location.pathname === '/SW/planets' ? activeLinkStyle : linkStyle}
            >
                Planets
            </Link>
            <Link
                to="/SW/films"
                style={location.pathname === '/SW/films' ? activeLinkStyle : linkStyle}
            >
                Films
            </Link>
            <Link
                to="/SW/residents"
                style={location.pathname === '/SW/residents' ? activeLinkStyle : linkStyle}
            >
                Residents
            </Link>
        </nav>
    );
};

export default Navigation;
