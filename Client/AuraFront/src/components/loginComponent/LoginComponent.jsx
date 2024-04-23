import React, { useState } from "react";
import "./loginComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useUserHandler } from "../../handler/AuthHandler"
import Swal from 'sweetalert2'


const LoginComponent = ({ handleLogin }) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  // const { handleLogin } = useUserHandler();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.email.value;
    const password = event.target.password.value;
    handleLogin(username, password);
  };

  const handlerSubmitNewAcces = (event) => {
    event.preventDefault(); 
    const userName = event.target.emailAccess.value;
    const password = event.target.passwordAccess.value;
    Swal.fire({
       icon: 'success',
       title: 'OK',
       text: 'Tu solicitud ha sido procesada.',

    }).then(() =>{
      setEmail('');
      setPassword('');
    })


   };

  return (
    <>
      <section className="contentLogin  me-4 ms-4 mt-5 mb-5 ">
        <Container >
          <Row className="d-flex justify-content-around">
          <Col xs = {12} md={4} className="text-center mb-3 d-flex justify-content-center align-items-stretch" >
            <div className="loginCard">
              <p className="fs-5 mb-5">LOGIN</p>
              <div className="loginLine"></div>
                <Form onSubmit={handleSubmit} >
                  <Form.Group className="mb-5" controlId="email">
                    <div className="d-flex ms-2">
                    <Form.Label sm={2}>nombre de usuario :</Form.Label>
                    </div>
                    <Form.Control type="email"/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                  <div className="d-flex ms-2">
                    <Form.Label className="m-0">contraseña :</Form.Label>
                    </div>
                    <Form.Control type="password"/>
                  </Form.Group>
                  <Container>
                    
                  </Container>
                  <button className ="center btnLogin mt-5 " type="submit">
                    ACCEDER
                  </button>
                </Form>
                </div>
            </Col>
            <Col xs = {12}  md={6} className="text-center d-flex justify-content-center">
            <div className="loginCard">
                <Form onSubmit={handlerSubmitNewAcces}>
                  <Form.Group className="mb-3" controlId="emailAccess" >
                    <p className="fs-5 mb-5">SOLICITUD DE ACCESO</p>
                    <div className="loginLine"></div>
                    <div className="d-flex ms-2">
                    <Form.Label sm={2}>nombre :</Form.Label>
                    </div>
                    <Form.Control type="text"  value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="passwordAccess">
                  <div className="d-flex ms-2">
                    <Form.Label sm={2}>mensaje :</Form.Label>
                    </div>
                    <Form.Control type="text" value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>

                  <button className ="center btnLogin mt-5" type="submit">
                    ENVIAR
                  </button>

                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LoginComponent;
