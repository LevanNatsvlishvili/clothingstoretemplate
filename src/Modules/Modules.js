import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { makeStyles, useTheme } from '@material-ui/styles';
import InputField from 'Components/InputField/InputField';
import SearchField from 'Components/SearchField/SearchField';
import ButtonBlock from 'Components/Buttons/ButtonBlock';
import ButtonSize from 'Components/Buttons/ButtonCube';
import ButtonColor from 'Components/Buttons/ButtonColor';
import ButtonSemiRound from 'Components/Buttons/ButtonSemiRound';
import IconText from 'Components/IconText';
import Checkbox from 'Components/Switches/Checkbox';
import RangeSlider from 'Components/RangeSlider/RangeSlider';
import SelectField from 'Components/SelectField/SelectField';
import SectionBlock from 'Components/SectionBlock/SectionBlock';
import ProductCarousel from 'Components/Carousel/ProductCarousel';
import ProductViewer from 'Components/Carousel/ProductViewer';

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Container style={{ marginTop: '500px' }} fluid>
        <Row>
          <Col xs={4}>
            <SearchField />
          </Col>
          <Col xs={4}>
            <InputField icon='/icons/user/userGrey.svg' placeholder='Search' />
          </Col>
          <Col xs={4}>
            <ButtonBlock>
              Click
            </ButtonBlock>
          </Col>
          <Col xs={2}>
            <IconText icon='/icons/user/userGrey.svg' text='Login / Register' />
          </Col>
          <Col xs={2}>
            <IconText icon='/icons/cart/cartDarkGrey.svg' text='Cart' />
          </Col>
          <Col xs={2}>
            <Checkbox checked={true} label='Keep Me Logged In!' />
          </Col>
          <Col xs={2}>
            <ButtonSize text='41' />
          </Col>
          <Col xs={2}>
            <ButtonColor />
          </Col>
          <Col xs={2}>
            <RangeSlider />
          </Col>
          <Col xs={2}>
            <SelectField />
          </Col>
          <Col xs={2}>
            <ButtonSemiRound text='More' />
          </Col>
          <Col xs={12}>
            <Container fluid='fluid'>
              <ProductCarousel products={[
                { address: '/', img: '/images/homepage/menSection.png' },
                { address: '/', img: '/images/homepage/pants-sport.png' },
                { address: '/', img: '/images/homepage/shoe-women-casual.png' },
                { address: '/', img: '/images/homepage/menSection.png' },
                { address: '/', img: '/images/homepage/menSection.png' },
                { address: '/', img: '/images/homepage/menSection.png' },
              ]} />

            </Container>
          </Col>

          <Col xs={2}>
            <SectionBlock address='/' text='Men' img='/images/homepage/menSection.png' />
          </Col>
          <Col xs={12}>
            <Container fluid='fluid'>
              <ProductViewer />

            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent!important'
  },
  test: {
    color: theme.colors.orange
  }
}));

export default Header;