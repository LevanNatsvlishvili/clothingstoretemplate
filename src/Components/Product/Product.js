import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Url from 'Paths';

const Product = (props) => {
  const classes = useStyles();
  const { img, price, name, link } = props;
  return (
    <Link
      to={`${Url.HOME}/product${link}`}
      className={clsx(classes.product, {
        'w-100 h-100 ': true
      })}>
      <img className='w-100 border-rounded' src={`${process.env.PUBLIC_URL}/images/product/${img}`} alt="product img" />
      <div className={classes.textContainer}>
        <h5 className='mt-1'>{name}</h5>
        <h6 className='mt-2'>{price}$</h6>
      </div>
    </Link>
  )
}


const useStyles = makeStyles((theme) => ({
  product: {
    height: 200,
    '& img': {
      borderRadius: '6px',
      height: '250px',
    },
    '&:hover': {
      textDecoration: 'none'
    }
  },
  textContainer: {
    color: '#555',
    fontWeight: '600',
    '& h5': {
      fontSize: '18px',
      lineHeight: '18px',
    },
    '& h6': {
      fontSize: '16px',
      lineHeight: '18px',
    },
  }
}));

export default Product;