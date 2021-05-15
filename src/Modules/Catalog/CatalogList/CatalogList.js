import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from 'Components/Product';
import { products } from 'Api/ClothingDatabase';
import CatalogListSortBy from './CatalogListSortBy';
import CatalogListPagination from './CatalogListPagination';
import UseStore from 'Store/StoreContext';
import { filterCategory, filterPrice, filterColor } from './CatalogListUtils';

const CatalogList = (props) => {
  const { id } = props;
  const { subCategory, valueMax, valueMin, color, sortBy } = UseStore();

  const [sort, setSort] = useState('newest')
  console.log(sort)

  const handleSort = (value) => {
    setSort(value)
  }

  function filtery(product) {
    let category = filterCategory(product, subCategory)
    let price = filterPrice(product, valueMin, valueMax);
    let colors = filterColor(product, color);

    return category && price && colors;
  }

  function sortByHandle(a, b) {
    if (sort.value === 'asc') {
      return parseFloat(a.price) - parseFloat(b.price)
    }
    if (sort.value === 'desc') {
      return parseFloat(b.price) - parseFloat(a.price)
    }

    return null;
  }

  function capitalize(product) {
    return product.category.charAt(0).toUpperCase() + product.category.slice(1)
  }
  return (
    <div >
      <Row>
        <Col className='mb-4' xs={12}>
          <CatalogListSortBy handleSort={handleSort} value={sort} />
        </Col>
        {products
          .filter(product => filtery(product))
          .sort((a, b) => sortByHandle(a, b))
          .map((product, index) => {

            if (id === capitalize(product))
              return (
                <Col key={index} className='mb-4' xs={12} sm={6} md={4} xl={3}>
                  <Product
                    link={product.id}
                    img={product.img[0]}
                    name={product.name}
                    price={product.price} />
                </Col>
              )
          })}
        <Col className='mt-4' xs={12}>
          <CatalogListPagination numberOfPages={products.filter(product => capitalize(product) === id).length} />
        </Col>

      </Row>
    </div>

  )
}

export default CatalogList;