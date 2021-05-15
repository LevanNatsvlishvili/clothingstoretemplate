import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CatalogFilter from './CatalogFilter';
import CatalogList from './CatalogList';
import { useParams } from "react-router-dom";

const Catalog = () => {
  const { id } = useParams();

  return (
    <Row className='m-0'>
      <Col className='mb-3' xs={12} lg={3}>
        <CatalogFilter />
      </Col>
      <Col className='mb-3' xs={12} lg={9}>
        <CatalogList id={id} />
      </Col>
    </Row>
  )
}

export default Catalog;