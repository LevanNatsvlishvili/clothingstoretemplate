import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const FooterCards = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.footerCards, {
      'd-flex justify-content-center': true
    })} fluid='fluid'>
      <div className='p-1' >
        <img src={`${process.env.PUBLIC_URL}/icons/creditCards/visa.svg`} alt='card' />
      </div>
      <div className='p-1' >
        <img src={`${process.env.PUBLIC_URL}/icons/creditCards/mastercard.svg`} alt='card' />
      </div>
      <div className='p-1' >
        <img src={`${process.env.PUBLIC_URL}/icons/creditCards/americanExpress.svg`} alt='card' />
      </div>
      <div className='p-1' >
        <img src={`${process.env.PUBLIC_URL}/icons/creditCards/paypal.svg`} alt='card' />
      </div>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  footerCards: {
    '& img': {
      width: '50px',
    }
  },
}));

export default FooterCards;