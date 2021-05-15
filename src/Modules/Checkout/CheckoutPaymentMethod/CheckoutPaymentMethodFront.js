import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import CheckoutPaymentMethodInput from './CheckoutPaymentMethodInput';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CheckoutPaymentMethodFront = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.checkout, {
      'w-100  ': true
    })}>
      <Row className='mt-3 '>
        <Col className='mb-2' xs={12} >
          <label className={clsx(classes.label, { 'm-0': true })}>Card Number</label>
          <CheckoutPaymentMethodInput placeholder='0000 0000 0000 0000' />
        </Col>
        <Col className='mb-2' xs={7} sm={8}>
          <label className={clsx(classes.label, { 'm-0': true })}>Card Holder</label>
          <CheckoutPaymentMethodInput placeholder='Johny Bravo' />
        </Col>
        <Col className='mb-2' xs={5} sm={4}>
          <label className={clsx(classes.label, { 'm-0': true })}>Expires</label>
          <CheckoutPaymentMethodInput placeholder='MM/YY' />
        </Col>
      </Row>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  checkout: {
    padding: '24px',
    background: '#f7f3f5',
    minHeight: 200,
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
  }
}));

export default CheckoutPaymentMethodFront;