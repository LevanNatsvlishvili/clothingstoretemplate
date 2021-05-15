import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProductViewer from 'Components/Carousel/ProductViewer';
import ProductSelection from './ProductSelection/';
import ProductComments from './ProductComments/';
import { useParams } from "react-router-dom";
import { products } from "Api/ClothingDatabase";
import Search from "Utils/searchInArray";


const Product = () => {
  const { id } = useParams();

  let current = Search(products, parseInt(id))

  return (
    <Container fluid='md' >
      <Row className='mt-4 '>
        <Col xs={12} lg={6}>
          <ProductViewer imgArray={current.img} id={id} />
        </Col>
        <Col xs={12} lg={6}>
          <ProductSelection current={current} title={current.name} id={id} />
        </Col>
        <Col xs={12}>
          <ProductComments />
        </Col>
      </Row>

    </Container>

  )
}

export default Product;