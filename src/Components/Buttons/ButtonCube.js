import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from 'react-bootstrap/Button'
import clsx from 'clsx';

const ButtonSize = (props) => {
  const classes = useStyles({
    backgroundColor: props.background,
    color: props.color,
    height: props.height
  });
  const { icon, text, ...rest } = props;
  return (
    <Button
      className={clsx(classes.button, {
        'align-items-center justify-content-center m-1 d-flex': true,
      })}
      {...rest}>
      {text}
    </Button>
  )
}


const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '6px!important',
    backgroundColor: (props) => (theme.colors[props.background || 'cream']),
    height: (props) => (props.height || 36),
    width: (props) => (props.height || 36),
    border: '1px solid',
    borderColor: (props) => (theme.colors[props.color || 'darkGrey']),
    color: (props) => (theme.colors[props.color || 'darkGrey']),
    boxShadow: 'none!important',
    fontWeight: 600,
    '&:hover , &:active': {
      opacity: '.9'
    }
  },

}));

export default ButtonSize;