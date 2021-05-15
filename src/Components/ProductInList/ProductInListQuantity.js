import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonRound from 'Components/Buttons/ButtonRound';

const ProductInListQuantity = (props) => {
  const classes = useStyles();

  return (
    <div className='d-flex flex-column align-items-end'>
      <p className={classes.text}>Quantity</p>

      <div style={{ marginLeft: '-4px' }} className='d-flex mt-2'>
        <ButtonRound size='28px' icon='/icons/minus.svg' background='transparent' />
        <p>1</p>
        <ButtonRound size='28px' icon='/icons/plus.svg' background='transparent' />
      </div>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.colors.black,
    fontWeight: 700,
    fontSize: '14px'
  }
}));

export default ProductInListQuantity;