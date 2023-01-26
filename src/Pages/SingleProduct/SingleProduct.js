import React from "react";
import "./SingleProduct.css";

export default function SingleProduct() {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-left">
          <img
            src="https://img.freepik.com/free-photo/white-denim-jacket-front-view-streetwear-fashion_53876-106035.jpg?w=740&t=st=1674743737~exp=1674744337~hmac=cb8b93ca198e48429adcddac0bac9624b29b8b7c202d929113187b8f0cf157e7"
            alt=""
          />
        </div>
        <div className="single-product-right">
          <div className="about-product">
            <h3>About Product</h3>
          </div>
          <div className="single-product-right-content">
            <em className="single-product-category">Mens Fashion</em>
            <div className="single__product-price">
              <h2>Puffet jacket chinese</h2>
              <span className="price">$300</span>
            </div>
            <div className="single__product-description">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                repellat error ad ab quam tempora!
              </p>
            </div>
            <div className="single__product-size-quantity">
              <div className="size">
                <span className="size-text">SIZE</span>
                <span className="size">small</span>
                <span className="size">medium</span>
                <span className="size">large</span>
              </div>

              <div className="quantity">
                <span>Quantity</span>
                <input type="number" />
              </div>
            </div>
            <div className="checkout">
              <button className="cart-btn">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
