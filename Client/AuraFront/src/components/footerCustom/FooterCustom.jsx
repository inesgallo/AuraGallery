import React from 'react'
import './footerCustom.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoFooter from '/img-8/logoFooter.svg'

const FooterCustom = () => {
  return (
    <>
    <footer className='me-4 ms-4 mt-2 mb-3'>
    <Container className='d-flex justify-content-center mt-2 p-5'>
      <Row >
        <Col >
        <figure >
          <img src={logoFooter} className='imgFooter ' alt="" />
        </figure>
        </Col>
      </Row>
    </Container>
    </footer>

    </>
  )
}

export default FooterCustom
