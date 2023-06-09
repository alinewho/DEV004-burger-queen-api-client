import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './BreakfastMenu.css'

const BreakfastMenu = () => {
  return (
    <div className='bg-light vh-100'>
      <div className='pt-5 ps-5'>
      <h1>Breakfast Menu</h1>
      <div className="card mb-3 mt-5" style={{'maxWidth':' 400px'}}>
        <div className="row g-0">
          <div className='col-md-4'>
          <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>Product</h5>
              <p className='card-text'>Description</p>
              <p className="card-text"><small className="text-body-secondary">Price</small></p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
      </div> 
    </div>
    
  )
}

export default BreakfastMenu