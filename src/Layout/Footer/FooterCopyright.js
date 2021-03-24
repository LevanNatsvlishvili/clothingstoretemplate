import React from 'react';
import { makeStyles } from '@material-ui/styles';

const FooterCopyright = () => {
  const classes = useStyles();
  return (
    <div className='justify-content-center d-flex w-100 '>
      <p className={classes.copyright}>Copyright©2021 All Rights Reserved</p>
    </div>
  )
}



const useStyles = makeStyles((theme) => ({
  copyright: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.grey,
  },
  socialMedia: {
    width: 200
  }
}));

export default FooterCopyright;