import React from 'react'
import Pagination from '../Pagination/Pagination'
import CartCompleted from '../CardCompleted/CartCompleted'

const CompletedOrders = () => {
  return (
    <article className="bg-light vh-100 ">
        <section className="">
            <button className="btn bg-white text-black w-10 mt-4 rounded-5">
            Open
            </button>

            <button className="btn bg-dark text-white w-10 mt-4 rounded-5 ">
            Completed
            </button>
        </section>
        <section className="">
            <Pagination />
        </section>     
        <section className="card-grid">
         <CartCompleted />
        </section> 
         
    </article>
  )
}

export default CompletedOrders
