import React from "react";
import "./loginComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useUserHandler } from "../../handler/UserHandler";
import Swal from 'sweetalert2'

const LoginComponent = () => {
  const { handleLogin } = useUserHandler();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.email.value;
    const password = event.target.password.value;
    handleLogin(username, password);
  };

  const handlerSubmitNewAcces = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    const userName = event.target.emailAccess.value;
    const password = event.target.passwordAccess.value;
    Swal.fire({
      icon: 'success',
      title: 'OK',
      text: 'Tu solicitud ha sido procesada.',
   });
  }
  return (
    <>
      <section className="contentLogin me-4 ms-4 mt-5 mb-5 mb-3 py-5">
        <Container className="d-flex">
          <Row>
            <Col md="6">
              <div className="loginCard">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="emailAcces">
                    <p>Login</p>
                    <Form.Label>Nombre usuario</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Acceder
                  </Button>
                </Form>
              </div>
            </Col>
            <Col md="6">
              <div className="loginCard">
                <Form onSubmit={handlerSubmitNewAcces}>
                  <Form.Group className="mb-3" controlId="emailAcces">
                    <p>Solicitud acceso</p>
                    <Form.Label>Nombre usuario</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="passwordAccess">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Acceder
                  </Button>
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
