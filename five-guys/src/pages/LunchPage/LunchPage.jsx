import React from 'react'
import LunchMenu from '../../components/LunchMenu/LunchMenu'
import Sidebar from '../../components/Sidebar/Sidebar'


function LunchPage() {
  return (
    <div className='d-flex'>
    <div className='w-auto'>
      <Sidebar />
    </div>
    <div className='col'>
      <LunchMenu />
    </div>
  </div>
  )
}

export default LunchPage