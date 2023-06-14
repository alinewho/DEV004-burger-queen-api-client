import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./LunchMenu.css";
import AddBtn from "../../../images/AddBtn.png";


const LunchMenu = ({ token, items, handleAddToCart }) => {

  const lunchItems = items.filter((product) => product.type === 'Almuerzo');
  return (
    <article className="bg-light vh-100">
    <div className="pt-5 ps-5">
      <h1>Lunch Menu</h1>
      {lunchItems.length > 0 ? (
        lunchItems.map((item) => (
          <article
            key={item.id}
            className="base-foodcard card mt-5"
            style={{ maxWidth: "328px" }}
          >
            <figure className="item-container">
              <img src={item.image} alt={item.name} />
            </figure>

            <section className="second">
              <section className="desc">
                <p className="text-3">{item.name}</p>
                <p className="text-2">Ground Arabica Beans</p>
              </section>
              <section className="price">
                <p className="text-4">$</p>
                <p className="text-5">{item.price}</p>
              </section>
            </section>
            <section className="third">
              <button
                className="add-btn"
                onClick={() => handleAddToCart(item)}
              >
                <img src={AddBtn} alt="add button" />
              </button>
            </section>
          </article>
        ))
      ) : (
        <p>There are no lunch items available</p>
      )}
    </div>
  </article>
  );
};

export default LunchMenu;
