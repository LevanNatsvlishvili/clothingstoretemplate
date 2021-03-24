import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from 'react-bootstrap/Button'
import clsx from 'clsx';

const ButtonColor = (props) => {
  const classes = useStyles({
    background: props.background,
    height: props.height
  });
  const { ...rest } = props;
  return (
    <Button
      className={clsx(classes.button, {
        'rounded-circle m-1': true,
      })}
      {...rest}>
    </Button>
  )
}


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: (props) => (theme.clothingPallete[props.background || 'white']),
    height: (props) => (props.height || 30),
    width: (props) => (props.height || 30),
    border: 'none',
    boxShadow: 'none!important',
    '&:hover , &:active': {
      opacity: '.9'
    }
  },

}));

export default ButtonColor;