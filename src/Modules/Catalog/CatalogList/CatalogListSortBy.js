import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SelectField from 'Components/SelectField';

const CatalogListSortBy = (props) => {
  const classes = useStyles();
  const { handleSort, value } = props;

  return (
    <div className={classes.sortBy}>
      <SelectField
        options={options}
        value={value}
        defaultValue='newest'
        handleChange={handleSort} />
    </div>

  )
}

const options = [
  { value: 'newest', label: 'Newest' },
  { value: 'desc', label: 'Price: High to Low' },
  { value: 'asc', label: 'Price: Low to High' },
];

const useStyles = makeStyles((theme) => ({
  sortBy: {
    width: 150,
    marginLeft: 'auto'
  }
}));

export default CatalogListSortBy;