/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Product({ product }) {
  return (
    <>
      <h2>{product.title}</h2>
      <p>Price: {product.price}€</p>
      <p>{product.description}</p>
      <div className="images">
        {product.images.map((imageURL) => (
          <img src={imageURL} />
        ))}
      </div>
      <p>Availability: {product.availabilityStatus}</p>
      <p>Shpping info: {product.shippingInformation}</p>
    </>
  );
}
export default Product;
