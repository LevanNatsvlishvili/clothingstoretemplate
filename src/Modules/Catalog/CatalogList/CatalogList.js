import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from 'Components/Product';
import CatalogListSortBy from './CatalogListSortBy';
import CatalogListPagination from './CatalogListPagination';

const CatalogList = () => {
  const classes = useStyles();
  return (
    <div className={classes.catalogListContainer}>
      <Row>
        <Col className='mb-4' xs={12}>
          <CatalogListSortBy />
        </Col>
        {products.map((product, index) => (
          <Col className='mb-4' xs={12} sm={6} md={4} xl={3}>
            <Product img={product.img} name={product.name} price={product.price} />
          </Col>
        ))}
        <Col className='mt-4' xs={12}>
          <CatalogListPagination numberOfPages={products.length / 3} />
        </Col>

      </Row>
    </div>

  )
}

const products = [
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
  { img: "/images/product/Hip-Hop-Streetwear1.jpg", name: 'men-jewelry-leatherbracelet', price: 9.99 },
]


const useStyles = makeStyles((theme) => ({
  catalogListContainer: {
    // padding: 16
  }
}));

export default CatalogList;