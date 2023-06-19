import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/js/dist/dropdown'
// import 'bootstrap/js/dist/collapse'
import './SidebarK.css'
import redLogo from '../../../images/redLogoBG.png' 
import { Link } from "react-router-dom";

const SidebarK = () => {
    const [active, setActive] = useState(1);
    return (
      <div className='sidebar d-flex justify-content-between flex-column bg-white py-3 ps-5 pe-5 vh-100'>
              <div className=" ">
                  <div className='mt-2'>
                      <Link to="/" className='text-decoration-none ms-4 d-flex align-items-center text-black d-none d-sm-inline' role="button">
                          <img src={redLogo} className='mb-4 ms-2 mt-4' alt="" />
                      </Link>
                      <hr className='text-black d-none d-sm-block' />
                      <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
                          <section className="sidebarBtn">
                              <li className={active === 1 ? "active nav-item my-1 py-2 py-sm-0" : "nav-item my-1 py-2 py-sm-0"} 
                              onClick={e => setActive(1)}>
                              <Link to="/kitchendisplay" className="nav-link text-black" aria-current="page">
                                  <i className="bi bi-grid-1x2"></i>
                                  <span className="ms-2 d-none d-sm-inline">Orders</span>
                              </Link>
                              </li>
                          </section>
                          
                          <li className={active === 2 ? "active nav-item my-1 py-2 py-sm-0" : "nav-item my-1 py-2 py-sm-0"} 
                              onClick={e => setActive(2)}>
                              <section className="sidebarBtn">
                                  <a href="#submenu" className="nav-link text-black" data-bs-toggle="collapse" aria-current="page">
                                  <i className="bi bi-receipt-cutoff"></i>
                                  <span className="ms-2 d-none d-sm-inline">Settings</span>

                              </a>
                              </section>
                          </li>

                          <section className="sidebarBtn">
                              <li className="nav-item  my-1 py-2 py-sm-0">
                              <a href="/" className="nav-link text-black" aria-current="page">
                                  <i className="bi bi-box-arrow-right"></i>
                                  <span className="ms-2 d-none d-sm-inline">Log out</span>
                              </a>
                          </li>
                          </section>
                          
                      </ul>
                  </div>
              </div>
      </div>
    )
}

export default SidebarK
