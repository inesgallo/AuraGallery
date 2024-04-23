import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginComponent from "./LoginComponent";
// import '@testing-library/jest-dom';
// import { useUserHandler } from "../../handler/AuthHandler";
// import { useUserHandler } from "../../handler/AuthHandler";

test('debería llamar a handleLogin cuando se hace clic en el botón ACCEDER', () => {
    const handleLogin = jest.fn();
    const { getByText } = render(<LoginComponent handleLogin={handleLogin} />);

    const button = getByText('ACCEDER');
    fireEvent.click(button);
    expect(handleLogin).toHaveBeenCalled();
});

// jest.mock("../../handler/AuthHandler", () => ({
//     useUserHandler:  jest.fn(() => ({
//        handleLogin:  jest.fn(),
//     })),
// }));
// describe("<LoginComponent />", ()=>{
//     test('El botón de enviar llama a handleLogin al enviar el formulario', () => {
//     const { getByText } = render (<LoginComponent />);
//     const submitButton = getByText(/ACCEDER/i);
//     fireEvent.submit(submitButton.closest("form"));
//     expect(jest.mocked(useUserHandler, 'useUserHandler').mock.results[0].value.handleLogin).toHaveBeenCalled(1);
//     });
// });
// }));

// describe("<LoginComponent />",()=>{
//     beforeEach(() => {
//     useUserHandler.mockReturnValue({});
//     });
//     test("renderiza la página de login con el título y elementos correctos", () => {
//         render(<LoginComponent />);
//         expect(screen.getByText("LOGIN")).toBeInTheDocument();
//         expect(screen.getByText("SOLICITUD DE ACCESO")).toBeInTheDocument();
//         // ... otras afirmaciones para elementos y etiquetas
//       });
//       test("envía el formulario de login correctamente", async () => {
//         const nombreUsuario = "gabyramos@gmail.com";
//         const contraseña = "123456789";
//         useUserHandler.mockReturnValueOnce({
//             handleLogin: (u, p) => {
//               return new Promise((resolve, reject) => {
//                 // Simular inicio de sesión exitoso
//                 resolve({ success: true });
//               });
//             },
//           });
    
//         render(<LoginComponent />);
//         const inputNombreUsuario = screen.getByLabelText("nombre de usuario :");
//         const inputContraseña = screen.getByLabelText("contraseña :");
//         const botonEnviar = screen.getByRole("button", { name: "ACCEDER" });

//         fireEvent.change(inputNombreUsuario, { target: { value: nombreUsuario } });
//         fireEvent.change(inputContraseña, { target: { value: contraseña } });
//         fireEvent.click(botonEnviar);

//         // Afirmar inicio de sesión exitoso
//         await expect(useUserHandler().handleLogin).toHaveBeenCalledWith(nombreUsuario, contraseña);
//     // Puedes agregar afirmaciones adicionales basadas en el comportamiento de tu componente después de un inicio de sesión exitoso
//     });

//   // Agrega una prueba similar para el formulario de solicitud de acceso, simulando su comportamiento y afirmando los resultados esperados
// });



// //         handleLogin: (username, password) => {
// //             return new Promise((resolve, reject) => {
// //                 resolve({success: true}); 
// //             });
// //         }, 
// //         // jest.fn(),
// //     });
        
// //     });

// //     test("renders login page with correct title and elements", () => {
// //         render(<LoginComponent />);
// //         expect(screen.getByText('LOGIN')).toBeInTheDocument();
// //         expect(screen.getByText('SOLICITUD DE ACCESO')).toBeInTheDocument();
// //         expect(screen.getByText('nombre de usuario :')).toBeInTheDocument();
// //         expect(screen.getByText('contraseña :')).toBeInTheDocument();
// //         expect(screen.getByText('nombre :')).toBeInTheDocument();
// //         expect(screen.getByText('mensaje :')).toBeInTheDocument();
// //         expect(screen.getByRole('button', { name: 'ACCEDER' })).toBeInTheDocument();
// //         expect(screen.getByRole('button', { name: 'ENVIAR' })).toBeInTheDocument();
// //   });


// //     test("submits login form correctly", ()=>{
// //         render(<LoginComponent />);
// //         const usernameInput = screen.getByLabelText('nombre de usuario :');
// //         const passwordInput = screen.getByLabelText('contraseña :');
// //         const submitButton = screen.getByRole('button', { name: 'ACCEDER' });

// //         fireEvent.change(usernameInput, { target: { value: 'gabyramos@gmail.com' } });
// //         fireEvent.change(passwordInput, { target: { value: '123456789' } });
// //         fireEvent.click(submitButton);

// //         expect(useUserHandler().handleLogin).toHaveBeenCalledWith('gabyramos@gmail.com', '123456789');
// //     });
// //     test("submits access request form correctly", () => {
// //         render(<LoginComponent />);
// //         const nameInput =  screen.getByLabelText('nombre :');
// //         const messageInput = screen.getByLabelText('mensaje :');
// //         const submitButton = screen.getByRole('button', {name:'ENVIAR'});

// //         fireEvent.change(nameInput, { target: { value: "Gabriela Ramos"} });
// //         fireEvent.change(messageInput, {target:{value:"Hola, quiero acceder al sistema"}});
// //         fireEvent.click(submitButton);

// //         expect(screen.getByText('Tu solicitud ha sido procesada.')).toBeInTheDocument();
// //         expect(screen.getByLabelText('nombre :')).toHaveValue('');
// //         expect(screen.getByLabelText('mensaje :')).toHaveValue('');
// //     });
// // });
