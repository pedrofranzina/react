import Product from "./Product";

/* eslint-disable react/prop-types */
function ProductDetailsSection({ product }) {
  return (
    <>
      <section className="productDetailsSection">
        {product ? (
          <Product product={product} />
        ) : (
          <h3>tens de escolher um produto!!!!</h3>
        )}
      </section>
    </>
  );
}

export default ProductDetailsSection;
