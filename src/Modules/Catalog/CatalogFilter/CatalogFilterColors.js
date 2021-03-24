import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonColor from 'Components/Buttons/ButtonColor';


const CatalogFilterColors = (props) => {
  const classes = useStyles();
  const { colors } = props;
  return (
    <div className='mt-2 mb-3'>
      <h3 className={classes.title}>Choose Color</h3>
      <div className='d-flex justify-content-center mt-2  flex-wrap'>
        {colors.map((color, index) => (
          <div>
            <ButtonColor background={color} key={index} />
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

export default CatalogFilterColors;