import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import ButtonBlock from 'Components/Buttons/ButtonBlock';


const Catalog = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.checkout, {
      'w-100 h-100 ': true
    })}>
      <h5>Checkout Summary</h5>
      <div className='d-flex mt-3'>
        <p>Subtotal:</p>
        <p className='ml-auto'>150.88$</p>
      </div>
      <div className='d-flex '>
        <p>Shipping:</p>
        <p className='ml-auto'>15.88$</p>
      </div>
      <div className='d-flex mt-4'>
        <h6>Total:</h6>
        <h6 className='ml-auto'>15.88$</h6>
      </div>
      <div className='mt-3'>
        <ButtonBlock>
          Proceed to checkout
        </ButtonBlock>
      </div>

    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  checkout: {
    padding: 16,
    background: '#fff',
    minHeight: 200,
    color: theme.colors.black,
    '& h6': {
      fontWeight: 700,
    }
  },
}));

export default Catalog;