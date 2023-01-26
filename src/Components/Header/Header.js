import React from "react";
import "./Header.css";
import Logo from "../../Images/logo.png";
import { MdManageAccounts, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <span className="logo">
          <img src={Logo} alt="" />
        </span>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shop</li>
          <li>
            <Link to="/product">Pages</Link>
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="buttons">
          <MdManageAccounts className="header-button" />
          <div className="cart">
            <MdShoppingCart className="header-button cart-btn" />{" "}
            <span className="cart-number">3</span>
          </div>
        </div>
      </div>
    </header>
  );
}
