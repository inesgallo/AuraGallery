import axios from "axios";
import { jwtDecode } from "jwt-decode";


function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

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
      console.log(decodedToken)
      setCookie ("id_user",decodedToken.id_user);
      setCookie ("role",decodedToken.role);
      setCookie ("name_user",decodedToken.name_user);
      setCookie ("name_person_user",decodedToken.name_person_user);
      setCookie ("surname_person_user",decodedToken.surname_person_user);
      console.log("Token decodificado:", decodedToken);

      const userRole = decodedToken.role;
      console.log("Tipo de rol del usuario:", userRole);

      return { success: true, userId: decodedToken.id_user, userRol: userRole};
    } else {
      console.error("Error al autenticar al usuario:", response.statusText);
      return { success: false };
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    return { success: false };
  }

};
