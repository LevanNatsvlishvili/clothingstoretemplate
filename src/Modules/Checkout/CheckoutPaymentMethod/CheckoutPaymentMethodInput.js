import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import clsx from 'clsx';

const CheckoutPaymentMethodInput = (props) => {
  const classes = useStyles(

  );
  const { icon, placeholder, ...rest } = props;
  return (
    <InputGroup className={clsx(classes.root, {
      'align-items-center ': true
    })}>
      {icon ? <InputGroup.Prepend>
        <InputGroup.Text className={clsx(classes.iconContainer, {
          'border-0 justify-content-center p-0 mr-2': true
        })}>
          <img src={icon} alt='icon' />
        </InputGroup.Text>
      </InputGroup.Prepend> : null}
      <Form.Control
        as='input'
        className={clsx(classes.inputField, {
          'p-0 border-0': true
        })}
        placeholder={placeholder}
        {...rest}
      />
    </InputGroup>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.colors.darkGrey}`,
    boxShadow: 'none!important',
  },
  inputField: {
    backgroundColor: 'transparent!important',
    fontWeight: 700,
    fontSize: props => props.fontSize || '16px',
    boxShadow: 'none!important',
    height: 26,
    '&::placeholder': {
      color: '#687774',
      opacity: '0.3',
      fontSize: 16,
      fontWeight: 500,
    }
  },
  iconContainer: {
    backgroundColor: 'transparent!important',
    height: 34,
    width: 43,
    '& img': {
      width: "20px"
    }
  },

}));

export default CheckoutPaymentMethodInput;