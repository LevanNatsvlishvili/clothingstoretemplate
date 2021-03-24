import React from 'react';
import Tabs from './Components/Tabs';
import Login from './Login';
import Register from './Register/';

const Auth = () => {
  return (
    <Tabs tabs={TabPanels} />
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