import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginComponent from '../LoginComponent'; // Asegúrate de importar correctamente tu componente LoginComponent

describe('LoginComponent', () => {
    test('should call handleLogin when "ACCEDER" button is clicked', () => {
      const mockHandleLogin = jest.fn(); // Crea una función simulada para el handleLogin
  
      // Sobrescribe el hook useUserHandler para devolver la función simulada mockHandleLogin
      jest.spyOn(useUserHandler, 'useUserHandler').mockReturnValue({
        handleLogin: mockHandleLogin
      });
  
      // Renderiza el componente
      const { getByText } = render(<LoginComponent />);
  
      // Simula un clic en el botón "ACCEDER"
      fireEvent.click(getByText('ACCEDER'));
  
      // Verifica que la función handleLogin haya sido llamada una vez
      expect(mockHandleLogin).toHaveBeenCalledTimes(1);
    });
  });