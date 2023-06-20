import { deleteOrderAxios, patchOrderStatus } from "../../../api/axios";
import { AlertError, alertToasty } from "../../Alert";
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
const changeOrderStatus= async (id) => {
  const dt = new Date().toISOString().slice(0, 19).replace("T", " ");
  const newStatusAndDate = {
    'status' : 'ready to deliver',
    'dateProcessed' : dt
  }
  await patchOrderStatus(token, newStatusAndDate, id, {
    onError: () => {
      AlertError("Error");
    },
    onSuccess: () => {

      alertToasty("Status changed successfully");
    },
  });
};

const pendingOrders = pending.filter((open) => open.status === 'pending');


  return (
    <>
      {pendingOrders?.map((pending) => (
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
            <button className="checkbtn" onClick={() => changeOrderStatus(pending.id)}>
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