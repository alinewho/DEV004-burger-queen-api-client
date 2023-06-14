import './CartCard.css'


const CartCard = ({order, incrementQty, decrementQuantity}) => {
  return (
        <article 
        key={order.id}
        className="base-card">
        <figure className="food-container">
            <img src={order.image} alt={order.name} />
        </figure>
      
      <section className="card-second-column">
        <section className="desc">
          <p className="card-text-2">Ground Arabica Beans </p>
          <p className="card-text-3">{order.name}</p>
        </section>
        <section className="card-price">
          <p className="card-text-4">$</p>
          <p className="card-text-5">{order.price}</p>
        </section>
      </section>
      <section className="card-structure">
        <button onClick={decrementQuantity(order)}>
            <img src="" className='card-img-6' alt='minus button'/>
        </button>
        
        <p className="card-text-7">1</p>
        <button onClick={incrementQty(order)}>
            <img src="" className='card-img-8' alt='plus button'/>
        </button>
      </section>
    </article>
  )
}

export default CartCard



/* {cartItems.length > 0 ? (
    <>
      {cartItems?.map((order) => (
        <div
          key={order.id}
          className="card mb-3 mt-5"
          style={{ maxWidth: " 300px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={order.image}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{order.name} </h5>
                <p className="card-text"></p>
                <button onClick={() => incrementQty(order)}>+</button>
                <p>{order.quantity}</p>
                <button onClick={() => decrementQuantity(order)}>-</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  ) : (
    <p>No orders</p>
  )} */
 


  /* <article className="base-card">
        <figure className="food-container">
            <img src="" />
        </figure>
      
      <section className="card-second-column">
        <section className="desc">
          <p className="card-text-2">Ground Arabica Beans </p>
          <p className="card-text-3">Black coffee</p>
        </section>
        <section className="card-price">
          <p className="card-text-4">$</p>
          <p className="card-text-5">5.00</p>
        </section>
      </section>
      <section className="card-structure">
        <img src="" className='card-img-6' />
        <p className="card-text-7">1</p>
        <img src="" className='card-img-8'/>
      </section>
    </article> */