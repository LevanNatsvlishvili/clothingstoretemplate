import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Divider from '../Components/Divider';
import CatalogFilterDepartment from './CatalogFilterDepartment';
import CatalogFilterColors from './CatalogFilterColors';
import CatalogFilterPrice from './CatalogFilterPrice';
import CatalogFilterSizes from './CatalogFilterSizes';


const CatalogFilter = () => {
  const classes = useStyles();
  return (
    <div className={classes.filterContainer}>
      <CatalogFilterDepartment clothingTypes={clothingTypes} />
      <Divider />
      <CatalogFilterColors colors={colors} />
      <Divider />
      <CatalogFilterPrice />
      <Divider />
      <CatalogFilterSizes sizes={sizes} />
    </div>
  )
}

const clothingTypes = ['Hoodies & Sweatshirts', 'Pants', 'Shirts', 'Shoes', 'Accessories']
const colors = ['black', 'white', 'red', 'blue', 'yellow', 'black', 'white', 'red', 'blue', 'yellow']
const sizes = [41, 42, 43, 44, 45, 46, 47, 48]

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    padding: 16,
  }
}));

export default CatalogFilter;