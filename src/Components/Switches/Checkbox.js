import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import clsx from 'clsx';

const checkbox = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
  <g id="checkbox" transform="translate(-322 -973)">
    <g id="Rectangle_30" data-name="Rectangle 30" transform="translate(322 973)" fill="none" stroke="#707070" strokeWidth="2">
      <rect width="13" height="13" rx="3" stroke="none" />
      <rect x="1" y="1" width="11" height="11" rx="2" fill="none" />
    </g>
    <path id="iconfinder_check_2561355" d="M9.487,6,5.715,11.963,4,9.252" transform="translate(321.756 970.519)" fill="none" />
  </g>
</svg>


const checkboxActive = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
  <g id="checkbox-checked" transform="translate(-322 -973)">
    <g id="Rectangle_30" data-name="Rectangle 30" transform="translate(322 973)" fill="none" stroke="#707070" strokeWidth="2">
      <rect width="13" height="13" rx="3" stroke="none" />
      <rect x="1" y="1" width="11" height="11" rx="2" fill="none" />
    </g>
    <path id="iconfinder_check_2561355" d="M9.487,6,5.715,11.963,4,9.252" transform="translate(321.756 970.519)" fill="none" stroke="#687774" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </g>
</svg>

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
      {!state ? checkbox : checkboxActive}

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