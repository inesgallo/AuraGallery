import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom;'
import App from './App.jsx'

describe("<App/>",()=>{
    test("Funcionalidad del boton Count", ()=>{
        render(<App/>);

        const button = screen.getByText(/count is 0/i);

        fireEvent.click(button);

        expect(screen.getByText(/count is 1/i)).tiBeInTheDocument();
    })
})