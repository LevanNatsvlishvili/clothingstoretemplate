import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import CheckoutPaymentMethodFront from './CheckoutPaymentMethodFront';
import CheckoutPaymentMethodBack from './CheckoutPaymentMethodBack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CheckoutPaymentMethodInput = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.paymentMethod, {
      'w-100  ': true
    })}>
      <h5>Billing address</h5>
      <Row className='mt-3 '>
        <Col className='mb-2' xs={12} lg={6}>
          <CheckoutPaymentMethodFront />
        </Col>
        <Col className='mb-2' xs={12} lg={6}>
          <CheckoutPaymentMethodBack />
        </Col>
      </Row>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  paymentMethod: {
    padding: 30,
    background: '#fff',
    minHeight: 200,
    color: theme.colors.black,
    borderRadius: 10,
    '& h6': {
      fontWeight: 700,
    }
  },
}));

export default CheckoutPaymentMethodInput;