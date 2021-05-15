import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/styles';
import ProductCommentsComment from './ProductCommentsComment';


const ProductComments = () => {
  const classes = useStyles();
  return (
    <Row className='mt-4 '>
      <Col className='my-2' xs={12}>
        <ProductCommentsComment />
      </Col>
      <Col className='my-2' xs={12}>
        <ProductCommentsComment />
      </Col>
      <Col className='my-2' xs={12}>
        <ProductCommentsComment />
      </Col>
      <Col className='my-2' xs={12}>
        <ProductCommentsComment />
      </Col>

    </Row>

  )
}

export default ProductComments;


const useStyles = makeStyles((theme) => ({
  comment: {
    background: '#fff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  commentHead: {
    display: 'flex',
    '& img': {
      width: '30px',
      marginRight: '8px'
    },
    '& h4': {
      color: theme.colors.darkGrey
    },
  },
  reviewed: {
    color: theme.colors.darkGrey,
    fontSize: '12px',
  },
  commentText: {
    color: theme.colors.black
  }
}));