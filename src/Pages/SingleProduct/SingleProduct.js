import React, { useState, useEffect } from "react";
import "./SingleProduct.css";
import privateInstance from "../../Axios/PrivateInstance";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/CartSlice";

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const isAdmin = useSelector((state) => state.User.document.isAdmin);
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSingleProduct = async () => {
      const response = await privateInstance.get(`/product/${params.id}`);
      setSingleProduct(response.data.product);
    };

    getSingleProduct().catch((error) => console.log(error));
  }, []);

  function handleCartClick() {
    dispatch(addToCart({ ...singleProduct, quantity }));
  }

  function handleQuantityChange(e) {
    setQuantity(+e.target.value);
  }
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-left">
          <img
            src={`http://localhost:5000/${singleProduct?.productImages?.[0]}`}
            alt=""
            crossOrigin="anonymous"
          />
        </div>
        <div className="single-product-right">
          <div className="about-product">
            <h3>About Product</h3>
          </div>
          <div className="single-product-right-content">
            <em className="single-product-category">
              {singleProduct?.category?.categoryName}
            </em>
            <div className="single__product-price">
              <h2>{singleProduct.productName}</h2>
              <span className="price">${singleProduct.price}</span>
            </div>
            <div className="single__product-description">
              <p>{singleProduct.productDescription}</p>
            </div>
            <div className="single__product-size-quantity">
              <div className="size">
                <span className="size-text">SIZE</span>
                <span className="size">small</span>
                <span className="size">medium</span>
                <span className="size">large</span>
              </div>

              <div className="quantity">
                <span>Quantity</span>
                <input
                  type="number"
                  defaultValue="1"
                  onChange={handleQuantityChange}
                />
              </div>
            </div>
            {!isAdmin && (
              <div className="checkout">
                <button className="cart-btn-1" onClick={handleCartClick}>
                  ADD TO CART
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
