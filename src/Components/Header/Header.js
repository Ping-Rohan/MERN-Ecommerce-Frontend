import React from "react";
import "./Header.css";
import Logo from "../../Images/logo.png";
import { MdShoppingCart, MdAccountBox } from "react-icons/md";

import { IoIosCreate } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const isAdmin = useSelector((state) => state.User.document.isAdmin);
  const cartLength = useSelector((state) => state.Cart.cartItem.length);
  const navigate = useNavigate();

  function handleCreateProduct() {
    navigate("/admin");
  }

  function handleCreateCategory() {
    navigate("/create-category");
  }

  function handleProfile() {
    navigate("/profile");
  }

  function handleCartClick() {
    navigate("/cart");
  }

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
          {isAdmin && (
            <AiFillPlusCircle
              className="header-button"
              onClick={handleCreateCategory}
            />
          )}
          {isAdmin && (
            <IoIosCreate
              className="header-button"
              onClick={handleCreateProduct}
            />
          )}
          {!isAdmin && (
            <MdAccountBox className="header-button" onClick={handleProfile} />
          )}
          {!isAdmin && (
            <div className="cart">
              <MdShoppingCart
                className="header-button cart-btn"
                onClick={handleCartClick}
              />{" "}
              <span className="cart-number">{cartLength}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
