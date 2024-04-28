import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarCustom from './NavbarCustom';
import { UserContext } from '../../context/UserContext';

describe('NavbarCustom component', () => {
    test('renders catalogo and Login buttons', () => {
        const UserContextValue = {
            isLoggedIn: false,
            logout: jest.fn(),
        };
        render(
            <Router>
                <UserContext.Provider value={UserContextValue}>
                    <NavbarCustom />
                </UserContext.Provider>
            </Router>
        
        );
        // expect(screen.getByAltText('logo galeria arte AuraGallery')).toBeInTheDocument();
        expect(screen.getByText('catálogo')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();

    });
});