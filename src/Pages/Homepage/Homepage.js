import React from "react";
import "./HomePage.css";
import Hero from "../../Components/Hero/Hero";
import ProductList from "../../Components/ProductList/ProductList";

export default function Homepage() {
  return (
    <section className="homepage">
      <Hero />
      <ProductList />
    </section>
  );
}
