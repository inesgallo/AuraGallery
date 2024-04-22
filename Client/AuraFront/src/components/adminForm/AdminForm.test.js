import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import AdminForm from "./AdminForm";

describe("<AdminForm/>",()=>{
    test("render admin form with correct text", ()=>{
        render(<AdminForm />);
        const titleElement = screen.getByText(/User Management/i);
        expect(titleElement).toBeInTheDocument();
        // fireEvent.click(button);
    });
    test("form updates input values on change", () => {
        render(<AdminForm />);
        const nameInput = screen.getAllByPlaceholderText('Name');
        fireEvent.change(nameInput, {target: {value: 'John'}});
        expect(nameInput.value).toBe( 'John');
    });
});
