import "./CreateProduct.css";
import { useFormik } from "formik";
import { postProduct } from "../../Store/ProductReducers";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import privateInstance from "../../Axios/PrivateInstance";

export default function CreateProduct() {
  const [images, setImages] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [suggestionText, setSuggestionText] = useState("");
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      productName: "",
      productDescription: "",
      price: "",
      stocks: "",
      category: "",
    },
    onSubmit: (value, action) => {
      const form = new FormData();
      form.append("productName", value.productName);
      form.append("productDescription", value.productDescription);
      form.append("price", value.price);
      form.append("category", suggestionText);
      form.append("stocks", value.stocks);
      for (let i = 0; i < images.length; i++) {
        form.append("image", images[i]);
      }
      dispatch(postProduct(form));
      setSuggestionText("");
      action.resetForm();
    },
  });

  useEffect(() => {
    if (!values.category.length > 0) return setSuggestion([]);
    async function getSuggestion() {
      const response = await privateInstance.post("/category/suggest", {
        input: values.category,
      });
      return response.data.category;
    }
    const timer = setTimeout(async () => {
      const suggestion = await getSuggestion();
      setSuggestion(suggestion);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [values.category]);

  function handleSuggestionClick(slug) {
    setSuggestionText(slug);
    setSuggestion([]);
  }

  return (
    <section className="post-product">
      <div className="post">
        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              onChange={handleChange}
              id="productName"
              value={values.productName}
            />
          </div>
          <div className="input">
            <label htmlFor="">Product Description</label>
            <textarea
              name=""
              id="productDescription"
              cols="80"
              rows="5"
              onChange={handleChange}
              value={values.productDescription}
            ></textarea>
          </div>
          <div className="row">
            <label htmlFor="">Product Images</label>
            <input
              type="file"
              name=""
              id=""
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
          </div>
          <div className="input">
            <label htmlFor="">Available Stocks</label>
            <input
              type="number"
              name=""
              id="stocks"
              onChange={handleChange}
              value={values.stocks}
            />
          </div>
          <div className="input category">
            <label htmlFor="">Category</label>
            <input
              type="text"
              id="category"
              value={suggestionText}
              onChange={(e) => {
                setFieldValue("category", e.target.value);
                setSuggestionText(e.target.value);
              }}
            />
            <div
              className={`category-suggest ${
                suggestion.length > 0 ? "active" : ""
              }`}
            >
              {suggestion.map((sugg) => (
                <li onClick={handleSuggestionClick.bind(null, sugg.slug)}>
                  {sugg.slug}
                </li>
              ))}
              {suggestion.length === 0 ?? <span>No suggestions</span>}
            </div>
          </div>
          <div className="input">
            <label htmlFor="">Price</label>
            <input
              type="number"
              name=""
              id="price"
              onChange={handleChange}
              value={values.price}
            />
          </div>
          <button type="submit" className="btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
}
