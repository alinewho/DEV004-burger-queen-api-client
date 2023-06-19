import React from 'react'
import SidebarK from '../../components/Kitchen/SidebarKitchen/SidebarK'
import OrdersMenu from '../../components/Kitchen/OrdersMenu/OrdersMenu'

const KitchenDisplay = () => {
  return (
    <div className="d-flex">
      <article className="w-auto">
        <SidebarK />
      </article>
      <article className="col">
        {/* <OrdersMenu token={token}/> */}
        <OrdersMenu />
      </article>
    </div>
  )
}

export default KitchenDisplay
