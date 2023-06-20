import React from "react";

const CartCompleted = ({ cookedOrders }) => {
  const completedOrders = cookedOrders.filter(
    (open) => open.status === "ready to deliver"
  );

  return (
    <div>
      {completedOrders?.map((pending) => (
        <article key={pending.id} className="card-open">
          <div className="open--info">
            <p className="open-name mb-0">{pending.client} </p>
            <p className="open-id mb-0">#Order{pending.id}</p>
          </div>
          <hr className="horizontal-line m-0" />
          <div className="card-open-items">
            <p className="open-text-3 m-0">Items</p>
            <p className="open-text-4 m-0">QT</p>
          </div>
          <div className="hambur">
          {pending.products.map((product) => 
            <>
            <section className="open-products">
              <p className="open-text-5">{product.name}</p> 
            <p className="open-text-6">{product.quantity}</p>
            </section>
            
            </>
            )}
            <p className="open-text-5">Hamburger</p>
            <p className="open-text-6">1</p>
          </div>
          <hr className="horizontal-line m-0" />
          <section className="btnsgroup">
            {/* <section className="btns-right"> */}
            <button className="completed-btn">
              <p className="completed m-0">COMPLETED</p>
            </button>

            {/* </section> */}
          </section>
        </article>
      ))}
    </div>
  );
};

export default CartCompleted;
