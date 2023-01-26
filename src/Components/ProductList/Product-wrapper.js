import React from "react";
import ProductItem from "../../ProductItem/ProductItem";
import "./ProductWrapper.css";

export default function Productwrapper() {
  return (
    <section className="product-wrapper">
      <div className="category-heading">
        <h2>Women Fashion</h2>
        <a href="">See more</a>
      </div>
      <div className="product-category">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="category-heading">
        <h2>Mens Fashion</h2>
        <a href="">See more</a>
      </div>
      <div className="product-category">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
}
