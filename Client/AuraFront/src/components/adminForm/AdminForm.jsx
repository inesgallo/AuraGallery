import React from 'react';
import './adminForm.css';
import { useState } from 'react';
import { ProductHandler } from '../../handler/ProductHandler';
import { Container } from 'reactstrap';
import axios from "axios";
import Swal from 'sweetalert2';



const AdminForm = () => {


  const [name_person_user, setName_person_user] = useState('');
  const [surname_person_user, setSurname_person_user] = useState('');
  const [name_user, setName_user] = useState('');
  const [password_user, setPassword_user] = useState('');
  const [role, setRole] = useState('');


  const handleChange = (e) => {
    const { value } = e.target;
    setRole(value);
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name_person_user &&
      surname_person_user &&
      name_user &&
      password_user &&
      role
    ) {

      setLoading(true);
      try {

      } catch (error) {

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
                <input type="radio" name="role" value="artista" checked={role === 'artista'} onChange={handleChange} />
                artista
              </label>
              <label>
                <input type="radio" name="role" value="cliente" checked={role === 'cliente'} onChange={handleChange} />
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

export default AdminForm;
