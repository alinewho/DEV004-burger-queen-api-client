import React from 'react'
import Pagination from '../Pagination/Pagination'
import CartCompleted from '../CardCompleted/CartCompleted';
import { Link } from "react-router-dom";


const CompletedOrders = ({ cookedOrders }) => { // Add curly braces to destructure the prop
  return (
    <article className="bg-light vh-100 ">
        <section className="">
            <Link className="btn bg-white text-black w-10 mt-4 rounded-5" to='/kitchendisplay'>
            Open
            </Link>

            <button className="btn bg-dark text-white w-10 mt-4 rounded-5 ">
            Completed
            </button>
        </section>
        <section className="">
            <Pagination />
        </section>     
        <section className="card-grid">
         <CartCompleted cookedOrders={cookedOrders} /> {/* Pass the 'pending' prop */}
        </section> 
    </article>
  )
}

export default CompletedOrders
