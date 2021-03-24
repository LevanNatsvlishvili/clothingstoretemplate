import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonRound from 'Components/Buttons/ButtonRound';
import Info from './Info';

const ProductInList = (props) => {
  const classes = useStyles();
  const { img, price, name, quantity } = props;
  return (
    <div className={clsx(classes.product, {
      'w-100 h-100 ': true
    })}>
      <Row>
        <Col
          xs={3}
          className={clsx(classes.imgContainer, {
            '': true
          })}>
          <img className='w-100 h-100 border-rounded' src='/images/product/adidas2.jpg' alt="product img" />
        </Col>
        <Col
          xs={7}
          className={clsx(classes.imgContainer, {
            '': true
          })}>
          <h6 className={classes.title}>2018 New Long Sleeve T-shirt Sport Men Quick Fitness Mensights jerseys</h6>
          <div className='d-flex mt-2'>
            <Info type='Color' chosen='blue' />
            <Info type='Size' chosen='XL' />
          </div>

          <div style={{ marginLeft: '-4px' }} className='mt-3'>
            <ButtonRound size='28px' icon='/icons/trash.svg' background='transparent' />
          </div>
        </Col>
        <Col className={clsx(classes.imgContainer, {
          'd-flex flex-column align-items-center': true
        })}
          xs={2}>
          <p className={classes.text}>Quantity</p>

          <div style={{ marginLeft: '-4px' }} className='d-flex mt-2'>
            <ButtonRound size='28px' icon='/icons/minus.svg' background='transparent' />
            <p>1</p>
            <ButtonRound size='28px' icon='/icons/plus.svg' background='transparent' />
          </div>

        </Col>
      </Row>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  product: {
    padding: 16,
    background: '#fff'
  },
  imgContainer: {
    height: 170,
  },
  title: {
    fontSize: '16px',
    color: theme.colors.black
  },
  quantity: {
    color: theme.colors.black
  },
  text: {
    color: theme.colors.black,
    fontWeight: 700,
    fontSize: '14px'
  }
}));

export default ProductInList;