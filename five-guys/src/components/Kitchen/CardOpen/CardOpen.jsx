
import './CardOpen.css'

const CardOpen = () => {
  return (
    <article className="card-open">
      <div className="open--info">
        <p className="open-name">TABLE 1A</p>
        <p className="open-id">#Order155</p>
      </div>
      <hr />
      <div className="card-open-items">
        <p className="open-text-3">Items</p>
        <p className="open-text-4">QT</p>
      </div>
      <div className="hambur">
        <p className="open-text-5">Hamburger</p>
        <p className="open-text-6">1</p>
      </div>
      <hr />
      <section className="btnsgroup">
        <button className="checkbtn">
          <div className="rectangle-5-4-3-2" />
         <i class="bi bi-check-lg"></i>
         </button>

        <button className="trash">
          <div className="rectangle-5-4-3-1" />
          <i class="bi bi-trash3"></i>
        </button>
        
      </section>
    </article>
  )
}

export default CardOpen
