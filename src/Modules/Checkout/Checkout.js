import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CartCheckout from './CheckoutSummary';
import CheckoutBillingAddress from './CheckoutBillingAddress';
import CheckoutPaymentMethod from './CheckoutPaymentMethod';


const Checkout = () => {

  return (
    <Container fluid >
      <Row className='mt-3 '>
        <Col className='mb-3' xs={12}>
          <h2>Check out</h2>
        </Col>
      </Row>
      <Row className='mt-3 '>
        <Col className='mb-3' xs={12} md={8}>
          <CheckoutBillingAddress />
        </Col>
        <Col className='mb-3' xs={12} md={4}>
          <CartCheckout />
        </Col>
        <Col className='mb-3' xs={12} md={8}>
          <CheckoutPaymentMethod />
        </Col>
      </Row>
    </Container>

  )
}

export default Checkout;