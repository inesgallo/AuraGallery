import { createContext, useState, useEffect } from "react";
import { useCookies } from 'react-cookie';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedInd] = useState(false);
  const [user, setUser] = useState(null);
  const [cookies, removeCookie] = useCookies([
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
      setIsLoggedInd(true);
    }else{
      setIsLoggedInd(false)
    }
  }, [cookies]);

  const logout = () => {
    removeCookie("id_user");
    removeCookie("role");
    removeCookie("name_user");
    removeCookie("name_person_user");
    removeCookie("surname_person_user");

    setUser(null);

    setIsLoggedInd(false);
 };


  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, logout }}>
      {children}
    </UserContext.Provider>
 );

};
