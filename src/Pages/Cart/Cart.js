import { useSelector } from "react-redux";
import "./Cart.css";

export default function Cart() {
  const cart = useSelector((state) => state.Cart.cartItem);
  console.log(cart);
  return (
    <section className="product-carts">
      <div className="container">
        <div className="cart-wrapper">
          <div className="cart-left">
            <div className="cart-heading">
              <h1>Shopping Cart</h1>
              <span>{cart.length} items</span>
            </div>
            <div className="products-heading">
              <div className="product-topics">
                <div className="topic-left">
                  <span>PRODUCT DETAILS</span>
                </div>
                <div className="topic-right">
                  <span>QUANTITY</span>
                  <span>PRICE</span>
                  <span>TOTAL</span>
                </div>
              </div>
            </div>
            <div className="cart-list">
              {cart.map((item) => {
                return (
                  <div className="cart-item">
                    <div className="cart-item-left">
                      <div className="cart-img">
                        <img src={item?.productImages?.[0]} alt="" />
                      </div>
                      <div className="cart-product-info">
                        <span className="cart-product-name">
                          {item.productName}
                        </span>
                        <em>{item.category.categoryName}</em>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div className="cart-item-right">
                      <span className="cart-item-quantity">
                        {item.quantity}
                      </span>
                      <span className="cart-item-price">${item.price}</span>
                      <span className="cart-item-total">${item.total}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart-right">
            <div className="order-summary">
              <h1>Order Summary</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}