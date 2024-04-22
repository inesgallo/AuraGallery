import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import '@testing-library/jest-dom';
import LoginComponent from "./LoginComponent";
import { useUserHandler } from "../../handler/AuthHandler";

jest.mock("../../handler/AuthHandler", () => ({
    useUserHandler:  jest.fn(),
}));

describe("<LoginComponent />",()=>{
    beforeEach(() => {
    useUserHandler.mockReturnValue({
        handleLogin: jest.fn(),
    });
        
    });

    test("renders login page with correct title and elements", () => {
        render(<LoginComponent />);
        expect(screen.getByText('LOGIN')).toBeInTheDocument();
        expect(screen.getByText('SOLICITUD DE ACCESO')).toBeInTheDocument();
        expect(screen.getByText('nombre de usuario :')).toBeInTheDocument();
        expect(screen.getByText('contraseña :')).toBeInTheDocument();
        expect(screen.getByText('nombre :')).toBeInTheDocument();
        expect(screen.getByText('mensaje :')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'ACCEDER' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'ENVIAR' })).toBeInTheDocument();
  });


    test("submits login form correctly", ()=>{
        render(<LoginComponent />);
        const usernameInput = screen.getByLabelText('nombre de usuario :');
        const passwordInput = screen.getByLabelText('contraseña :');
        const submitButton = screen.getByRole('button', { name: 'ACCEDER' });

        fireEvent.change(usernameInput, { target: { value: 'gabyramos@gmail.com' } });
        fireEvent.change(passwordInput, { target: { value: '123456789' } });
        fireEvent.click(submitButton);

        expect(useUserHandler().handleLogin).toHaveBeenCalledWith('gabyramos@gmail.com', '123456789');
    });
    test("submits access request form correctly", () => {
        render(<LoginComponent />);
        const nameInput =  screen.getByLabelText('nombre :');
        const messageInput = screen.getByLabelText('mensaje :');
        const submitButton = screen.getByRole('button', {name:'ENVIAR'});

        fireEvent.change(nameInput, { target: { value: "Gabriela Ramos"} });
        fireEvent.change(messageInput, {target:{value:"Hola, quiero acceder al sistema"}});
        fireEvent.click(submitButton);

        expect(screen.getByText('Tu solicitud ha sido procesada.')).toBeInTheDocument();
        expect(screen.getByLabelText('nombre :')).toHaveValue('');
        expect(screen.getByLabelText('mensaje :')).toHaveValue('');
    });
});
