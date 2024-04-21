import { useState } from 'react';

function useLocalStorage(key, initialValue) {
 // Obtener el valor inicial del almacenamiento local o usar el valor inicial proporcionado
 const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
 });

 // Función para actualizar el valor en el almacenamiento local y en el estado local
 const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
 };

 return [storedValue, setValue];
}

export default useLocalStorage;
