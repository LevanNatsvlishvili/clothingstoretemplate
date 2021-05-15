import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonRound from 'Components/Buttons/ButtonRound';

const Info = (props) => {
  const classes = useStyles();
  const { type, chosen } = props;
  return (
    <p className={clsx(classes.info, {
      'mr-3': true
    })}><span className='mr-1'>{type}:</span>{chosen}</p>
  )
}


const useStyles = makeStyles((theme) => ({
  info: {
    color: theme.colors.black,
    fontSize: '14px',
    '& span': {
      color: theme.colors.black,
      fontWeight: 700,
      fontSize: '14px'
    },
  }
}));

export default Info;