import React from "react";
import { useState } from "react";
import "./Products.css";
import AmulTaaza from "../assets/images/Amul Taaza.avif";
const Cart = () => {
  const [items, setItems] = useState({
    category: "Milk",
    image: AmulTaaza,
    title: "Amul Taaza Toned Milk",
    unit: "500 ml",
    time: 8,
    price: 30,
  });
  const handleDisc = () => {
    const disc = items.price - items.price*0.1;
    setItems({...items,price:disc})
    setDisabled(true)
  }

  const [disabled,setDisabled] = useState(false);
  return (
    <div className="cart-list">
      <div className="products-grid">
        <div className="product-card">
          <img src={items.image} alt={items.title} />

          <p className="delivery">⏱ {items.time} MINS</p>

          <h3>{items.title}</h3>

          <p>{items.unit}</p>

          <div className="price-row">
            <span>₹{items.price}</span>

            <button onClick={handleDisc} disabled={disabled}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
