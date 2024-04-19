import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/LoginService';
import { authenticateUser } from '../services/AuthService';
import Swal from 'sweetalert2'

export const useUserHandler = () => {
 const [userRol, setUserRol] = useState(null);
 const navigate = useNavigate(); 

 const handleLogin = async (username, password,userRol) => {
    const response = await loginUser(username, password,userRol);
    if (response.success) {
      setUserRol(response.userRol);
      // Redirigir basado en el tipo de usuario
      switch (response.userRol) {
        case 'admin' :
            navigate('/admin/dashboard');
          break;
        case  'artist' :
            navigate('/artist/dashboard');
          break;
          case  'client':
            navigate('/'); 
          break;
        default:
          // Manejar caso no esperado
          break;
      }
    } else {
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Revisa tu usuario o contraseña, Artista!",
        confirmButtonColor: '#000000',
      });
    }
 };

 return { userRol, handleLogin };
};
