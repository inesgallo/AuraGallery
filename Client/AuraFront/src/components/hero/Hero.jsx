import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import  dalmatas  from '../../../public/img-8/dalmatas.png'

const Hero = () => {
  return (
    <>
       <Container fluid className='d-flex justify-content-center'>
       <Image  className='me-4 ms-4'
               fluid
               src={dalmatas}
               alt="imagen de la home"
               width="100%" 
               height="auto"/>         
        </Container>
    </>
  )
}

export default Hero
