import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./BreakfastMenu.css";
import { getProductsAxios } from "../../api/axios";
import AddBtn from "../../images/AddBtn.png";

const BreakfastMenu2 = ({ token }) => {
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
    setCartItems([...cartItems, item]);
    setTotalSum(totalSum + item.price);
  };

  return (
    <article className="bg-light vh-100">
      <div className="pt-5 ps-5">
        <h1>Breakfast Menu</h1>
        {items?.map((item) => (
          <article className="base-foodcard card mt-5" style={{'maxWidth':' 328px'}}>
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
              <button className="add-btn" onClick={() => handleAddToCart(item)}>
                <img src={AddBtn} alt="add button"/>
              </button>
            </section>
          </article>
        ))}
      </div>
    </article>
  );
};

export default BreakfastMenu2;
