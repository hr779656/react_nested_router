import React from 'react'
import v_c_1 from './images/v_c_1.png'
import v_c_2 from './images/v_c_2.png'
import v_c_3 from './images/v_c_3.png'

function Vagetables() {
  return (
    <div className='container mt-5'>
       <h1 className='text-center'>Vagetable Category</h1>
      <div className='row d-flex justify-content-between mt-5'>
          <div className='col-3'>
            <img className='m_img_1' src={v_c_1} alt="" />
          </div>
          <div className='col-3'>
            <img className='m_img_1' src={v_c_2} alt="" />
          </div>
          <div className='col-3'>
            <img className='m_img_1' src={v_c_3} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Vagetables