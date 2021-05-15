import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProductInList from 'Components/ProductInList';
import CartCheckout from './CartCheckout';
import UseStore from 'Store/StoreContext';

const Cart = () => {
  const { cart } = UseStore()
  return (
    <Container fluid >
      <Row className='mt-3 '>
        <Col className='mb-3' xs={12}>
          <h2>Shopping Cart</h2>
        </Col>
      </Row>
      <Row className='mt-3 cart'>
        <Col className='mb-3' xs={12} md={8}>
          <ul class="list-group">
            <li class="list-group-item p-0 mb-3 border-0 "><ProductInList /></li>
            <li class="list-group-item p-0 mb-3 border-0 "><ProductInList /></li>
            <li class="list-group-item p-0 mb-3 border-0 "><ProductInList /></li>
          </ul>
        </Col>
        <Col className='mb-3' xs={12} md={4}>
          <CartCheckout />
        </Col>
      </Row>
    </Container>

  )
}

export default Cart;