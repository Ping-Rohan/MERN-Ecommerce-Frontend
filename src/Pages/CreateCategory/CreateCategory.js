import { useState } from "react";
import { createCategory } from "../../Store/ProductSlice";

import "./CreateCategory.css";
export default function CreateCategory() {
  const [categoryName, setCategoryName] = useState("");

  function handleCategoryNameChange(e) {
    setCategoryName(e.target.value);
  }

  function handleSubmit() {
    createCategory({ categoryName });
  }

  return (
    <section className="create-category-wrapper">
      <div className="create-category">
        <div className="input">
          <label htmlFor="">Category Name</label>
          <input type="text" onChange={handleCategoryNameChange} />
        </div>
        <button className="btn-primary" onClick={handleSubmit}>
          Add Category
        </button>
      </div>
    </section>
  );
}
