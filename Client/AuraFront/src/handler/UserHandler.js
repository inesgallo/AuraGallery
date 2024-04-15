import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/UserService';
import Swal from 'sweetalert2'

export const useUserHandler = () => {
 const [userType, setUserType] = useState(null);
 const navigate = useNavigate(); 

 const handleLogin = async (username, password) => {
    const response = await authenticateUser(username, password);
    if (response.success) {
      setUserType(response.userType);
      // Redirigir basado en el tipo de usuario
      switch (response.userType) {
        case 'admin':
            navigate('/admin/dashboard'); 
          break;
        case 'artist':
            navigate('/artist/dashboard');
          break;
          case 'client':
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

 return { userType, handleLogin };
};
