import React, { useEffect, useState } from 'react'
import SidebarK from '../../components/Kitchen/SidebarKitchen/SidebarK'
import OpenOrders from '../../components/Kitchen/OpenOrders/OpenOrders'
import { getOrdersAxios } from '../../api/axios';

const KitchenDisplay = ({token}) => {
  const [pending, setPending] = useState([]);

  async function getOrders() {
    const response = await getOrdersAxios(token);
    setPending(response);
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
        <OpenOrders token={token} pending={pending} setPending={setPending} />
      </article>
    </div>
  )
}

export default KitchenDisplay
