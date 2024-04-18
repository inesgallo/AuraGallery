import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const loginUser = async (email, password, userRole) => {
  try {
    const url = "http://127.0.0.1:5000/login/";
    const userData = {
      name_user: email,
      password_user: password,
      userRole: userRole,
    };

    const response = await axios.post(url, userData);

    if (response.status === 200 && response.data) {
      console.log("Usuario autenticado con éxito:", response.data);

      const token = response.data.token;
      const decodedToken = jwtDecode(token);

      console.log("Token decodificado:", decodedToken);
      const userRole = decodedToken.role;
      console.log("Tipo de rol del usuario:", userRole);
      return { success: true, userRol: userRole };
    } else {
      console.error("Error al autenticar al usuario:", response.statusText);
      return { success: false };
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    return { success: false };
  }
};
