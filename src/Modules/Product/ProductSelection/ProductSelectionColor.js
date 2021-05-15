import React from 'react';
import ButtonColor from 'Components/Buttons/ButtonColor';


const ProductSelectionSize = () => {
  return (
    <div className='mt-3'>
      <h4>
        Size
      </h4>
      <div className='d-flex justify-content-center mt-2'>
        <ButtonColor background='red' />
        <ButtonColor background='yellow' />
        <ButtonColor background='blue' />
      </div>
    </div>
  )
}

export default ProductSelectionSize;