import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/js/dist/dropdown'
// import 'bootstrap/js/dist/collapse'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='container-fluid'>
        <div className=" row">
            <div className="col-auto col-sm-2 bg-light d-flex flex-column justify-content-between min-vh-100">
                <div className='mt-2'>
                    <a href="/" className='text-decoration-none ms-4 d-flex align-items-center text-black d-none d-sm-inline' role="button">
                        <span className='f5-4'>Side Menu</span>
                    </a>
                    <hr className='text-black d-none d-sm-block' />
                    <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
                        <section className="sidebarBtn">
                            <li className="nav-item my-1 py-2 py-sm-0">
                            <a href="/" className="nav-link text-black" aria-current="page">
                                <i className="bi bi-grid-1x2"></i>
                                <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>
                        </section>
                        
                        <li className="nav-item my-1 py-2 py-sm-0">
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
                                        <a className="nav-link text-black" href="#" aria-current="page">
                                         <span className='d-none d-sm-inline'>Breakfast</span>
                                         <i class="bi bi-cup-hot ms-0 ms-sm-3"></i>
                                         </a>
                                         
                                    </li>
                                </section>
                                <section className="sidebarBtn">
                                    <li className="nav-item ">
                                    <a className="nav-link text-black" href="#">
                                        <span className='d-none d-sm-inline'>Lunch</span>
                                        <i class="bi bi-cup-straw ms-0 ms-sm-3"></i>
                                    </a>
                                    
                                </li>
                                </section>
                            </ul>
                        </li>
                        <section className="sidebarBtn">
                            <li className="nav-item  my-1 py-2 py-sm-0">
                            <a href="#" className="nav-link text-black" aria-current="page">
                                <i className="bi bi-clipboard-data"></i>
                                <span className="ms-2 d-none d-sm-inline">Status</span>
                            </a>
                        </li>
                        </section>
                        <section className="sidebarBtn">
                            <li className="nav-item  my-1 py-2 py-sm-0">
                            <a href="#" className="nav-link text-black" aria-current="page">
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
    </div>
  )
}

export default Sidebar
