import React from 'react';
import './adminForm.css';
import { useState } from 'react';
import { UserHandler } from '../../handler/UserHandler';
import { Container } from 'reactstrap';
import axios from "axios";
import Swal from 'sweetalert2';

const AdminForm = () => {

  const [name_person_user, setName_person_user] = useState('');
  const [surname_person_user, setSurname_person_user] = useState('');
  const [name_user, setName_user] = useState('');
  const [password_user, setPassword_user] = useState('');
  const [user_typeFK, setUser_typeFK] = useState('');
  const [Loading, setLoading] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setUser_typeFK(value);
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      name_person_user &&
      surname_person_user &&
      name_user &&
      password_user &&
      user_typeFK
    ) {
      try {
        const formData = new FormData();
        formData.append('name_person_user', name_person_user);
        formData.append('surname_person_user', surname_person_user);
        formData.append('name_user', name_user);
        formData.append('password_user', password_user);
        formData.append('user_typeFK', user_typeFK);
  
        await UserHandler.submitUser(formData);
        setLoading(false);

        // Limpiar los campos del formulario
        setName_person_user('');
        setSurname_person_user('');
        setName_user('');
        setPassword_user('');
        setUser_typeFK('');
        
        // Mostrar SweetAlert de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'El formulario ha sido enviado correctamente.',
        });
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        setLoading(false);
      }
    } else {

      Swal.fire({
        icon: 'warning',
        title: '¡Advertencia!',
        text: 'Por favor, completa todos los campos del formulario.',
      });
    }


  };

  return (
    <>
      <Container>
        <form className='adminform' onSubmit={handleSubmit}>
          <section className='sectionForm'>

            <div className='nameSurnameGroup'>
              <div className='nameGroup'>
                <label className='nameLabel'>
                  nombre:
                  <input className='nameInput' type="text" name="name_person_user" onChange={(e) => setName_person_user(e.target.value)} />
                </label>
              </div>

              <div className='surnameGroup'>
                <label className='surnameLabel'>
                  apellido:
                  <input className='surnameInput' type="text" name="surname_person_user" onChange={(e) => setSurname_person_user(e.target.value)} />
                </label>
              </div>
            </div>

            <div className='emailPasswordGroup'>
              <div className='emailGroup'>
                <label className='emailLabel'>
                  email:
                  <input className='emailInput' type="text" name="name_user" onChange={(e) => setName_user(e.target.value)} />
                </label>
              </div>

              <div className='passwordGroup'>
                <label className='passwordLabel'>
                  contraseña:
                  <input className='passwordInput' type="text" name="password_user" onChange={(e) => setPassword_user(e.target.value)} />
                </label>
              </div>
            </div>


            <fieldset className='selectUserFieldset'>

              <label>
                <input type="radio" name="user_typeFK" value="artista" checked={user_typeFK === 'artista'} onChange={handleChange} />
                artista
              </label>
              <label>
                <input type="radio" name="user_typeFK" value="cliente" checked={user_typeFK === 'cliente'} onChange={handleChange} />
                cliente
              </label>
            </fieldset>

            <button type="submit" className='sendBotton'>enviar</button>
          </section>
        </form>
      </Container>
    </>
  )
}

export default AdminForm
