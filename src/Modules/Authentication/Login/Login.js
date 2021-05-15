import React from 'react';
import Container from 'react-bootstrap/Container';
import { makeStyles } from '@material-ui/styles';
import ButtonBlock from 'Components/Buttons/ButtonBlock';
import Checkbox from 'Components/Switches/Checkbox';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import LoginField from './form/LoginField';
import PasswordField from './form/PasswordField';
import FacebookField from './form/FacebookField';
import GoogleField from './form/GoogleField';


const Login = () => {
  const classes = useStyles();
  return (
    <Container className={clsx(classes.login, {
      'mt-4': true
    })}>
      <form >
        <GoogleField />
        <FacebookField />
        <div className='mt-5'>
          <LoginField />
          <PasswordField />
        </div>

        <div className={clsx(classes.check, {
          'mt-4 p-2 mb-2 d-flex': true
        })}>
          <Checkbox label='Remember Me!' />
          <Link className={classes.forgotPassword}>Forgot your password?</Link>
        </div>
        <ButtonBlock text='Login' type='submit' />
      </form>
    </Container>
  )
}


const useStyles = makeStyles((theme) => ({
  login: {
    maxWidth: 450
  },
  forgotPassword: {
    lineHeight: '18px',
    fontSize: '14px',
    fontWeight: '700',
    marginLeft: 'auto',
    color: theme.colors.grey
  },
  check: {
    ['@media (max-width:360px)']: {
      flexDirection: 'column',
      '& a': {
        marginLeft: 'inherit!important',
        marginTop: 6,
      }
    },
  }
}));

export default Login;