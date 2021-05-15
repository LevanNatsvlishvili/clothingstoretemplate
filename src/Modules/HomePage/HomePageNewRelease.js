import React from 'react';
import Container from 'react-bootstrap/Container';
import ProductCarousel from 'Components/Carousel/ProductCarousel';


const HomePageNewRelease = () => {
  return (
    <Container className='mt-5' >
      <ProductCarousel heading='New Arrivals' products={productArray} />

    </Container>
  )
}

export default HomePageNewRelease;

const productArray = [
  { address: '/', img: '/images/homepage/menSection.png' },
  { address: '/', img: '/images/homepage/pants-sport.png' },
  { address: '/', img: '/images/homepage/shoe-women-casual.png' },
  { address: '/', img: '/images/homepage/menSection.png' },
  { address: '/', img: '/images/homepage/menSection.png' },
  { address: '/', img: '/images/homepage/menSection.png' },
]