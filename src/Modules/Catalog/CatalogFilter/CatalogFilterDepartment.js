import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import UseStore from 'Store/StoreContext';


const CatalogFilterDepartment = (props) => {
  const classes = useStyles();
  const { clothingTypes } = props;
  const { subCategory, setSubCategory } = UseStore();

  const handleClick = (e) => {
    if (subCategory === e) {
      setSubCategory('')
      return;
    }
    setSubCategory(e)
  }
  return (
    <div className={clsx(classes.catalogFilter, {
      'mt-2 mb-3': true
    })}>
      <h3 className={classes.title}>Men</h3>
      <ul className='mt-2'>
        {clothingTypes.map((clothingType, index) => (
          <li key={index}>
            <a
              className={subCategory === clothingType.value ? classes.active : null}
              onClick={() => handleClick(clothingType.value)}>
              {clothingType.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  active: {
    color: theme.colors.black,
    fontWeight: 'bold'
  },
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
          cursor: 'pointer',
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
  },
}));

export default CatalogFilterDepartment;