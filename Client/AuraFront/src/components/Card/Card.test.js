import React from "react";
import { render, screen } from '@testing-library/react';
import Card from './Card';

jest.mock('../../context/UserContext.jsx', () => ({
    UserContext: {
        __esModule: true,
        default: jest.requireActual('react').createContext({ isLoggedIn: true }),
    },
}));
//     ...jest.requireActual('react'),
//     useContext: jest.fn(),
// }));

describe('Card', () => {
    it("renders without crashing", ()  => {
    // React.useContext.mockReturnValue({ isLoggedIn: true });

    const { getByText } = render(<Card />);

    expect(getByText('AÑADIR AL CARRITO')).toBeInTheDocument();
    expect(getByText('COMPRAR')).toBeInTheDocument();
    });
});



// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// // import { BrowserRouter as Router } from 'react-router-dom';
// import '@testing-library/jest-dom'
// import Card from './Card';
// import { MemoryRouter } from 'react-router-dom';
// // import { UserContext } from '../../context/UserContext'
// import {useContext} from 'react';

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext:jest.fn(),
// }));

// describe('Card', () => {
//   it('renders correctly and displays the addToCart button', () => {
//     useContext.mockImplementation(() => ({isLoggedIn : true}))
//     render(
//         <MemoryRouter>
//             <Card />
//         </MemoryRouter> 
//       );
//      const addToCartButton = screen.getByText(/AÑADIR AL CARRITO/i);
//      expect(addToCartButton).toBeInTheDocument();
//   });
//  });

//  afterEach(() => {
//     jest.clearAllMocks();
//  });

// jest.mock('../../context/UserContext', () => ({
//     UserContext: {
//         Provider: ({ children }) => children,
//         Consumer: ({ children }) => children({ isLoggedIn:true }),
//     },
// }));

//  <UserContext.Provider value={{ isLoggedIn : true}}></UserContext.Provider>
//