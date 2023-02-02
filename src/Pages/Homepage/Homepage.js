import React, { useEffect } from "react";
import "./HomePage.css";
import Hero from "../../Components/Hero/Hero";
import ProductList from "../../Components/ProductList/ProductList";

let initialRender = true;

export default function Homepage() {
  return (
    <section className="homepage">
      <Hero />
      <ProductList />
    </section>
  );
}
