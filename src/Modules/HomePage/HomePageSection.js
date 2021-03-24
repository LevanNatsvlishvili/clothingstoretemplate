import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SectionBlock from 'Components/SectionBlock/SectionBlock';

const HomePageSection = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col className='mb-3' xs={12} md={4}>
          <SectionBlock address='/Men' text='Men' img='/images/homepage/menSection.png' />
        </Col>
        <Col className='mb-3' xs={12} md={4}>
          <SectionBlock address='/Women' text='Women' img='/images/homepage/womenSection.png' />
        </Col>
        <Col className='mb-3' xs={12} md={4}>
          <SectionBlock address='/Children' text='Children' img='/images/homepage/kidSection.png' />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePageSection;