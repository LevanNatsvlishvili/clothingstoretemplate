import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Url from 'Paths';


const NavLink = (props) => {
  const classes = useStyles();
  const { children, linkAdress } = props;
  return (
    <Link className={classes.link} to={Url.HOME + linkAdress}>
      {children}
    </Link>
  )
}


const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.colors.darkGrey,
    fontSize: '18px',
    lineHeight: '28px',
    display: 'block',
    padding: '.5rem 1rem',
    ['@media (max-width:430px)']: {
      padding: '.5rem .5rem!important'
    }
  }
}));

export default NavLink;