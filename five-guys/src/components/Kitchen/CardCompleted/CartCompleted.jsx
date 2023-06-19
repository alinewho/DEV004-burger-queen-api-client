import React from 'react'

const CartCompleted = () => {
  return (
    <article className="card-open">
      <div className="open--info">
        <p className="open-name mb-0">TABLE 1A</p>
        <p className="open-id mb-0">#Order155</p>
      </div>
      <hr className="horizontal-line m-0" />
      <div className="card-open-items">
        <p className="open-text-3 m-0">Items</p>
        <p className="open-text-4 m-0">QT</p>
      </div>
      <div className="hambur">
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
  )
}

export default CartCompleted
