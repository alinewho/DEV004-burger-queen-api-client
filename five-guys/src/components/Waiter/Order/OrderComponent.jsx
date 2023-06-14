import React, { useEffect } from "react";
import "./Order.css";
// import CartCard from "../CartCard/CartCard";
import AddBtn from "../../../images/AddBtn.png";
import RemoveBtn from "../../../images/RemovalBtn.png";
import "../CartCard/CartCard.css";
// import { getOrdersAxios } from "../../api/axios";
// import { getProductsAxios } from "../../api/axios";

const OrderComponent = ({
  token,
  cartItems,
  totalSum,
  incrementQty,
  decrementQuantity,
  placeOrder,
  client,
  setClient,
}) => {
  // async function getOrders() {
  //   const response = await getOrdersAxios(token);
  //   setItems(response);
  // }

  useEffect(() => {
    // const promises = async () => await getOrders();
    // promises();
  }, []);

  return (
    <article className="currentorder">
      <h1 className="order-text-1">Current order</h1>
      <section className="order-info-section">
        <section className="order-info">
          <input
            className="order-name shadow-none rounded-5"
            placeholder="Client's name"
            autoComplete="off"
            required
            value={client}
            onChange={(e) => setClient(e.target.value)}
          ></input>
          <p className="order-id mb-0">Order #ID</p>
        </section>
        <hr />
      </section>
      <hr />
      <section className="order-part-section">
        <p className="order-text-4">Order info</p>
        <section className="order-items">
          {/* card component or orders  */}
          {cartItems.length > 0 ? (
            cartItems?.map((order) => (
              // <CartCard order={order} incrementQty={incrementQty} decrementQuantity={decrementQuantity} />
              <article
                key={order.id}
                className="base-card card ms-3 mb-"
                style={{ maxWidth: " 300px" }}
              >
                <figure className="food-container">
                  <img
                    src={order.image}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </figure>
                <div className="card-second">
                  <div className="card-desc">
                    <h5 className="card-text-3">{order.name} </h5>
                  </div>
                  <section className="card-price">
                    <p className="card-text-4">$</p>
                    <p className="card-text-5">{order.price}</p>
                  </section>
                </div>
                <section className="card-third">
                  <button
                    className="card-add-btn"
                    onClick={() => decrementQuantity(order)}
                  >
                    <img src={RemoveBtn} alt="minus button" />
                  </button>
                  <p>{order.quantity}</p>
                  <button
                    className="remove-btn"
                    onClick={() => incrementQty(order)}
                  >
                    <img src={AddBtn} alt="add button" />
                  </button>
                </section>
              </article>
              //   <div className="row g-0">
              //     <div className="col-md-4">
              //       <img
              //         src={order.image}
              //         class="img-fluid rounded-start"
              //         alt="..."
              //       />
              //     </div>
              //     <div className="col-md-8">
              //       <div className="card-body">
              //         <h5 className="card-title">{order.name} </h5>
              //         <p className="card-text"></p>
              //         <button onClick={() => incrementQty(order)}>+</button>
              //         <p>{order.quantity}</p>
              //         <button onClick={() => decrementQuantity(order)}>-</button>
              //       </div>
              //     </div>
              //   </div>
              // </article>
            ))
            ) : (
              <p>No orders</p>
            )}
        </section>
      </section>
      <section className="order-price">
        <hr />
        <section className="order-total">
          
          <p className="total mb-0">Total</p>
          <p className="total-price mb-0"> ${totalSum} </p>
        </section>
      </section>
      <button
        className="btn custom bg-danger text-white w-100 mt-2 rounded-5"
        onClick={() => placeOrder()}
      >
        PLACE ORDER
      </button>
    </article>
  );
};

export default OrderComponent;
