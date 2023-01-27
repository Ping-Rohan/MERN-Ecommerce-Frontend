import React from "react";
import "./Product.css";
import { MdLocalGroceryStore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProductItem() {
  const navigate = useNavigate();
  function handleProductItemClick() {
    navigate("/product");
  }
  return (
    <div className="product-item" onClick={handleProductItemClick}>
      <div className="product-image">
        <img
          src="https://img.freepik.com/free-photo/white-denim-jacket-front-view-streetwear-fashion_53876-106035.jpg?w=740&t=st=1674743737~exp=1674744337~hmac=cb8b93ca198e48429adcddac0bac9624b29b8b7c202d929113187b8f0cf157e7"
          alt=""
        />
      </div>
      <div className="item-content">
        <div className="store-name">
          <p>
            <em>By Shreesh Store</em>
          </p>
        </div>
        <h1 className="product-name">Puffet jacket chinese</h1>
        <div className="price-cart">
          <div className="price-text">
            <em>Price : </em>
            <span className="price">$300</span>
          </div>
          <div className="product-cart">
            <MdLocalGroceryStore className="cart-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
