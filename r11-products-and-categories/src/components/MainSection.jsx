import CategoriesSection from "./CategoriesSection";
import ProductDetailsSection from "./ProductDetailsSection";
import ProductsSection from "./ProductsSection";
import { useState } from "react";

function MainSection() {
  const [categorySlug, setCategorySlug] = useState();
  const [selectedProduct, setSelectedProduct] = useState();

  function handleCategorySelect(category) {
    setCategorySlug(category.slug);
    setSelectedProduct(undefined);
  }

  function handleProductSelect(product) {
    setSelectedProduct(product);
  }
  return (
    <>
      <main>
        <CategoriesSection onSelect={handleCategorySelect} />
        <ProductsSection slug={categorySlug} onSelect={handleProductSelect} />
        <ProductDetailsSection product={selectedProduct} />
      </main>
    </>
  );
}

export default MainSection;
