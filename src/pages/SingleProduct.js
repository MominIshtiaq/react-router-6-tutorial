import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  let { productId } = useParams();
  let product = products.find((product) => product.id === productId);
  let { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
