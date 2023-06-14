import React from 'react'
import DashboardMenu from './DashboardMenu'

const Dashboard = () => {
  return (
    <div className='d-flex'>
      <div className='w-auto'>
        {/* <Sidebar /> */}
      </div>
      <div className='col'>
        <DashboardMenu />
      </div>
    </div>
  )
}

export default Dashboard
