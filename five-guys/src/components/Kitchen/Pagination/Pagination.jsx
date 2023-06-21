import React from 'react'

const Pagination = () => {
  return (
    <nav aria-label="...">
        <ul className="pagination mt-4">
          <li class="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                <i className="bi bi-caret-left-fill"></i>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>

          <li className="page-item">
            <a className="page-link" href="#">
            <i className="bi bi-caret-right-fill"></i>
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Pagination
