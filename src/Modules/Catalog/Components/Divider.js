import React from 'react';
import { makeStyles } from '@material-ui/styles';

const Divider = () => {
  const classes = useStyles();
  return (
    <div className={classes.divider}></div>
  )
}

const useStyles = makeStyles((theme) => ({
  divider: {
    border: '3px solid',
    borderColor: theme.colors.cream
  }
}));

export default Divider;