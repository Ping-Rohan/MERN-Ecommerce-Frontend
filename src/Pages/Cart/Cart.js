import { useSelector } from "react-redux";
import "./Cart.css";
import { useEffect } from "react";
import { fetchCart } from "../../Store/CartSlice";
import { useDispatch } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.Cart.cartItem);

  console.log(cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  function handleCartItemRemove(product) {
    // dispatch(deleteCartItems(product));
  }
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
                        <img src={item?.product?.productImages?.[0]} alt="" />
                      </div>
                      <div className="cart-product-info">
                        <span className="cart-product-name">
                          {item?.product?.productName}
                        </span>
                        {/* <em>{item.category.categoryName}</em> */}
                        <button onClick={handleCartItemRemove.bind(null, item)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-right">
                      <span className="cart-item-quantity">
                        {item.quantity}
                      </span>
                      <span className="cart-item-price">
                        ${item?.product?.price}
                      </span>
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
