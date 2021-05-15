import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ProductSelectionSize from './ProductSelectionSize';
import ProductSelectionColor from './ProductSelectionColor';
import ButtonSemiRound from 'Components/Buttons/ButtonSemiRound';
import ButtonBlock from 'Components/Buttons/ButtonBlock';
import UseStore from 'Store/StoreContext';
import { withRouter } from 'react-router-dom';


const Product = (props) => {
  const classes = useStyles()
  const { current, } = props;
  const { cart, setCart } = UseStore();

  const addToCart = (curr) => {
    setCart([curr, ...cart])
    // localStorage.setItem('cart', cart)
    // console.log(localStorage.getItem('cart'))
  }


  // console.log(localStorage.getItem('cart'))
  return (
    <div className={classes.selection}>
      <h2 className={classes.title} >{current.name}</h2>

      <ProductSelectionSize />
      <ProductSelectionColor />
      <div className="mt-3 d-flex justify-content-center">
        <ButtonSemiRound color='darkGrey' fontWeight='400' text='Add to wishlist' />
      </div>
      <div className="mt-4 ">
        <div className={classes.buttonContainer}>
          <ButtonBlock
            onClick={() => addToCart(current)}
            fontWeight='400'
            text='Add to Cart' />
        </div>
      </div>
    </div>

  )
}

export default withRouter(Product);


const useStyles = makeStyles((theme) => ({
  selection: {
    color: '#555',
    textAlign: 'center',
  },
  title: {
    color: '#555'
  },
  buttonContainer: {
    width: '300px',
    margin: 'auto'
  }
}));