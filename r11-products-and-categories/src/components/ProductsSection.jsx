/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

function ProductsSection({ slug = "laptops", onSelect }) {
  const [products, setProducts] = useState([]);

  useEffect(
    function () {
      (async function () {
        const response = await fetch(
          `https://dummyjson.com/products/category/${slug}?limit=0`
        );
        const result = await response.json();

        setProducts(result.products);
      })();
    },
    [slug]
  );

  return (
    <>
      <section className="productsSection">
        {products.map((product) => (
          <div onClick={() => onSelect(product)}>
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </section>
    </>
  );
}

export default ProductsSection;
