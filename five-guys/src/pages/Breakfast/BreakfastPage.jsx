import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./BreakfastPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import BreakfastMenu from '../../components/BreakfastMenu/BreakfastMenu'
import OrderComponent from "../../components/Order/OrderComponent";
import { getProductsAxios } from "../../api/axios";
// import BreakfastMenu2 from '../../components/BreakfastMenu/BreakfastMenu2'
import AddBtn from "../../images/AddBtn.png";




const BreakfastPage = ({ token }) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  async function getProducts() {
    const response = await getProductsAxios(token);
    setItems(response);
  }

  useEffect(() => {
    const promises = async () => await getProducts();
    promises();
  }, []);

  const handleAddToCart = (item) => {
    const index = cartItems.findIndex((x) => x.id === item.id);
    if (index === -1) {
      setCartItems([...cartItems, item]);
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id? {...x, quantity: x.quantity + 1 } : x
        )
      );
    }
    setTotalSum(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
    
    setCartItems([...cartItems, item]);
    setTotalSum(totalSum + item.price);
  };


  const handleRemoveFromCart = (item) => {
    const conditional = cartItems.filter((cart) => cart.id!== item.id);
    setCartItems(conditional);
    setTotalSum(totalSum - item.price);
  };


  return (
    <div className="d-flex">
      <article className="w-auto">
        <Sidebar />
      </article>
      <article className="col">
        {/* <BreakfastMenu2 token={token}/> */}
        <article className="bg-light vh-100">
          <div className="pt-5 ps-5">
            <h1>Breakfast Menu</h1>
            {items?.map((item) => (
              <article
                key={item.id}
                className="base-foodcard card mt-5"
                style={{ maxWidth: " 328px" }}
              >
                <figure className="item-container">
                  <img src={item.image} alt={item.name} />
                </figure>

                <section className="second">
                  <section className="desc">
                    <p className="text-3">{item.name}</p>
                    <p className="text-2">Ground Arabica Beans </p>
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
            ))}
          </div>
        </article>
      </article>
      <article className="col-3">

        <OrderComponent token={token} cartItems={cartItems} totalSum={totalSum} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} />
      </article>
    </div>
  );
};

export default BreakfastPage;
