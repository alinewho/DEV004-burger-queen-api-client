import React from "react";
import Pagination from "../Pagination/Pagination";
import CardOpen from "../CardOpen/CardOpen";
import { Link } from "react-router-dom";
import './OpenOrders.css'

const OpenOrders = ({token, pending, setPending}) => {
  return (

    <article className="bg-light vh-100">
      <section className="d-flex">
        <section className="open-space col-md-8">
            <button className="openbtn btn bg-dark text-white  mt-4 rounded-3">
            Open
            </button>

            <Link className="openbtn btn bg-white text-black  mt-4 rounded-3" to='/completedorders' >
            Completed
            </Link>
        </section>
        <section className="col-md-4">
            <Pagination />
        </section>     
      </section>
        
        <section className="card-grid">
          <CardOpen token={token} pending={pending} setPending={setPending} />
        </section> 
         
    </article>
    
 
    
  );
};

export default OpenOrders;
