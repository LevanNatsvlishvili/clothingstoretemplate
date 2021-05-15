import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from 'react-bootstrap/Button'
import clsx from 'clsx';

const ButtonColor = (props) => {
  const classes = useStyles({
    background: props.background,
    height: props.height,
    active: props.active
  });

  const { ...rest } = props;
  return (
    <Button
      className={clsx(classes.button, {
        'rounded-circle ': true,
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
    margin: 6,
    border: 'none',
    boxShadow: 'none!important',
    position: 'relative',
    '&:hover , &:active': {
      opacity: '.9'
    },
    '&::before': {
      content: '""',
      display: props => props.active ? 'unset' : 'none',
      position: 'absolute',
      border: '3px solid black',
      height: 38,
      width: 38,
      borderRadius: '50%',
      top: -4,
      left: -4
    }
  },

}));

export default ButtonColor;