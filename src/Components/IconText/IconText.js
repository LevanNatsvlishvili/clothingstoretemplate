import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from 'react-bootstrap/Button'
import clsx from 'clsx';

const IconText = (props) => {
  const classes = useStyles({
    color: props.color,
  });
  const { icon, text } = props;
  return (
    <div className={clsx(classes.root, {
      'align-items-center justify-content-center d-flex': true,
    })}>
      <img className={clsx(classes.iconContainer, { 'mr-1': true })} src={icon} alt='icon' />
      <p className={clsx(classes.text, { 'm-0': true })}>{text}</p>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    color: (props) => (theme.colors[props.color || 'darkGrey']),
    width: 'max-content'
  },
  iconContainer: {
    width: '20px',
  },
  text: {
    fontSize: '14px',
    fontWeight: 700,
  }
}));

export default IconText;