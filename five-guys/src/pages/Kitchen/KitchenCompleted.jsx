import React from 'react'
import SidebarK from '../../components/Kitchen/SidebarKitchen/SidebarK'
import CompletedOrders from '../../components/Kitchen/CompletedOrders/CompletedOrders'

const KitchenCompleted = () => {
  return (
    <div className="d-flex">
      <article className="w-auto">
        <SidebarK />
      </article>
      <article className="col">
        {/* <OrdersMenu token={token}/> */}
        <CompletedOrders />
      </article>
    </div>
  )
}

export default KitchenCompleted
