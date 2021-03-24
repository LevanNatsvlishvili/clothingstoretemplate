import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import SelectField from 'Components/SelectField';

const CatalogListSortBy = () => {
  const classes = useStyles();
  const [value, setValue] = useState();

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className={classes.sortBy}>
      <SelectField
        value={value}
        handleChange={handleChange} />
    </div>

  )
}


const useStyles = makeStyles((theme) => ({
  sortBy: {
    width: 150,
    marginLeft: 'auto'
  }
}));

export default CatalogListSortBy;