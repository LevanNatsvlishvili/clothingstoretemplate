import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { makeStyles } from '@material-ui/styles';


const NavLink = (props) => {
  const classes = useStyles();
  const { name, linkAdress } = props;
  return (
    <Nav.Link className={classes.link} href={linkAdress}>
      {name}
    </Nav.Link>
  )
}


const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.colors.darkGrey,
    fontSize: '18px',
    lineHeight: '28px',
    ['@media (max-width:430px)']: {
      padding: '.5rem .5rem!important'
    }
  }
}));

export default NavLink;