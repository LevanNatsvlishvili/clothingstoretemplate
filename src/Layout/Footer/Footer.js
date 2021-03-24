import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { makeStyles } from '@material-ui/styles';
import FooterCards from './FooterCards';
import FooterCopyright from './FooterCopyright';
import FooterLinks from './FooterLinks';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container fluid='fluid'>
        <Row>
          <Col md={12} lg={3}>
            <FooterCards />
          </Col>
          <Col md={12} lg={6} className='d-flex align-items-center' >
            <FooterCopyright />
          </Col>
          <Col md={12} lg={3}>
            <FooterLinks />
          </Col>
        </Row>
      </Container>
    </footer>

  )
}


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.cream,
    flexFlow: 'column',
    padding: '20px 6px '
  },
}));

export default Footer;