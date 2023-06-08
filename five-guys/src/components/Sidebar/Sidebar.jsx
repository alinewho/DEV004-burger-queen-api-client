import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/js/dist/dropdown'
// import 'bootstrap/js/dist/collapse'
import './Sidebar.css'
import redLogo from '../../images/redLogoBG.png' 
import { Link } from "react-router-dom";

const Sidebar = () => {
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
                            <Link to="/dashboard" className="nav-link text-black" aria-current="page">
                                <i className="bi bi-grid-1x2"></i>
                                <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </li>
                        </section>
                        
                        <li className={active === 2 ? "active nav-item my-1 py-2 py-sm-0" : "nav-item my-1 py-2 py-sm-0"} 
                            onClick={e => setActive(2)}>
                            <section className="sidebarBtn">
                                <a href="#submenu" className="nav-link text-black" data-bs-toggle="collapse" aria-current="page">
                                <i className="bi bi-receipt-cutoff"></i>
                                <span className="ms-2 d-none d-sm-inline">New Order</span>
                                <i className="bi bi-arrow-down-short ms-1 ms-sm-3"></i>
                            </a>
                            </section>
                            
                            <ul className="nav collapse ms-4 flex-column" id='submenu' data-bs-parent="#parentM" >
                                <section className="sidebarBtn">
                                    <li className="nav-item ">
                                        <Link to="/breakfastmenu" className="nav-link text-black" aria-current="page">
                                         <span className='d-none d-sm-inline'>Breakfast</span>
                                         <i class="bi bi-cup-hot ms-0 ms-sm-3"></i>
                                         </Link>
                                         
                                    </li>
                                </section>
                                <section className="sidebarBtn">
                                    <li className="nav-item ">
                                    <Link to="/lunchmenu" className="nav-link text-black">
                                        <span className='d-none d-sm-inline'>Lunch</span>
                                        <i class="bi bi-cup-straw ms-0 ms-sm-3"></i>
                                    </Link>
                                    
                                </li>
                                </section>
                            </ul>
                        </li>
                        <section className="sidebarBtn">
                            <li className={active === 3 ? "active nav-item my-1 py-2 py-sm-0" : "nav-item my-1 py-2 py-sm-0"} 
                            onClick={e => setActive(3)}>
                            <Link to="/status" className="nav-link text-black" aria-current="page">
                                <i className="bi bi-clipboard-data"></i>
                                <span className="ms-2 d-none d-sm-inline">Status</span>
                            </Link>
                        </li>
                        </section>
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
                <div className="dropdown open">
                    <a href="/pin" className="btn border-none dropdown-toggle text-black" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                                <i className="bi bi-person f5-4"></i> <span className='fs-5 ms-3 d-none d-sm-inline'>Waiter</span>
                            </a>
                    <div className="dropdown-menu" aria-labelledby="triggerId">
                        <a className="dropdown-item" href="/pin">Profile</a>
                        <a className="dropdown-item " href="/pin">Settings</a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Sidebar
