import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';

const IconText = (props) => {
  const classes = useStyles({
    color: props.color,
  });
  const { icon, text, cart } = props;
  return (
    <div className={clsx(classes.root, {
      'align-items-center justify-content-center d-flex position-relative': true,
    })}>
      <img className={clsx(classes.iconContainer, { 'mr-1': true })} src={process.env.PUBLIC_URL + icon} alt='icon' />
      <p className={clsx(classes.text, { 'm-0': true })}>{text}</p>
      {cart >= 1 ? <div className={classes.cart}>
        <span>{cart}</span>
      </div> : null}
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    color: (props) => (theme.colors[props.color || 'darkGrey']),
    width: 'max-content',

  },
  iconContainer: {
    width: '20px',
  },
  text: {
    fontSize: '14px',
    fontWeight: 700,
  },
  cart: {
    background: theme.colors.orange,
    height: 16,
    width: 16,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 12,
    top: 12,
    '& span': {
      fontSize: '12px',
      color: '#fff',
      fontWeight: 'bold'
    }
  }
}));

export default IconText;