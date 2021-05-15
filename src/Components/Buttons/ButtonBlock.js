import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from 'react-bootstrap/Button'
import clsx from 'clsx';

const ButtonBlock = (props) => {
  const classes = useStyles({
    backgroundColor: props.background,
    color: props.color,
    height: props.height
  });
  const { icon, children, text, ...rest } = props;
  return (
    <Button
      className={clsx(classes.button, {
        'w-100 border-0 align-items-center justify-content-center d-flex': true,
      })}
      {...rest}>
      {text}
    </Button>
  )
}


const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '6px!important',
    backgroundColor: (props) => (theme.colors[props.background || 'black']),
    height: (props) => (props.height || 44),
    color: (props) => (theme.colors[props.color || 'default']),
    boxShadow: 'none!important',
    fontWeight: 600,
    '&:hover , &:active': {
      opacity: '.9'
    }
  },

}));

export default ButtonBlock;