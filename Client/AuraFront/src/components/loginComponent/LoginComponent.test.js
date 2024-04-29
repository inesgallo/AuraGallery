import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import LoginComponent from './LoginComponent';

describe('LoginComponent', () => {
  it('renders correctly and displays the login button', () => {
     render(
     <Router>
      <LoginComponent />
      </Router>
      );
     const loginButton = screen.getByText(/ACCEDER/i);
     expect(loginButton).toBeInTheDocument();
  });
 });