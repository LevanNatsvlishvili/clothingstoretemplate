import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ProductInListInfo from './ProductInListInfo';

const ProductInListDetails = (props) => {
  const classes = useStyles();
  return (
    <>
      <h6 className={classes.title}>2018 New Long Sleeve T-shirt Sport Men Quick Fitness Mensights jerseys</h6>
      <div className='d-flex mt-2'>
        <ProductInListInfo type='Color' chosen='blue' />
        <ProductInListInfo type='Size' chosen='XL' />
      </div>

      <h5 className='mt-2'>15.99</h5>
    </>
  )
}


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '16px',
    color: theme.colors.black
  },
}));

export default ProductInListDetails;