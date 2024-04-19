import React, { createContext, useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies] = useCookies([
    "id_user", 
    "role",
    "name_user",
    "name_person_user",
    "surname_person_user",
  ]);

  useEffect(() => {
    if (cookies.id_user) {
      setUser({
        id: cookies.id_user,
        role: cookies.role,
        name: cookies.name_user,
        namePerson: cookies.name_person_user,
        surnamePerson: cookies.surname_person_user,
      });
    }
  }, [cookies]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
 );

};
