import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CatalogFilter from './CatalogFilter';
import CatalogList from './CatalogList';

const Catalog = () => {
  const classes = useStyles();
  return (
    <Row className='m-0'>
      <Col className='mb-3' xs={12} lg={3}>
        <CatalogFilter />
      </Col>
      <Col className='mb-3' xs={12} lg={9}>
        <CatalogList />
      </Col>
    </Row>
  )
}


const useStyles = makeStyles((theme) => ({

}));

export default Catalog;