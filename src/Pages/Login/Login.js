import React from "react";
import "./Login.css";
import { BiUserCircle, BiKey } from "react-icons/bi";

export default function Login() {
  return (
    <section className="login">
      <div className="login-box">
        <div className="left">
          <form action="">
            <h2 className="login-heading">Let's shop your favourites</h2>
            <p className="login-subinfo">
              Join our growing ecommerce platform for the value for money
              services
            </p>
            <div className="input-box">
              <div className="input">
                <span className="input-logo-wrapper">
                  <BiUserCircle className="input-logo" />
                </span>
                <input type="text" placeholder="Your email here" />
              </div>
              <div className="input">
                <span className="input-logo-wrapper">
                  <BiKey className="input-logo key" />
                </span>
                <input type="text" placeholder="Your password here" />
              </div>
            </div>
            <button className="btn-primary">Login</button>
          </form>
          <div className="create-account">
            <a href="">Create account?</a>
          </div>
        </div>

        <div className="right">
          <img
            src="https://img.freepik.com/free-photo/business-shopping-online-concept_1421-6.jpg?w=900&t=st=1674655712~exp=1674656312~hmac=7b604882d63649895bce74645c27c28e9a9c427b201753114789da9a61062e4c"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
