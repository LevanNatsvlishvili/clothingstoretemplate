import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import CheckoutPaymentMethodInput from './CheckoutPaymentMethodInput';

const CheckoutPaymentMethodBack = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.checkout, {
      'w-100 position-relative ': true
    })}>
      <div className={clsx(classes.line, { 'mt-3': true })}></div>
      <div className={clsx(classes.cvv, { 'position-absolute ': true })}>
        <label className={clsx(classes.label, { 'm-0': true })}>CVV</label>
        <CheckoutPaymentMethodInput placeholder='000' />
      </div>


    </div >
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
  },
  line: {
    backgroundColor: '#687774',
    height: '40px',
    width: '100%',
    position: 'absolute',
    left: 0,
  },
  cvv: {
    bottom: 30,
    right: 20,
    width: 40,
  }
}));

export default CheckoutPaymentMethodBack;