import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './BreakfastPage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Container, Row, Col } from 'react-bootstrap'
import BreakfastMenu from '../../components/BreakfastMenu/BreakfastMenu'
import OrderComponent from '../../components/Order/OrderComponent'

const BreakfastPage = () => {
  return (
    <div className='d-flex'>
      <div className='w-auto'>
        <Sidebar />
      </div>
      <div className='col'>
        <BreakfastMenu />
      </div>
      <div className='col-3'>
        <OrderComponent />
      </div>
    </div>
  )
}

export default BreakfastPage