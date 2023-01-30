import React from "react";
import "./Product.css";
import { MdLocalGroceryStore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProductItem(props) {
  const navigate = useNavigate();
  function handleProductItemClick(id) {
    navigate(`/product/${id}`);
  }
  return (
    <div
      className="product-item"
      onClick={handleProductItemClick.bind(null, props.id)}
    >
      <div className="product-image">
        <img src={props.image} alt="" />
      </div>
      <div className="item-content">
        <div className="store-name">
          <p>
            <em>By Shreesh Store</em>
          </p>
        </div>
        <h1 className="product-name">{props.productName}</h1>
        <div className="price-cart">
          <div className="price-text">
            <em>Price : </em>
            <span className="price">${props.price}</span>
          </div>
          <div className="product-cart">
            <MdLocalGroceryStore className="cart-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
