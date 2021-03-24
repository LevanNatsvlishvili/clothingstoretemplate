import React, { useState } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = (props) => {
  const { valueMin, valueMax, handleChange, ...rest } = props;

  return (
    <>
      <Range
        onChange={handleChange}
        value={[valueMin, valueMax]}
        handleStyle={[dot, dot]}
        railStyle={{ backgroundColor: '#E7E7E7' }}
        trackStyle={[{ backgroundColor: '#707070' }]}
        defaultValue={[valueMin, valueMax]}
        {...rest} />
    </>
  )
}


const dot = {
  background: '#fff',
  border: '2px solid #707070',
  outline: 'none',
  boxShadow: 'none'
}

export default RangeSlider;