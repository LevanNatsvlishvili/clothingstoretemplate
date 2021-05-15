import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from 'react-bootstrap/Button'
import clsx from 'clsx';

const ConnectSocialMedia = (props) => {
  const classes = useStyles();
  const { icon, text, ...rest } = props;
  return (
    <Button
      className={clsx(classes.button, {
        'w-100 mb-3 align-items-center  d-flex': true,
      })}
      {...rest}>
      <img src={process.env.PUBLIC_URL + icon} alt="social media" />
      {text}
    </Button>
  )
}

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 0,
    backgroundColor: theme.colors.transparent,
    height: (props) => (props.height || 44),
    color: (props) => (theme.colors[props.color || 'black']),
    borderColor: theme.colors.grey,
    boxShadow: 'none!important',
    fontWeight: 700,
    '&:hover , &:active': {
      opacity: '.9'
    },
    '& img': {
      width: 20,
      marginLeft: '85px',
      marginRight: 30,
    },
    ['@media (max-width:470px)']: {
      '& img': { marginLeft: '20%', },
      fontSize: '14px',
    },
    ['@media (max-width:400px)']: {
      '& img': { marginLeft: '8%', },
    },
  },
}));

export default ConnectSocialMedia;