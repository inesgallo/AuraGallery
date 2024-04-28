import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';
import { UserContext } from '../../context/UserContext';

describe('Card component', () => {
    test('renders Add to Cart and By Now buttons',() => {
        const userContextValue = {
            isLoggedIn: false,
        };
        const mockProducts = [
            {
                title_product: 'Producto 1',
                name_artist: 'Artista 1',
                description_product: 'Descripción del producto 1',
                price_product: 100,
                image_product: 'ruta/a/la/imagen.jpg', 
            },
        ];
        render(
            <Router>
                <UserContext.Provider value={userContextValue}>
                    <Card category_product="category" products={mockProducts} />
                </UserContext.Provider>
            </Router>
        );
        const addToCartButton = screen.getByText((content, element) => content.includes('AÑADIR AL CARRITO'));
        const buyNowButton = screen.getByText((content, element) => content.includes('COMPRAR'));


        expect(addToCartButton).toBeInTheDocument();
        expect(buyNowButton).toBeInTheDocument();
    });
});