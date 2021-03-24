import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const ButtonRound = (props) => {
  const classes = useStyles({
    backgroundColor: props.background,
    color: props.color,
    size: props.size
  });
  const { text, address, ...rest } = props;
  return (
    !address ? <Button
      className={classes.button}
      variant="outline-secondary"
      {...rest}>
      {text}
    </Button> :
      <Link
        className={classes.button}
        to={address}
        {...rest}>
        {text}
      </Link>
  )
}


const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '20px!important',
    backgroundColor: (props) => (theme.colors[props.background || 'cream']),
    height: (props) => (props.size || 34),
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    fontSize: '18px',
    minWidth: 140,
    color: theme.colors.black,
    fontWeight: 700,
    display: 'flex',
    border: 'none',
    margin: '4px',
    boxShadow: 'none!important',
    textDecoration: 'none!important',
    '&:hover': {
      opacity: .9
    },
    ['@media (max-width:550px)']: {
      minWidth: 110,
      fontSize: '16px',
      height: (props) => (props.size - 4 || 30),

    },
  },

}));

export default ButtonRound;