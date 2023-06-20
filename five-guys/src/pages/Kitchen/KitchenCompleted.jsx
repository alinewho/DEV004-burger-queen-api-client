import React, { useEffect, useState } from 'react'
import SidebarK from '../../components/Kitchen/SidebarKitchen/SidebarK'
import CompletedOrders from '../../components/Kitchen/CompletedOrders/CompletedOrders'
import { getOrdersAxios } from '../../api/axios';

const KitchenCompleted = ({token}) => {
  const [cookedOrders, setCookedOrders] = useState([]);

  async function getOrders() {
    const response = await getOrdersAxios(token);
    setCookedOrders(response);
  }

  useEffect(() => {
    const promises = async () => await getOrders();
    promises();
  }, []);
  return (
    <div className="d-flex">
      <article className="w-auto">
        <SidebarK />
      </article>
      <article className="col">
        {/* <OrdersMenu token={token}/> */}
        <CompletedOrders cookedOrders={cookedOrders} />
      </article>
    </div>
  )
}

export default KitchenCompleted
