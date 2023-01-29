import React from 'react'
import fruits_c_1 from './images/fruits_c_1.png'
import fruits_c_2 from './images/fruits_c_2.webp'
import fruits_c_3 from './images/fruits_c_3.png'

function Fruits() {
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Fruits Category</h1>
     <div className='row d-flex justify-content-between mt-5'>
        <div className='col-3'>
          <img className='m_img_1' src={fruits_c_1} />
        </div>
        <div className='col-3'>
          <img className='m_img_1' src={fruits_c_2} />
        </div>
        <div className='col-3'>
          <img className='m_img_1' src={fruits_c_3} />
        </div>
    </div>
  </div>
  )
}

export default Fruits