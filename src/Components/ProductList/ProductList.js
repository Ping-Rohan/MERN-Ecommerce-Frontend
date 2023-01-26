import React from "react";
import BrowseSidebar from "./BrowseSidebar";
import ProductHero from "./ProductHero";
import "./ProductList.css";
import Productwrapper from "./Product-wrapper";

export default function ProductList() {
  return (
    <div className=" product-list container">
      <div className="product-hero">
        <BrowseSidebar />
        <ProductHero />
      </div>
      <Productwrapper />
    </div>
  );
}
