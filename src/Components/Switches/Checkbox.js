import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import clsx from 'clsx';
import checkboxActive from './CheckboxActive';
import checkboxInactive from './CheckboxInactive';


const Checkbox = (props) => {
  const classes = useStyles();
  const { icon, placeholder, label, checked, onChange, ...rest } = props;
  const [state, setState] = useState(false || checked)


  const handleClick = () => {
    setState(!state)
  }
  return (
    <Button className={clsx(classes.container, {
      'd-flex align-items-center': true
    })} onClick={handleClick}>
      {!state ? checkboxInactive : checkboxActive}

      <label className='m-0 ml-1'>{label}</label>
      <Form.Check
        type="checkbox"
        checked={state}
        className={classes.checkbox}
        isValid={true}
        onChange={handleClick}
        {...rest} />
    </Button>
  )
}


const useStyles = makeStyles((theme) => ({
  container: {
    border: 'none!important',
    boxShadow: 'none!important',
    backgroundColor: theme.colors.transparent,
    cursor: 'pointer',
    padding: 0,
    // width: 20,
    height: 20,
    '& img': {
      verticalAlign: 'baseline'
    },
    '& label': {
      fontSize: '14px',
      color: theme.colors.grey,
      cursor: 'pointer',
      fontWeight: '700'
    }
  },
  checkbox: {
    display: 'none'
  }
}));



export default Checkbox;