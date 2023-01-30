import ProductItem from "../../ProductItem/ProductItem";
import "./ProductWrapper.css";
import { getAllProducts } from "../../Store/ProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Productwrapper() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Product.products);

  const productsCategoriesFiltered = products.reduce((obj, v, i) => {
    obj[v.category.categoryName] = obj[v.category.categoryName] || [];
    obj[v.category.categoryName].push(v);
    return obj;
  }, {});

  const productHeadingKeys = Object.keys(productsCategoriesFiltered);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <section className="product-wrapper">
      {productHeadingKeys.map((heading) => {
        return (
          <>
            <div className="category-heading">
              <h2>{heading}</h2>
              <a href="">See more</a>
            </div>
            <div className="product-category">
              {productsCategoriesFiltered[heading].map((item) => {
                return (
                  <ProductItem
                    image={item.productImages[0]}
                    productName={item.productName.slice(0, 20)}
                    price={item.price}
                    id={item._id}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </section>
  );
}
