import { deleteOrderAxios } from "../../../api/axios";
import "./CardOpen.css";

const CardOpen = ({ token, pending, setPending }) => {
  const handleDelete = async (id) => {
    try {
      // Call the deleteOrderAxios function passing the token and order ID
      await deleteOrderAxios(token, id);
      // Remove the deleted order from the pending state
      setPending((prevPending) => prevPending.filter((order) => order.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {pending?.map((pending) => (
        <article key={pending.id} className="card-open">
          <div className="open--info">
            <p className="open-name mb-0">{pending.client} </p>
            <p className="open-id mb-0">#Order{pending.id}</p>
          </div>
          <hr className="horizontal-line m-0" />
          <div className="card-open-items">
            <p className="open-text-3 m-0">Items</p>
            <p className="open-text-4 m-0">QT</p>
          </div>
          <div className="hambur">
            {pending.products.map((product) => 
            <>
            <section className="open-products">
              <p className="open-text-5">{product.name}</p> 
            <p className="open-text-6">{product.quantity}</p>
            </section>
            
            </>
            )}
            
          </div>
          <hr className="horizontal-line m-0" />
          <section className="btnsgroup">
            <button className="checkbtn">
              <i className="bi bi-check-lg"></i>
            </button>

            <button className="trash" onClick={() => handleDelete(pending.id)}> {/* Call handleDelete with the order ID */}
              <i className="bi bi-trash3"></i>
            </button>
          </section>
        </article>
      ))}
    </>
  );
};

export default CardOpen;