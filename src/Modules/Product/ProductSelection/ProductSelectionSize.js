import React from 'react';
import ButtonSize from 'Components/Buttons/ButtonCube';


const ProductSelectionSize = () => {
  return (
    <div className='mt-4'>
      <h4>
        Size
      </h4>
      <div className='d-flex justify-content-center mt-2'>
        <ButtonSize text='41' />
        <ButtonSize text='41' />
        <ButtonSize text='41' />
        <ButtonSize text='41' />
        <ButtonSize text='41' />
      </div>
    </div>
  )
}

export default ProductSelectionSize;