import React from 'react'
import meat_c_1 from './images/meat_c_1.png'
import meat_c_2 from './images/meat_c_2.png'
import meat_c_3 from './images/meat_c_3.png'

function Meats() {
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Meat Category</h1>
    <div className='row d-flex justify-content-between mt-5'>
        <div className='col-3'>
          <img className='m_img_1' src={meat_c_1} alt="" />
        </div>
        <div className='col-3'>
          <img className="m_img_1" src={meat_c_2} alt="" />
        </div>
        <div className='col-3'>
          <img className='m_img_1' src={meat_c_3} alt="" />
        </div>
    </div>
  </div>
  )
}

export default Meats