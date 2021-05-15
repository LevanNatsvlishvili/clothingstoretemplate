import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonRound from 'Components/Buttons/ButtonRound';

const ProductInList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.delete} className='mt-auto'>
      <ButtonRound size='28px' icon='/icons/trash.svg' background='transparent' />
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  delete: {
    marginLeft: '-4px'
  }
}));

export default ProductInList;