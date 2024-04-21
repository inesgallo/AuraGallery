import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
 // Obtiene el valor inicial del almacenamiento local o utiliza el valor inicial proporcionado
 const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
 });

 // Actualiza el valor en el almacenamiento local cuando el valor en el estado cambia
 useEffect(() => {
    try {
      const serializedValue = JSON.stringify(storedValue);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.log(error);
    }
 }, [key, storedValue]);

 return [storedValue, setStoredValue];
}

export default useLocalStorage;
