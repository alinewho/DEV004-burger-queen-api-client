import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OrderComponent from "../../components/Order/OrderComponent";
import { getProductsAxios, placeOrdersAxios } from "../../api/axios";
import BreakfastMenu from "../../components/BreakfastMenu/BreakfastMenu";
import { alertToasty } from "../../components/Alert";

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


  const incrementQty = (item) => {
    setCartItems(
      cartItems.map((cart) =>
        cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id
            ? {
                ...cart,
                quantity: cart.quantity > 1 ? cart.quantity - 1 : 1,
              }
            : cart
        )
      );
    } else {
      handleRemoveFromCart(item);
    }
  };

  const handleAddToCart = (item) => {
    item.quantity = 1;
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cart) => cart.id !== item.id);
    setCartItems(updatedCartItems);
  };


  useEffect(() => {
    const sum = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalSum(sum);
  }, [cartItems]);

  const placeOrder = async (client) => {
  
    const dt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    const pedido = {
      client: client,
      products: cartItems,
      status: "pending",
      dateEntry: dt,
    };
  
    await placeOrdersAxios(token, pedido);
  
    setCartItems([]);
    alertToasty("Order placed successfully");
  };


  return (
    <div className="d-flex">
      <article className="w-auto">
        <Sidebar />
      </article>
      <article className="col">
        {/* <BreakfastMenu2 token={token}/> */}
        <BreakfastMenu token={token} items={items} handleAddToCart={handleAddToCart} />
      </article>
      <article className="col-3">
        <OrderComponent
          token={token}
          cartItems={cartItems}
          totalSum={totalSum}
          handleRemoveFromCart={handleRemoveFromCart}
          incrementQty={incrementQty}
          decrementQuantity={decrementQuantity}
          placeOrder={placeOrder}
        />
      </article>
    </div>
  );
};

export default BreakfastPage;
