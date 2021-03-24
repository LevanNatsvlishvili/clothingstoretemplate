import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';


const CatalogFilterDepartment = (props) => {
  const classes = useStyles();
  const { clothingTypes } = props;
  return (
    <div className={clsx(classes.catalogFilter, {
      'mt-2 mb-3': true
    })}>
      <h3 className={classes.title}>Men</h3>
      <ul className='mt-2'>
        {clothingTypes.map((clothingType, index) => (
          <li key={index}><Link>{clothingType}</Link></li>
        ))}
      </ul>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  catalogFilter: {
    '& ul': {
      '& li': {
        listStyleType: 'none',
        fontSize: 12,
        lineHeight: '18px',
        fontWeight: 500,
        marginBottom: 2,
        '& a': {
          color: theme.colors.darkGrey,
          textDecoration: 'none',
          '&:hover': {
            color: '#999!important'
          }
        }
      },
    },
  },
  title: {
    color: theme.colors.darkGrey,
    fontWeight: 600,
  }
}));

export default CatalogFilterDepartment;