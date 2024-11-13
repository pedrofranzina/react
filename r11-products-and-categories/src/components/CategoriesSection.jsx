/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";

function CategoriesSection({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    (async function () {
      const response = await fetch("https://dummyjson.com/products/categories");
      const result = await response.json();

      setCategories(result);
    })();
  }, []);

  return (
    <>
      <section className="categoriesSection">
        <ul>
          {categories.map((category) => (
            <li>
              <a
                href={category.slug}
                onClick={(event) => {
                  event.preventDefault();
                  onSelect(category);
                }}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default CategoriesSection;
