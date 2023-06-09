import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './BreakfastMenu.css'
import { getProductsAxios } from '../../api/axios'

const BreakfastMenu = ({ token }) => {
  const [items, setItems] = useState([]);

  async function getProducts(){
    const response = await getProductsAxios(token);
    setItems(response);
  }

  useEffect(() => {
    const promises = async () => await getProducts();
    promises();
  }, []);

  return (
    <div className='bg-light vh-100'>
      <div className='pt-5 ps-5'>
      <h1>Breakfast Menu</h1>
      {items?.map((item) => (
        <div className="card mb-3 mt-5" style={{'maxWidth':' 400px'}}>
        <div className="row g-0">
          <div className='col-md-4'>
          <img src={item.image} className="img-fluid rounded-start" alt={item.name}/>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <p className='card-text'>Description</p>
              <p className="card-text"><small className="text-body-secondary">{item.price}</small></p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
      )) }
      </div> 
    </div>
    
  )
}

export default BreakfastMenu