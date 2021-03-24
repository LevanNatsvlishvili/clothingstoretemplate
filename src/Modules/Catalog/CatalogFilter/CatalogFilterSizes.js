import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonSize from 'Components/Buttons/ButtonCube';


const CatalogFilterSizes = (props) => {
  const classes = useStyles();
  const { sizes } = props;
  return (
    <div className='mt-2 mb-3'>
      <h3 className={classes.title}>Choose Size</h3>
      <div className='d-flex mt-2 flex-wrap'>
        {sizes.map((size, index) => (
          <div>
            <ButtonSize text={size} key={index} />
          </div>
        ))}
      </div>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.colors.darkGrey,
    fontWeight: 600,
  }
}));

export default CatalogFilterSizes;