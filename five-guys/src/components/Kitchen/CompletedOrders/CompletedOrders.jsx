import React from 'react'
import Pagination from '../Pagination/Pagination'
import CartCompleted from '../CardCompleted/CartCompleted';
import { Link } from "react-router-dom";


const CompletedOrders = ({ cookedOrders }) => { // Add curly braces to destructure the prop
  return (
    <article className="bg-light vh-100 ">
      <section className="d-flex">
        <section className="open-space col-md-8">
            <Link className="openbtn btn bg-white text-black w-10 mt-4 rounded-3" to='/kitchendisplay'>
            Open
            </Link>

            <button className="openbtn btn bg-dark text-white w-10 mt-4 rounded-3 ">
            Completed
            </button>
        </section>
        <section className=" col-md-4">
            <Pagination />
        </section>     
      </section>
        
        <section className="card-grid">
         <CartCompleted cookedOrders={cookedOrders} /> {/* Pass the 'pending' prop */}
        </section> 
    </article>
  )
}

export default CompletedOrders
