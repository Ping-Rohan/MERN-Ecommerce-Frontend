import React from "react";
import ProductItem from "../../ProductItem/ProductItem";
import "./ProductWrapper.css";

export default function Productwrapper() {
  return (
    <section className="product-wrapper">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </section>
  );
}
