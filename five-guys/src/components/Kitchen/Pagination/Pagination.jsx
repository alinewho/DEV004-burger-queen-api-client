import React from 'react'

const Pagination = () => {
  return (
    <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                <i class="bi bi-caret-left-fill"></i>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#">
            <i class="bi bi-caret-right-fill"></i>
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Pagination
