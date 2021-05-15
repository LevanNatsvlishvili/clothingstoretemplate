import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonColor from 'Components/Buttons/ButtonColor';
import UseStore from 'Store/StoreContext';


const CatalogFilterColors = (props) => {
  const classes = useStyles();
  const { color, setColor } = UseStore();


  const handleClick = (value) => {
    if (color === value) {
      setColor('')
      return;
    }

    setColor(value)
  }

  const active = (value) => {
    if (color === value) {
      return true;
    }
    return false;
  }

  return (
    <div className='mt-2 mb-3'>
      <h3 className={classes.title}>Choose Color</h3>
      <div className='d-flex mt-2 flex-wrap'>
        {colors.map((color, index) => (
          <div>
            <ButtonColor
              active={active(color)}
              onClick={() => handleClick(color)}
              background={color}
              key={index} />
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

const colors = ['black', 'white', 'red', 'blue', 'yellow',]