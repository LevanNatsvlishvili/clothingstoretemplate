import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';


const SectionBlock = (props) => {
  const classes = useStyles();
  const { address, img, text } = props;
  return (
    <Link to={address}>
      <div className={clsx(classes.root, {
        'd-flex align-items-center justify-content-center': true
      })}>
        <img src={process.env.PUBLIC_URL + img} alt='section' />
        <h6>{text}</h6>
      </div>
    </Link>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '& img': {
      width: '100%',
      height: '100%',
    },
    '& h6': {
      position: 'absolute',
      color: '#fff',
      fontWeight: 600,
      fontSize: 38,
    },

  },

}));

export default SectionBlock;