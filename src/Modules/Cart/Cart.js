import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProductInList from 'Components/ProductInList';
import CartCheckout from './CartCheckout';


const Catalog = () => {
  const classes = useStyles();
  return (
    <Container fluid='lg' >
      <Row className='mt-3'>
        <Col className='mb-3' xs={12}>
          <h2>Shopping Cart</h2>
        </Col>
        <Col className='mb-3' xs={8}>
          <ul className='text-decoration-none'>
            <li>
              <ProductInList />
            </li>
            <li>
              <ProductInList />
            </li>
          </ul>
        </Col>
        <Col className='mb-3' xs={4}>
          <CartCheckout />
        </Col>
      </Row>
    </Container>

  )
}


const useStyles = makeStyles((theme) => ({

}));

export default Catalog;