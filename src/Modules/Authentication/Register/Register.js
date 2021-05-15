import React from 'react';
import Container from 'react-bootstrap/Container';
import { makeStyles, useTheme } from '@material-ui/styles';
import ButtonBlock from 'Components/Buttons/ButtonBlock';
import Checkbox from 'Components/Switches/Checkbox';
import clsx from 'clsx';
import NameField from './form/NameField';
import EmailField from './form/EmailField';
import PasswordField from './form/PasswordField';
import PasswordRepeatField from './form/PasswordRepeatField';
import AddressField from './form/AddressField';
import CityField from './form/CityField';
import PhoneField from './form/PhoneField';

const Register = () => {
  const classes = useStyles();
  return (
    <Container className={clsx(classes.login, {
      'mt-4': true
    })}>
      <form >
        <NameField />
        <EmailField />
        <PasswordField />
        <PasswordRepeatField />
        <PhoneField />
        <CityField />
        <AddressField />
        <div className='mt-4  mb-3 d-flex'>
          <Checkbox label="I've agreed to the Terms of Service" />
        </div>
        <ButtonBlock text='Register' />
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
  }
}));

export default Register;