import React, { useEffect, useState } from "react";
import "./Order.css";
import { getOrdersAxios } from "../../api/axios";
// import { getProductsAxios } from "../../api/axios";

const OrderComponent = ({token}) => {

  const [items, setItems] = useState([]);

  async function getOrders(){
    const response = await getOrdersAxios(token);
    setItems(response);
  }

  useEffect(() => {
    const promises = async () => await getOrders();
    promises();
  }, []);


  return (
    <div>
      <h1>Current order</h1>
      <input placeholder="Name" autoComplete="off"></input>
      <p>Order</p> <p>ID</p>
      <hr />
      <p>Oder info</p>
      {items?.map((order) => (
        <div className="card mb-3 mt-5" style={{ maxWidth: " 300px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={order.products} class="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Product</h5>
              <p className="card-text">
                <small className="text-body-secondary">Price</small>
              </p>
              <button>+</button>
              <p>count</p>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
      )) }
      <hr />
      <p>Total</p>
      <p>$0.00</p>
      <button> Place Order</button>
    </div>
  );
};

export default OrderComponent;
