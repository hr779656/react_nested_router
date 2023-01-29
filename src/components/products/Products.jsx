import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import img1 from './images/Vagetables.png'
import img2 from './images/fruits.png'
import img3 from './images/meats.png'

function Products() {
  return (
    <div>  
      
      <h1 className='display-1 text-center mt-5'>Products</h1>
      
      <div className='container mt-5'>
        <div className='row d-flex justify-content-between'>
          <div className="c1 card col-3 text-center" style={{width: "18rem;"}}>
            <img src={img1} className="img1 card-img-top"/>
              <div className="card-body">
              <Link to="Vagetables" className="btn btn-primary">CATEGORY</Link>
        </div>
      </div>
      <div className="c1 card col-3 text-center" style={{width: "18rem;"}}>
            <img src={img2} className="img1 card-img-top"/>
              <div className="card-body">
                 
              <Link to="Fruits" className="btn btn-primary">CATEGORY</Link>
        </div>
      </div>
      <div className="c1 card col-3 text-center" style={{width: "18rem;"}}>
            <img src={img3} className="img1 card-img-top"/>
              <div className="card-body">
              <Link to="Meats" className="btn btn-primary">CATEGORY</Link>
        </div>
      </div>
    </div>
  </div>
     <Outlet />  
  </div>

  )
}

export default Products