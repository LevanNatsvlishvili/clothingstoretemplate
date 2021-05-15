import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from 'react-bootstrap/Button'

const ButtonRound = (props) => {
  const classes = useStyles({
    background: props.background,
    size: props.size
  });

  const { icon, ...rest } = props;
  return (
    <Button
      className={classes.button}
      variant="outline-secondary"
      {...rest}>
      <img src={process.env.PUBLIC_URL + icon} alt='Search' />
    </Button>
  )
}


const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '50%!important',
    backgroundColor: (props) => (theme.colors[props.background || 'black']),
    height: (props) => (props.size || 34),
    width: (props) => (props.size || 34),
    border: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    boxShadow: 'none!important',
    '&:hover': {
      opacity: .9
    }
  },

}));

export default ButtonRound;