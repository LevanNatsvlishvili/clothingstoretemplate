import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Tabs from './Components/Tabs';
import Login from './Login';
import Register from './Register/';

const Auth = () => {
  const classes = useStyles();
  return (
    <div className={classes.auth}>
      <Tabs tabs={TabPanels} />

    </div>
  )
}

const TabPanels = [
  {
    value: 'login',
    title: 'Login',
    component: <Login />,
  },
  {
    value: 'register',
    title: 'Register',
    component: <Register />,
  },
]

export default Auth;


const useStyles = makeStyles((theme) => ({
  auth: {
    marginBottom: 90,
  }

}));